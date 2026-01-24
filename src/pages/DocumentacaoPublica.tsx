import { CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

export function DocumentacaoPublica() {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    overview: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-slate-100">
      {/* Header com marca e prova social */}
      <div className="bg-linear-to-r from-secondary via-purple-700 to-indigo-700 text-white py-10 sm:py-14 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/80">
            Guia rápido + confiança de marca
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            📊 Meu Caixa
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Controle total do caixa em tempo real, com acesso protegido e
            suporte humano para negócios locais.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur">
              Login seguro e verificado
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur">
              Mobile-first
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur">
              Suporte rápido por pessoas
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="/login"
              className="px-5 py-3 rounded-lg bg-white text-secondary font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition"
            >
              Entrar no sistema
            </a>
            <a
              href="#suporte"
              className="px-5 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition"
            >
              Falar com o suporte
            </a>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20 space-y-8">
        {/* Visão Geral */}
        <section className="bg-white/95 rounded-lg shadow-xl p-6 border border-white/10 text-slate-800">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("overview")}
          >
            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-2">
              🎯 Visão Geral
            </h2>
            <CaretUp
              size={24}
              className={`transition-transform ${
                expandedSections["overview"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["overview"] !== false && (
            <div className="mt-4 text-gray-700 space-y-3">
              <p>
                O <strong>Meu Caixa</strong> é um sistema simples, rápido e
                confiável para{" "}
                <strong>controle financeiro de pequenos negócios</strong>
                com foco em segurança e clareza.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">
                  ✅ Promessas da Marca:
                </h3>
                <ul className="space-y-1 text-blue-900 text-sm">
                  <li>✓ Controle total do caixa em tempo real</li>
                  <li>✓ Login seguro e acesso autorizado</li>
                  <li>✓ Fiado com histórico e cobrança clara</li>
                  <li>✓ Resumo mensal que evita surpresas</li>
                  <li>✓ Suporte humano, sem robôs</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Como Começar */}
        <section className="bg-white/95 rounded-lg shadow-xl p-6 border border-white/10 text-slate-800">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("start")}
          >
            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-2">
              🚀 Como Começar
            </h2>
            <CaretUp
              size={24}
              className={`transition-transform ${
                expandedSections["start"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["start"] && (
            <div className="mt-4 text-gray-700 space-y-4">
              <div>
                <p className="font-bold text-lg mb-1">1️⃣ Login Seguro</p>
                <p>
                  Acesse pelo <strong>seu email e senha</strong>. Mantemos sua
                  sessão protegida para evitar acessos indevidos.
                </p>
                <p className="text-sm text-gray-500">
                  Dica: use sempre o link oficial do Meu Caixa e mantenha o
                  navegador atualizado.
                </p>
              </div>
              <div>
                <p className="font-bold text-lg mb-1">
                  2️⃣ Reconhecimento do Cliente
                </p>
                <p>
                  Após o login, carregamos somente{" "}
                  <strong>os dados do seu negócio</strong> e mantemos o acesso
                  ativo enquanto você estiver conectado.
                </p>
              </div>
              <div>
                <p className="font-bold text-lg mb-1">3️⃣ Menu Principal</p>
                <p>No topo da tela, você encontrará:</p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>
                    • <strong>Extrato</strong> — Visão geral do caixa
                  </li>
                  <li>
                    • <strong>Entrada</strong> — Registrar dinheiro que entrou
                  </li>
                  <li>
                    • <strong>Saída</strong> — Registrar despesas
                  </li>
                  <li>
                    • <strong>Fiado</strong> — Controle de vendas a crédito
                  </li>
                  <li>
                    • <strong>Ajuda</strong> — Documentação completa
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Funcionalidades */}
        <section className="bg-white/95 rounded-lg shadow-xl p-6 border border-white/10 text-slate-800">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("features")}
          >
            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-2">
              💼 Funcionalidades Principais
            </h2>
            <CaretUp
              size={24}
              className={`transition-transform ${
                expandedSections["features"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["features"] && (
            <div className="mt-4 text-gray-700 space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">🏠 Extrato</h3>
                <p className="text-purple-900 text-sm">
                  Resumo claro por período: saldo do mês, total de entradas,
                  total de saídas e histórico de transações.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">📥 Entrada</h3>
                <p className="text-green-900 text-sm mb-2">
                  Utilize esta aba sempre que{" "}
                  <strong>dinheiro entrar no caixa</strong>.
                </p>
                <div className="text-green-900 text-sm space-y-1">
                  <p>
                    <strong>Campos:</strong> Descrição, Valor, Data, Método
                  </p>
                  <p className="text-xs opacity-75">
                    📌 Ex: Venda de produto — R$ 100 — Dinheiro
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">📤 Saída</h3>
                <p className="text-orange-900 text-sm mb-2">
                  Aqui você registra tudo que <strong>sai do caixa</strong>.
                </p>
                <div className="text-orange-900 text-sm space-y-1">
                  <p>
                    <strong>Campos:</strong> Descrição, Valor, Data, Método
                  </p>
                  <p className="text-xs opacity-75">
                    📌 Ex: Compra de mercadoria — R$ 30 — PIX
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">💳 Fiado</h3>
                <p className="text-blue-900 text-sm mb-2">
                  O <strong>Fiado</strong> controla vendas a prazo com
                  segurança.
                </p>
                <div className="text-blue-900 text-sm space-y-1">
                  <p>
                    <strong>Funcionalidades:</strong> Lista de devedores,
                    histórico completo, marcar como pago, remover registro
                  </p>
                  <p className="text-xs opacity-75">
                    ✅ Ao marcar como pago, o valor entra automaticamente como
                    Entrada
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Planos */}
        <section className="bg-white/95 rounded-lg shadow-xl p-6 border border-white/10 text-slate-800">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("plans")}
          >
            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-2">
              💰 Planos e Valores
            </h2>
            <CaretUp
              size={24}
              className={`transition-transform ${
                expandedSections["plans"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["plans"] && (
            <div className="mt-4 text-gray-700 space-y-4">
              <div className="bg-linear-to-r from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">
                  🟢 Plano Básico — R$ 39,90 / mês
                </h3>
                <p className="text-green-900 text-sm mb-2">
                  Ideal para quem quer controle financeiro sem depender de
                  suporte constante.
                </p>
                <ul className="text-green-900 text-sm space-y-1 ml-4">
                  <li>✓ Acesso completo ao sistema</li>
                  <li>✓ Correções de bugs</li>
                  <li>✓ Backups automáticos</li>
                  <li>✓ Atualizações contínuas</li>
                  <li>✓ Suporte via WhatsApp (até 24h)</li>
                </ul>
              </div>

              <div className="bg-linear-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">
                  🔵 Plano VIP — R$ 59,90 / mês ⭐
                </h3>
                <p className="text-blue-900 text-sm mb-2">
                  Para quem quer mais agilidade e proximidade.
                </p>
                <ul className="text-blue-900 text-sm space-y-1 ml-4">
                  <li>✓ Tudo do Plano Básico</li>
                  <li>✓ Prioridade no suporte (até 12h)</li>
                  <li>✓ Ajuda no uso do sistema</li>
                  <li>✓ Pequenos ajustes sob demanda</li>
                  <li>✓ Participação ativa nas melhorias</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">
                  💳 Implantação — R$ 300,00 (única vez)
                </h3>
                <p className="text-yellow-900 text-sm">
                  Configuração inicial, validação de acesso e orientações de
                  uso.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* FAQ */}
        <section className="bg-white/95 rounded-lg shadow-xl p-6 border border-white/10 text-slate-800">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("faq")}
          >
            <h2 className="text-2xl font-bold text-text-dark flex items-center gap-2">
              ❓ Dúvidas Frequentes
            </h2>
            <CaretUp
              size={24}
              className={`transition-transform ${
                expandedSections["faq"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["faq"] && (
            <div className="mt-4 text-gray-700 space-y-3">
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-bold text-text-dark">
                  Meus dados estão seguros?
                </p>
                <p className="text-sm mt-1">
                  Sim. Usamos sessão protegida, acesso restrito e dados
                  separados por cliente.
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-bold text-text-dark">Funciona no celular?</p>
                <p className="text-sm mt-1">
                  Sim, o sistema é totalmente responsivo e funciona em qualquer
                  dispositivo.
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-bold text-text-dark">
                  Posso editar ou apagar transações?
                </p>
                <p className="text-sm mt-1">
                  Sim, com cuidado, pois a exclusão é permanente.
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-bold text-text-dark">
                  E se eu perder o link?
                </p>
                <p className="text-sm mt-1">
                  Entre em contato com o suporte e eles reenvia o link para
                  você.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Suporte */}
        <section
          id="suporte"
          className="bg-linear-to-r from-secondary to-purple-700 rounded-lg shadow-xl p-6 text-white"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            📞 Suporte e Atendimento
          </h2>
          <p className="mb-4">
            Encontrou um problema ou tem dúvidas? Estamos aqui para ajudar!
          </p>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <p className="text-sm text-black">
              <strong>Canal de Atendimento:</strong> WhatsApp
            </p>
            <p className="text-sm mt-2 text-black">
              Para agilizar o atendimento, informe: O que aconteceu, data/hora e
              prints se possível.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm pt-4 pb-6">
          <p>Última atualização: Janeiro de 2026</p>
          <p>Versão: 1.1.0 — MVP</p>
        </div>
      </div>
    </div>
  );
}
