import { z } from "zod";

function currencyToNumber(value: string) {
  return Number(
    value.replace("R$", "").replace(/\./g, "").replace(",", ".").trim(),
  );
}

export const formPrimeiroFiadoSchema = z.object({
  comprador: z.string().min(1, "Comprador obrigatório"),
  descricao: z.string().min(1, "Descrição obrigatória"),
  valor: z
    .string()
    .min(1, "Valor obrigatório")
    .refine((val) => val !== "R$ 0,00", "Valor inválido")
    .refine((val) => currencyToNumber(val) > 0, {
      message: "O valor deve ser maior que zero",
    }),
});
export const formFiadoSchema = z.object({
  descricao: z.string().min(1, "Descrição obrigatória"),
  valor: z
    .string()
    .min(1, "Valor obrigatório")
    .refine((val) => val !== "R$ 0,00", "Valor inválido")
    .refine((val) => currencyToNumber(val) > 0, {
      message: "O valor deve ser maior que zero",
    }),
});
export const formPagamentoSchema = z.object({
  metodo: z
    .string()
    .min(1, { message: "Método é obrigatório" })
    .max(100, { message: "Método deve ter no máximo 100 caracteres" }),
  valor: z
    .string()
    .min(1, "Valor obrigatório")
    .refine((val) => val !== "R$ 0,00", "Valor inválido")
    .refine((val) => currencyToNumber(val) > 0, {
      message: "O valor deve ser maior que zero",
    }),
});

export type FormFiadoSchema = z.infer<typeof formFiadoSchema>;
export type FormPrimeiroFiadoSchema = z.infer<typeof formPrimeiroFiadoSchema>;
export type FormPagamentoSchema = z.infer<typeof formPagamentoSchema>;
