import { z } from "zod";

export const changePasswordSchema = z
  .object({
    senhaAtual: z.string().min(1, "Senha atual é obrigatória"),
    senhaNova: z.string().min(6, "Senha nova deve ter pelo menos 6 caracteres"),
    confirmarSenha: z.string().min(6, "Confirmação é obrigatória"),
  })
  .refine((data) => data.senhaNova === data.confirmarSenha, {
    message: "Senhas não coincidem",
    path: ["confirmarSenha"],
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
