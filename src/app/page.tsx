"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ContactModal from "@/components/ContactModal";
import InstallModal from "@/components/InstallModal";

export default function Home() {
  const appUrl = "https://se-renta-app-web.vercel.app/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const testimonials = [
    {
      quote:
        "Llevaba semanas viendo los mismos anuncios falsos en grupos de Facebook. Con este mapa pude ver opciones que apenas habían colgado el letrero en la calle ayer.",
      author: "Usuario Beta",
      role: "Buscando en CDMX",
      color: "from-blue-500 to-purple-500",
    },
    {
      quote:
        "Me robaron $6,000 MXN de depósito en un grupo de Facebook por un depa que ni existía. Si hubiera existido esta app para verificar antes, me habría ahorrado los ahorros de meses.",
      author: "Víctima de fraude",
      role: "Ahora revisa en SE RENTA",
      color: "from-red-500 to-orange-500",
    },
    {
      quote:
        "Fui a ver un depa que decía 'disponible' en un portal grande y resultó que ya estaba rentado hace 1 mes. Aquí la comunidad lo marca gris y ya no pierdes el tiempo.",
      author: "Usuario Activo",
      role: "Ahorrando tiempo en el tráfico",
      color: "from-green-400 to-emerald-600",
    },
    {
      quote:
        "Me encanta que yo misma puedo ir subiendo los letreros que veo por mi calle. Es como armar nuestra propia red de vecinos para buscar depa sin inmobiliarias abusivas.",
      author: "Aportadora Top",
      role: "Más de 15 reportes confirmados",
      color: "from-pink-500 to-rose-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when scrolled past 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 25000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
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
        <section className="max-w-5xl mb-32 md:mb-48 animate-fade-in-up delay-100">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-medium tracking-wide">
            🚧 Proyecto en fase de desarrollo (MVP) — Algunas funcionalidades
            aún no están listas
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
            Evita fraudes y perder dinero buscando depa. <br />
            <span className="text-gray-400">
              De la comunidad para la comunidad{" "}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            Un mapa comunitario donde las personas confirman qué está disponible
            y reportan posibles fraudes.
          </p>
          {/* Scroll Down Indicator */}
          <div
            className={`w-full flex justify-center mt-12 transition-opacity duration-500 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center text-white/50 animate-bounce cursor-default">
              <span className="text-sm font-medium mb-1 tracking-widest uppercase">
                Descubre más abajo
              </span>
              <div className="flex flex-col items-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <svg
                  className="w-6 h-6 -mt-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
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

        {/* Cómo Funciona */}
        <section className="mb-32 md:mb-48 bg-neutral-900/50 rounded-3xl p-8 md:p-12 border border-white/5 animate-fade-in-up delay-[250ms]">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            ¿Qué pasa después de abrir el mapa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl mb-6">
                1️⃣
              </div>
              <h3 className="text-xl font-medium mb-3">
                Encuentras reportes reales
              </h3>
              <p className="text-gray-400">
                Navega por el mapa y selecciona los pines para ver detalles de
                renta en tu zona.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl mb-6">
                2️⃣
              </div>
              <h3 className="text-xl font-medium mb-3">
                Puedes confirmar reportes
              </h3>
              <p className="text-gray-400">
                Si un reporte es falso o ya se rentó, puedes votar para ayudar a
                los demás.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl mb-6">
                3️⃣
              </div>
              <h3 className="text-xl font-medium mb-3">Tu reputación suma</h3>
              <p className="text-gray-400">
                Tus aportes correctos y confirmados construyen tu Score en la
                comunidad.
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

        {/* App PWA Installation */}
        <section className="mb-32 md:mb-48 border-t border-white/10 pt-20 animate-fade-in-up delay-500">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Experiencia Nativa
              </div>
              <h2 className="text-3xl font-semibold mb-6">
                Instala la App (PWA)
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Para el mejor funcionamiento, notificaciones y comodidad al
                caminar por la calle, te recomendamos instalar SE RENTA
                directamente en la pantalla de inicio de tu celular. No ocupa
                espacio y siempre tendrás la información a la mano.
              </p>
              <button
                onClick={() => setIsInstallModalOpen(true)}
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                📱 Ver pasos de instalación
              </button>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-tr from-neutral-800 to-neutral-900 rounded-3xl shadow-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-7xl group-hover:scale-110 transition-transform">
                  📲
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios / Evidencia Social */}
        <section className="mb-32 md:mb-48 animate-fade-in-up delay-[550ms]">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Solucionando un problema real
          </h2>
          <div className="relative max-w-4xl mx-auto h-[280px] sm:h-[220px]">
            {testimonials.map((testimony, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-700 ease-in-out ${
                  index === currentTestimonial
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 translate-x-12 z-0 pointer-events-none"
                }`}
              >
                <div className="text-4xl absolute top-6 right-6 opacity-20">
                  "
                </div>
                <p className="text-gray-300 text-lg sm:text-xl italic mb-8 pr-8">
                  {testimony.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimony.color}`}
                  ></div>
                  <div>
                    <div className="font-medium text-white">
                      {testimony.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimony.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    index === currentTestimonial
                      ? "bg-white w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action / Contact */}
        <section className="text-center mb-24 mt-40 animate-fade-in-up delay-500">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Ayúdanos a mejorar
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Este es un proyecto abierto construido iterativamente. ¿Encontraste
            un bug? ¿Tienes una idea para hacerlo mejor?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors border border-white/10 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              ✉️ Envíanos un mensaje
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 animate-fade-in-up delay-500">
          <div>© {new Date().getFullYear()} SE RENTA.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link
              href={appUrl}
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Volver a la App ↗
            </Link>
          </div>
        </footer>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] pointer-events-none">
        <Link
          href={appUrl}
          target="_blank"
          className="pointer-events-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black font-bold text-base md:text-md rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
        >
          Abrir Mapa 📍
        </Link>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Install Modal */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />
    </div>
  );
}
