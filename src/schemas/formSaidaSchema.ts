import { z } from "zod";

function currencyToNumber(value: string) {
  return Number(
    value.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
  );
}

export const formSaidaSchema = z.object({
  descricao: z.string().min(1, "Descrição obrigatória"),
  metodo: z.string().min(1, "Selecione um método"),
  valor: z
    .string()
    .min(1, "Valor obrigatório")
    .refine((val) => val !== "R$ 0,00", "Valor inválido")
    .refine((val) => currencyToNumber(val) > 0, {
      message: "O valor deve ser maior que zero",
    }),
});

export type FormSaidaSchema = z.infer<typeof formSaidaSchema>;
