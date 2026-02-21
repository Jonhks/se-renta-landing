"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// IMPORTANT: Asegúrate de tener configurado tu lib/firebase con tu db.
import { db } from "@/lib/firebase";
import { toast } from "react-toastify";

type FormData = {
  type: "bug" | "suggestion" | "abuse";
  message: string;
};

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // This state is no longer needed but kept for minimal change
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  if (!isOpen) return null;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await addDoc(collection(db, "feedback"), {
        type: data.type,
        message: data.message.trim(),
        origin: "landing",
        resolved: false,
        userAgent: navigator.userAgent,
        environment: process.env.NODE_ENV,
        createdAt: serverTimestamp(),
      });

      toast.success("¡Mensaje enviado correctamente! Gracias por ayudarnos 🙌");
      reset();
      onClose();
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      setErrorMsg(
        "Ocurrió un error al enviar tu mensaje. Verifica configuración de Firebase.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h2 className="text-xl font-semibold">Envíanos un mensaje</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                ¿Qué nos quieres contar?
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center p-3 border border-neutral-800 rounded-xl cursor-pointer hover:bg-white/5 transition-colors has-[:checked]:border-white/30 has-[:checked]:bg-white/10">
                  <input
                    type="radio"
                    value="bug"
                    {...register("type", {
                      required: "Selecciona una opción",
                    })}
                    className="hidden"
                  />
                  <span className="mr-3">🐛</span> Reportar un Bug
                </label>

                <label className="flex items-center p-3 border border-neutral-800 rounded-xl cursor-pointer hover:bg-white/5 transition-colors has-[:checked]:border-white/30 has-[:checked]:bg-white/10">
                  <input
                    type="radio"
                    value="suggestion"
                    {...register("type")}
                    className="hidden"
                  />
                  <span className="mr-3">💡</span> Sugerencia / Idea
                </label>

                <label className="flex items-center p-3 border border-neutral-800 rounded-xl cursor-pointer hover:bg-white/5 transition-colors has-[:checked]:border-red-500/30 has-[:checked]:bg-red-500/10">
                  <input
                    type="radio"
                    value="abuse"
                    {...register("type")}
                    className="hidden"
                  />
                  <span className="mr-3">⚠️</span> Reportar abuso
                </label>
              </div>
              {errors.type && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.type.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cuéntanos los detalles
              </label>
              <textarea
                {...register("message", {
                  required: "El mensaje no puede estar vacío",
                  minLength: {
                    value: 10,
                    message: "Escribe al menos 10 caracteres",
                  },
                })}
                className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all min-h-[120px] resize-none"
                placeholder="Explícanos brevemente qué pasó o qué te gustaría ver..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                {errorMsg}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-white text-black font-semibold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
