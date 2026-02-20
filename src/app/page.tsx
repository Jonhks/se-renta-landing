import Link from "next/link";

export default function Home() {
  const appUrl = "https://se-renta-app-web.vercel.app/";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <main className="max-w-5xl mx-auto px-6 py-20 md:py-32 overflow-hidden">
        {/* Header / Nav */}
        <header className="flex justify-between items-center mb-24 md:mb-32 animate-fade-in-up">
          <div className="text-xl font-bold tracking-tighter">SE RENTA</div>
          <Link
            href={appUrl}
            target="_blank"
            className="text-sm font-medium hover:text-gray-300 transition-colors"
          >
            Ir a la App ↗
          </Link>
        </header>

        {/* Hero Section */}
        <section className="max-w-3xl mb-32 md:mb-48 animate-fade-in-up delay-100">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
            Encuentra un depa <br />
            <span className="text-gray-400">validado por la comunidad.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            Un mapa en tiempo real enfocado 100% en opciones reales y activas.
            Ni portales saturados, ni grupos de Facebook desordenados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={appUrl}
              target="_blank"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              Abrir Mapa 📍
            </Link>
          </div>
        </section>

        {/* Manifesto */}
        <section className="mb-32 md:mb-48 animate-fade-in-up delay-200">
          <div className="p-10 md:p-16 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            <h2 className="text-3xl font-semibold mb-8 tracking-tight relative z-10">
              Manifiesto
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed relative z-10">
              <p>
                <strong className="text-white font-medium">
                  De la comunidad, para la comunidad.
                </strong>{" "}
                Buscar dónde vivir no debería ser un riesgo de fraude, ni una
                pérdida de tiempo llamando a números que ya no existen.
              </p>
              <p>
                Creemos que la inteligencia colectiva es mejor que cualquier
                algoritmo inmobiliario. Quienes caminan las calles y ven los
                letreros son la mejor fuente de verdad.
              </p>
              <p>
                <strong className="text-white font-medium">
                  Tus datos son tuyos y están seguros.
                </strong>{" "}
                No somos un data broker. Tus aportaciones están resguardadas de
                forma segura y se utilizan exclusivamente para mantener el mapa
                limpio y confiable.
              </p>
            </div>
          </div>
        </section>

        {/* Sistema de Dominancia y Marcadores */}
        <section className="mb-32 md:mb-48 animate-fade-in-up delay-300">
          <h2 className="text-3xl font-semibold mb-6">El lenguaje del mapa</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Nuestros marcadores cambian de color en tiempo real según los votos
            de la comunidad. Sabrás la verdad antes de interactuar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-green-500/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-green-600 ring-2 ring-white mb-4"></div>
              <h3 className="font-medium text-white mb-2">Verde</h3>
              <p className="text-sm text-gray-400">
                Disponible. La comunidad confirma que está activo y es real.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-yellow-500/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-yellow-500 ring-2 ring-white mb-4"></div>
              <h3 className="font-medium text-white mb-2">Amarillo</h3>
              <p className="text-sm text-gray-400">
                Precaución. Hay reportes de posible fraude o inconsistencias.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-red-500/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-red-600 ring-2 ring-white mb-4"></div>
              <h3 className="font-medium text-white mb-2">Rojo</h3>
              <p className="text-sm text-gray-400">
                Alerta roja. Fraude confirmado. Con 3 votos se oculta del mapa.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-gray-500/50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-gray-600 ring-2 ring-white mb-4"></div>
              <h3 className="font-medium text-white mb-2">Gris</h3>
              <p className="text-sm text-gray-400">
                Ya se rentó. Inactivo (2 votos) o expirado para no hacerte
                perder tiempo.
              </p>
            </div>
          </div>
        </section>

        {/* Sistema de Reputación */}
        <section className="mb-32 md:mb-48 border-t border-white/10 pt-20 animate-fade-in-up delay-400">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-6">
                Tu reputación importa
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                En SE RENTA, la veracidad se premia. Cada aporte tuyo que la
                comunidad valide positivamente, mejorará tu{" "}
                <strong>Score de Reputación</strong>.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3 items-start">
                  <span className="text-white mt-1">⭐</span>
                  <span>
                    Usuarios confiables obtienen más tiempo de vida en sus
                    reportes (hasta 20 días activos).
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-white mt-1">🛡️</span>
                  <span>
                    Subir información falsa tiene consecuencias. El fraude
                    confirmado penaliza duramente tu score y te puede costar la
                    cuenta.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-gradient-to-br from-neutral-900 to-black p-8 rounded-3xl border border-neutral-800 text-center relative overflow-hidden group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                👑
              </div>
              <div className="text-2xl font-bold mb-2">Sistema Justo</div>
              <div className="text-sm text-gray-400 px-4">
                Solo un voto único por usuario para garantizar legitimidad y
                evitar spam.
              </div>
            </div>
          </div>
        </section>

        {/* Features / Architecture Section */}
        <section className="mb-32 md:mb-48 border-t border-white/10 pt-20 animate-fade-in-up delay-500">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Un sistema operativo comunitario
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800">
              <div className="text-4xl mb-6">📍</div>
              <h3 className="text-xl font-medium mb-4">Múltiples Campos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Precio, descripción, teléfono validado a 10 dígitos y (muy
                pronto) fotos nativas.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800">
              <div className="text-4xl mb-6">⏳</div>
              <h3 className="text-xl font-medium mb-4">Base Limpia</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Todo reporte caduca a los 14 días. Cero publicaciones fantasma
                ni teléfonos desconectados.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800">
              <div className="text-4xl mb-6">🔒</div>
              <h3 className="text-xl font-medium mb-4">Reglas Seguras</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lectura pública, pero acciones exclusivas para usuarios
                logueados por Google Auth.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact */}
        <section className="text-center mb-24 animate-fade-in-up delay-500">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Ayúdanos a mejorar
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Este es un proyecto abierto construido iterativamente. ¿Encontraste
            un bug? ¿Tienes una idea para hacerlo mejor?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hola@serenta.com"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors border border-white/10 flex items-center justify-center gap-2"
            >
              ✉️ Envíanos un mensaje
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 animate-fade-in-up delay-500">
          <div>© {new Date().getFullYear()} SE RENTA.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link
              href={appUrl}
              className="hover:text-white transition-colors"
            >
              Volver a la App ↗
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
