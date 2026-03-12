"use client";

export default function TermsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-lg overflow-hidden animate-fade-in-up flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/5 flex-shrink-0">
          <h2 className="text-xl font-semibold">Términos y Condiciones</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 text-gray-300 overflow-y-auto text-sm leading-relaxed space-y-5">
          <p className="text-gray-400 text-xs">
            Última actualización: marzo 2026
          </p>

          <div>
            <h3 className="text-white font-semibold mb-2">
              1. Descripción del Servicio
            </h3>
            <p>
              SE RENTA es una plataforma comunitaria en fase MVP (Producto
              Mínimo Viable) que permite a sus usuarios reportar, visualizar y
              validar propiedades en renta mediante un mapa colaborativo. El
              servicio se ofrece de forma gratuita mientras se encuentra en
              desarrollo activo.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">2. Uso Aceptable</h3>
            <p>
              Al usar SE RENTA te comprometes a publicar únicamente información
              veraz sobre propiedades en renta. Está estrictamente prohibido
              publicar anuncios falsos, engañosos o de propiedades que no
              existen con fines fraudulentos. Las cuentas que incurran en estas
              prácticas podrán ser suspendidas permanentemente.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              3. Datos y Privacidad
            </h3>
            <p>
              SE RENTA utiliza Google Authentication para el inicio de sesión.
              Sólo se almacena en Firestore la información mínima necesaria
              (nombre de usuario, foto de perfil y correo electrónico desde tu
              cuenta de Google). No vendemos ni compartimos tus datos con
              terceros. Las aportaciones al mapa (reportes) son públicas.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              4. Limitación de Responsabilidad
            </h3>
            <p>
              SE RENTA es una plataforma comunitaria y{" "}
              <strong className="text-white">no verifica directamente</strong>{" "}
              los anuncios publicados. La comunidad es la encargada de validar
              la veracidad de los reportes mediante el sistema de votos. SE
              RENTA no se hace responsable por pérdidas económicas derivadas del
              uso de la información publicada por terceros en la plataforma.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              5. Propiedad de los Contenidos
            </h3>
            <p>
              Los reportes e información que publicas son de tu autoría. Al
              publicar en SE RENTA otorgas al servicio una licencia no exclusiva
              para mostrar dicho contenido dentro de la plataforma con el fin de
              cumplir el objetivo comunitario del proyecto.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">
              6. Fase MVP y Cambios al Servicio
            </h3>
            <p>
              SE RENTA se encuentra en fase de desarrollo activo. Algunas
              funcionalidades pueden cambiar, estar incompletas o interrumpirse
              temporalmente. Nos reservamos el derecho de modificar, pausar o
              descontinuar el servicio en cualquier momento, notificando a la
              comunidad cuando sea posible.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">7. Contacto</h3>
            <p>
              Si tienes dudas, comentarios o quieres reportar un problema,
              puedes contactarnos desde la sección{" "}
              <strong className="text-white">"Ayúdanos a mejorar"</strong> en
              esta misma página.
            </p>
          </div>

          <p className="text-gray-500 text-xs pt-2 border-t border-white/5">
            Al usar SE RENTA aceptas estos términos. Nos reservamos el derecho
            de actualizarlos periódicamente.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors border border-white/10 cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
