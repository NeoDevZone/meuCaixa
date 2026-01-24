import { useState } from "react";
import { Base } from "../components/base";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changePasswordSchema,
  type ChangePasswordSchema,
} from "../schemas/changePasswordSchema";
import { api } from "../services/api";

export function ChangePassword() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordSchema) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      await api.patch("/clientes/senha", {
        senhaAtual: data.senhaAtual,
        novaSenha: data.senhaNova,
      });

      setSuccessMessage("Senha alterada com sucesso!");
      reset();

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      const errorMessage =
        (error as { response?: { data?: { error?: string } } }).response?.data
          ?.error || "Erro ao alterar senha. Tente novamente.";
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Base>
      <div className="flex justify-center pt-10 sm:pt-13 flex-col items-center px-4">
        <h1 className="text-text-dark text-2xl sm:text-4xl pb-10 sm:pb-20 font-bold">
          Alterar Senha
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm sm:max-w-md md:max-w-135 h-full bg-text-dark rounded-2xl p-4 sm:p-5 gap-5 sm:gap-7.5 flex flex-col"
        >
          <div className="flex flex-col gap-1">
            <span className="text-secondary">Senha Atual</span>
            <input
              {...register("senhaAtual")}
              className="bg-border-detail border-2 border-secondary rounded-2xl h-12.5 p-2"
              type="password"
              placeholder="Digite sua senha atual"
            />
            {errors.senhaAtual && (
              <span className="text-red-500 text-sm">
                {errors.senhaAtual.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-secondary">Nova Senha</span>
            <input
              {...register("senhaNova")}
              className="bg-border-detail border-2 border-secondary rounded-2xl h-12.5 p-2"
              type="password"
              placeholder="Digite sua nova senha"
            />
            {errors.senhaNova && (
              <span className="text-red-500 text-sm">
                {errors.senhaNova.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-secondary">Confirmar Nova Senha</span>
            <input
              {...register("confirmarSenha")}
              className="bg-border-detail border-2 border-secondary rounded-2xl h-12.5 p-2"
              type="password"
              placeholder="Confirme sua nova senha"
            />
            {errors.confirmarSenha && (
              <span className="text-red-500 text-sm">
                {errors.confirmarSenha.message}
              </span>
            )}
          </div>

          {successMessage && (
            <div className="bg-green-500 text-white text-sm text-center py-3 px-4 rounded-2xl">
              {successMessage}
            </div>
          )}

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full max-w-50 sm:max-w-67.5 h-12 sm:h-14 text-text-dark text-base sm:text-lg font-bold bg-secondary rounded-2xl hover:cursor-pointer hover:rounded-sm hover:border-2 hover:border-border-detail transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Alterando..." : "Alterar Senha"}
            </button>
          </div>
        </form>
      </div>
    </Base>
  );
}
