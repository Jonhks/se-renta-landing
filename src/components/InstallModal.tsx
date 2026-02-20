import { useState } from "react";

export default function InstallModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"ios" | "android">("ios");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h2 className="text-xl font-semibold">Guía de Instalación (PWA)</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-gray-300">
          <p className="mb-6">
            Lleva a SE RENTA en tu pantalla de inicio para una experiencia más
            rápida y pantalla completa. Sigue los pasos según tu dispositivo:
          </p>

          {/* OS Tabs */}
          <div className="flex bg-black rounded-lg p-1 mb-6 border border-white/5 text-sm font-medium">
            <button
              onClick={() => setActiveTab("ios")}
              className={`flex-1 py-3 rounded-md transition-all cursor-pointer ${
                activeTab === "ios"
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              🍎 iPhone (iOS)
            </button>
            <button
              onClick={() => setActiveTab("android")}
              className={`flex-1 py-3 rounded-md transition-all cursor-pointer ${
                activeTab === "android"
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              🤖 Android
            </button>
          </div>

          {/* Instructions */}
          <div className="min-h-[160px]">
            {activeTab === "ios" ? (
              <ol className="space-y-4 pl-4 list-decimal marker:text-gray-500 text-sm">
                <li>
                  Abre el mapa principal de SE RENTA
                  {/* <strong>Safari</strong>. */}
                </li>
                <li>
                  Toca el botón central inferior de <strong>Compartir</strong>{" "}
                  <span className="inline-block bg-white/10 px-2 rounded-sm mx-1 text-xs">
                    (cuadro con flecha 📤)
                  </span>
                  .
                </li>
                <li>
                  Desliza hacia abajo en el menú y selecciona{" "}
                  <strong>"Agregar a inicio"</strong> (Add to Home Screen 📱).
                </li>
                <li>
                  Confirma tocando <strong>"Agregar"</strong> arriba a la
                  derecha.
                </li>
              </ol>
            ) : (
              <ol className="space-y-4 pl-4 list-decimal marker:text-gray-500 text-sm">
                <li>
                  Abre el mapa principal de SE RENTA en tu navegador (ej:{" "}
                  <strong>Chrome</strong>).
                </li>
                <li>
                  Toca el botón de <strong>Menú</strong>{" "}
                  <span className="inline-block bg-white/10 px-2 rounded-sm mx-1 text-xs">
                    (3 puntitos verticales ⋮)
                  </span>{" "}
                  arriba a la derecha.
                </li>
                <li>
                  Selecciona la opción{" "}
                  <strong>"Agregar a la pantalla principal"</strong> (Install
                  App 📱).
                </li>
                <li>Confirma la instalación en el mensaje emergente.</li>
              </ol>
            )}
          </div>

          {/* Footer Action */}
          <button
            onClick={onClose}
            className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors border border-white/10 cursor-pointer"
          >
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  );
}
