import { z } from "zod";

function currencyToNumber(value: string) {
  return Number(
    value.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
  );
}

export const formFiadoSchema = z.object({
  comprador: z.string().min(1, "Comprador obrigatório"),
  descricao: z.string().min(1, "Descrição obrigatória"),
  metodo: z.string().min(1, "Selecione um método"),
  categoria: z.string().min(1, "Selecione uma categoria"),
  checkBox: z.boolean(),
  valor: z
    .string()
    .min(1, "Valor obrigatório")
    .refine((val) => val !== "R$ 0,00", "Valor inválido")
    .refine((val) => currencyToNumber(val) > 0, {
      message: "O valor deve ser maior que zero",
    }),
  pago: z.string().min(1, "Selecione se foi pago ou não"),
});

export type FormFiadoSchema = z.infer<typeof formFiadoSchema>;
