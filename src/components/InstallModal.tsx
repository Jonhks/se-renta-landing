"use client";

import { useState } from "react";

type Tab = "android" | "iphone" | "pc" | "mac";

export default function InstallModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("android");
  const [showWhy, setShowWhy] = useState(false);

  if (!isOpen) return null;

  const tabs: { id: Tab; label: string }[] = [
    { id: "android", label: "📱 Android" },
    { id: "iphone", label: "🍏 iPhone / iPad" },
    { id: "pc", label: "💻 PC / Mac Chrome" },
    { id: "mac", label: "🍎 Mac Safari" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-lg overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/5 flex-shrink-0">
          <h2 className="text-xl font-semibold">Instalar SE RENTA</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 text-gray-300 overflow-y-auto">
          <p className="mb-6 text-sm text-gray-400">
            Instala SE RENTA en tu pantalla de inicio para acceder al mapa con
            un solo toque, sin abrir el navegador. Selecciona tu dispositivo:
          </p>

          {/* Tabs */}
          <div className="grid grid-cols-2 gap-1.5 bg-black rounded-xl p-1 mb-6 border border-white/5 text-xs font-medium">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2.5 px-2 rounded-lg transition-all cursor-pointer text-center ${
                  activeTab === tab.id
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Instructions */}
          <div className="min-h-[200px]">
            {activeTab === "android" && (
              <div>
                <ol className="space-y-4 pl-4 list-decimal marker:text-gray-500 text-sm">
                  <li>
                    Abre <strong>Google Chrome</strong> y ve a la app de SE
                    RENTA.
                  </li>
                  <li>
                    Verás un banner que dice{" "}
                    <strong>"Agregar a la pantalla de inicio"</strong>. Si no
                    aparece, toca el menú{" "}
                    <span className="inline-block bg-white/10 px-2 rounded-sm mx-1 text-xs">
                      (tres puntos ⋮ arriba a la derecha)
                    </span>
                    .
                  </li>
                  <li>
                    Selecciona{" "}
                    <strong>"Agregar a la pantalla de inicio"</strong> y
                    confirma tocando <strong>"Agregar"</strong>.
                  </li>
                  <li>
                    ¡Listo! Verás el ícono de SE RENTA en tu pantalla de inicio.
                  </li>
                </ol>
              </div>
            )}

            {activeTab === "iphone" && (
              <div>
                <ol className="space-y-4 pl-4 list-decimal marker:text-gray-500 text-sm">
                  <li>
                    Abre <strong>Safari</strong> y ve a la app de SE RENTA.
                  </li>
                  <li>
                    Toca el botón de <strong>Compartir</strong>{" "}
                    <span className="inline-block bg-white/10 px-2 rounded-sm mx-1 text-xs">
                      (cuadro con flecha 📤 en la barra inferior)
                    </span>
                    .
                  </li>
                  <li>
                    Desliza hacia abajo en el menú y selecciona{" "}
                    <strong>"Agregar a Inicio"</strong> (Add to Home Screen 📱).
                  </li>
                  <li>
                    Escribe un nombre si quieres y toca{" "}
                    <strong>"Agregar"</strong> arriba a la derecha.
                  </li>
                  <li>
                    ¡SE RENTA ya estará en tu pantalla de inicio como una app
                    normal!
                  </li>
                </ol>
              </div>
            )}

            {activeTab === "pc" && (
              <div>
                <ol className="space-y-4 pl-4 list-decimal marker:text-gray-500 text-sm">
                  <li>
                    Abre <strong>Google Chrome</strong> o{" "}
                    <strong>Microsoft Edge</strong> y ve a la app de SE RENTA.
                  </li>
                  <li>
                    Busca el ícono de instalación en la barra de dirección{" "}
                    <span className="inline-block bg-white/10 px-2 rounded-sm mx-1 text-xs">
                      (símbolo de descarga o "+")
                    </span>
                    . Si no aparece, abre el menú{" "}
                    <span className="inline-block bg-white/10 px-2 rounded-sm mx-1 text-xs">
                      (tres puntos ⋮)
                    </span>
                    .
                  </li>
                  <li>
                    Haz clic en <strong>"Instalar aplicación"</strong> y
                    confirma.
                  </li>
                  <li>
                    SE RENTA se abrirá en su propia ventana y quedará instalada
                    en tu computadora como una app de escritorio.
                  </li>
                </ol>
              </div>
            )}

            {activeTab === "mac" && (
              <div>
                <ol className="space-y-4 pl-4 list-decimal marker:text-gray-500 text-sm">
                  <li>
                    Abre <strong>Safari</strong> y ve a la app de SE RENTA.
                  </li>
                  <li>
                    En la barra de menú superior, haz clic en{" "}
                    <strong>Archivo</strong> (File) y luego en{" "}
                    <strong>"Agregar al Dock"</strong> (Add to Dock).
                  </li>
                  <li>
                    Confirma. SE RENTA aparecerá en tu Dock como cualquier otra
                    aplicación.
                  </li>
                </ol>
                <p className="mt-4 text-xs text-gray-500">
                  * Esta opción está disponible en macOS Sonoma (Safari 17) o
                  superior.
                </p>
              </div>
            )}
          </div>

          {/* Tip */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-400">
            💡 <strong className="text-gray-300">Recomendación:</strong> Para la
            mejor experiencia, instala SE RENTA en tu celular. Así podrás
            revisar reportes desde la calle, en tiempo real, con un solo toque.
          </div>

          {/* ¿Por qué instalarla? — collapsible */}
          <div className="mt-4 rounded-2xl border border-white/10 overflow-hidden">
            <button
              onClick={() => setShowWhy((v) => !v)}
              className="w-full flex justify-between items-center px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-sm font-medium text-gray-200"
            >
              <span>🤔 ¿Por qué instalarla como app?</span>
              <span
                className={`transition-transform duration-300 text-gray-400 text-xs ${
                  showWhy ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>

            {showWhy && (
              <div className="px-4 pb-5 pt-3 bg-black/30 text-xs text-gray-400 space-y-4">
                {/* Beneficios PWA */}
                <div>
                  <p className="text-gray-200 font-semibold mb-2">
                    📲 Ventajas de instalarla como PWA
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">⚡</span>
                      <span>
                        <strong className="text-gray-300">
                          Acceso instantáneo
                        </strong>{" "}
                        — ábrela desde tu pantalla de inicio con un toque, sin
                        buscar el navegador.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">💾</span>
                      <span>
                        <strong className="text-gray-300">
                          Sin descargas ni actualizaciones
                        </strong>{" "}
                        — no ocupa espacio en tu celular y siempre está
                        actualizada automáticamente.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">🗺️</span>
                      <span>
                        <strong className="text-gray-300">
                          Pantalla completa
                        </strong>{" "}
                        — el mapa se ve más grande y fluido que abrirla desde
                        una pestaña del navegador.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0">🔔</span>
                      <span>
                        <strong className="text-gray-300">
                          Notificaciones futuras
                        </strong>{" "}
                        — cuando activemos alertas de nuevos reportes cerca de
                        ti, las recibirás si tienes la PWA instalada.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Privacidad */}
                <div className="pt-3 border-t border-white/10">
                  <p className="text-gray-200 font-semibold mb-2">
                    🔒 Tus datos, sin drama
                  </p>
                  <p className="leading-relaxed">
                    Solo usamos tu cuenta de Google para que puedas subir
                    reportes y votar en el mapa — nada más. No vendemos tu
                    información, no la compartimos con nadie y no te vamos a
                    llenar el correo de spam.
                  </p>
                  <p className="mt-2 leading-relaxed">
                    El único motivo del login es evitar que bots llenen el mapa
                    de anuncios falsos. Tu información está segura y sólo se usa
                    para los fines de la app.
                  </p>
                  <p className="mt-2 text-gray-300 font-medium">
                    No nos vamos a pasar de lanza contigo. 🤝
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors border border-white/10 cursor-pointer"
          >
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  );
}
