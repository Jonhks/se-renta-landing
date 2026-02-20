"use client";

import { useState, useEffect } from "react";

export default function UpdateModal() {
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    let currentVersion = "";

    const checkVersion = async () => {
      try {
        // Fetch version.json con un cache buster para evitar que el navegador nos devuelva la misma respuesta siempre
        const res = await fetch(`/version.json?t=${new Date().getTime()}`, {
          cache: "no-store",
        });
        if (!res.ok) return;

        const data = await res.json();
        const latestVersion = data.version;

        if (!currentVersion) {
          // Primera carga: guardamos la versión actual
          currentVersion = latestVersion;
        } else if (currentVersion !== latestVersion) {
          // Si la versión en el servidor es distinta a la que cargamos, hay actualización
          setHasUpdate(true);
        }
      } catch (error) {
        console.error("Error checking version:", error);
      }
    };

    // Checamos al inicio
    checkVersion();

    // Checamos cada 5 minutos
    const intervalId = setInterval(checkVersion, 5 * 60 * 1000);

    // Checamos cuando el usuario regresa a la pestaña (por si dejó la app abierta en el celular)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkVersion();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (!hasUpdate) return null;

  const handleUpdate = () => {
    // Forzamos la recarga de la página para obtener los nuevos archivos
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-blue-500/30 rounded-3xl w-full max-w-sm overflow-hidden animate-fade-in-up text-center p-8 relative shadow-2xl shadow-blue-500/10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="text-6xl mb-4">✨</div>
        <h2 className="text-2xl font-semibold mb-3">
          ¡Nueva versión disponible!
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Hemos lanzado mejoras en la plataforma. Actualiza para disfrutar de la
          última versión de SE RENTA.
        </p>
        <button
          onClick={handleUpdate}
          className="w-full py-4 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          🔄 Actualizar App
        </button>
      </div>
    </div>
  );
}
