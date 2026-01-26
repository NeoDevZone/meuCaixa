import { CaretUp, CheckCircle } from "@phosphor-icons/react";
import { useState } from "react";
import logoMeuCaixa from "../assets/LogoMeuCaixaA.png";
import logoNeoDevZone from "../assets/LogoNeoDevZone.png";

export function Documentacao() {
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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-linear-to-r from-secondary/20 via-purple-700/20 to-indigo-700/20 blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative bg-linear-to-b from-secondary/10 via-purple-700/10 to-transparent border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={logoMeuCaixa}
                alt="Meu Caixa Logo"
                className="h-20 sm:h-24 object-contain animate-bounce hover:animate-none transition"
              />
            </div>

            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-secondary bg-secondary/10 border border-secondary/30 rounded-full backdrop-blur">
                📚 Documentação Completa
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-black bg-linear-to-r from-secondary via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Guia Completo do Meu Caixa
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Entenda cada funcionalidade e como maximizar o potencial do seu
                negócio.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center pt-4">
              <div className="h-px bg-linear-to-r from-transparent via-secondary to-transparent flex-1"></div>
              <span className="text-sm text-slate-400">Aprenda a usar</span>
              <div className="h-px bg-linear-to-r from-transparent via-secondary to-transparent flex-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-8">
        {/* Visão Geral */}
        <section className="bg-linear-to-br from-slate-900/80 to-slate-800/80 rounded-2xl shadow-2xl p-8 border border-secondary/30 transition hover:shadow-3xl hover:shadow-secondary/20">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("overview")}
          >
            <h2 className="text-3xl font-bold text-secondary flex items-center gap-3">
              🎯 Visão Geral
            </h2>
            <CaretUp
              size={28}
              weight="bold"
              className={`text-secondary transition-transform ${
                expandedSections["overview"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["overview"] !== false && (
            <div className="mt-6 text-slate-300 space-y-4">
              <p className="text-lg">
                O <strong className="text-secondary">Meu Caixa</strong> é um
                sistema simples, rápido e confiável para{" "}
                <strong>controle financeiro de pequenos negócios</strong>
                com foco em segurança e clareza.
              </p>
              <div className="bg-linear-to-r from-secondary/20 to-purple-900/30 p-6 rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-secondary text-lg mb-3">
                  ✅ Promessas que Mantemos:
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    Controle total do caixa em tempo real
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    Login seguro e acesso autorizado
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    Fiado com histórico e cobrança clara
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    Resumo mensal que evita surpresas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      size={20}
                      className="text-secondary shrink-0"
                    />
                    Suporte humano, sem robôs
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Como Começar */}
        <section className="bg-linear-to-br from-slate-900/80 to-slate-800/80 rounded-2xl shadow-2xl p-8 border border-secondary/30 transition hover:shadow-3xl hover:shadow-secondary/20">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("start")}
          >
            <h2 className="text-3xl font-bold text-secondary flex items-center gap-3">
              🚀 Como Começar
            </h2>
            <CaretUp
              size={28}
              weight="bold"
              className={`text-secondary transition-transform ${
                expandedSections["start"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["start"] && (
            <div className="mt-6 text-slate-300 space-y-6">
              <div className="flex gap-6 pb-6 border-b border-slate-700">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg text-secondary mb-2">
                    Login Seguro
                  </p>
                  <p className="text-slate-300">
                    Acesse pelo <strong>seu email e senha</strong>. Mantemos sua
                    sessão protegida para evitar acessos indevidos.
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    💡 Dica: use sempre o link oficial do Meu Caixa e mantenha o
                    navegador atualizado.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 pb-6 border-b border-slate-700">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg text-secondary mb-2">
                    Reconhecimento do Cliente
                  </p>
                  <p className="text-slate-300">
                    Após o login, carregamos somente{" "}
                    <strong>os dados do seu negócio</strong> e mantemos o acesso
                    ativo enquanto você estiver conectado.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg text-secondary mb-2">
                    Menu Principal
                  </p>
                  <p className="mb-3 text-slate-300">
                    No topo da tela, você encontrará:
                  </p>
                  <ul className="space-y-2 ml-4 text-slate-300">
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
            </div>
          )}
        </section>

        {/* Funcionalidades */}
        <section className="bg-linear-to-br from-slate-900/80 to-slate-800/80 rounded-2xl shadow-2xl p-8 border border-secondary/30 transition hover:shadow-3xl hover:shadow-secondary/20">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("features")}
          >
            <h2 className="text-3xl font-bold text-secondary flex items-center gap-3">
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
            <div className="mt-6 text-slate-300 space-y-4">
              <div className="bg-linear-to-r from-purple-900/40 to-purple-800/40 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-bold text-purple-300 mb-2">🏠 Extrato</h3>
                <p className="text-purple-300 text-sm">
                  Resumo claro por período: saldo do mês, total de entradas,
                  total de saídas e histórico de transações.
                </p>
              </div>

              <div className="bg-linear-to-r from-green-900/40 to-green-800/40 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-slate-300 mb-2">📥 Entrada</h3>
                <p className="text-slate-300 text-sm mb-2">
                  Utilize esta aba sempre que{" "}
                  <strong>dinheiro entrar no caixa</strong>.
                </p>
                <div className="text-slate-300 text-sm space-y-1">
                  <p>
                    <strong>Campos:</strong> Descrição, Valor, Data, Método
                  </p>
                  <p className="text-xs opacity-75">
                    📌 Ex: Venda de produto — R$ 100 — Dinheiro
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-r from-orange-900/40 to-orange-800/40 p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-300 mb-2">📤 Saída</h3>
                <p className="text-orange-300 text-sm mb-2">
                  Aqui você registra tudo que <strong>sai do caixa</strong>.
                </p>
                <div className="text-orange-300 text-sm space-y-1">
                  <p>
                    <strong>Campos:</strong> Descrição, Valor, Data, Método
                  </p>
                  <p className="text-xs opacity-75">
                    📌 Ex: Compra de mercadoria — R$ 30 — PIX
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-r from-blue-900/40 to-blue-800/40 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-300 mb-2">💳 Fiado</h3>
                <p className="text-blue-300 text-sm mb-2">
                  O <strong>Fiado</strong> controla vendas a prazo com
                  segurança.
                </p>
                <div className="text-blue-300 text-sm space-y-1">
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
        <section className="bg-linear-to-br from-slate-900/80 to-slate-800/80 rounded-2xl shadow-2xl p-8 border border-secondary/30 transition hover:shadow-3xl hover:shadow-secondary/20">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("plans")}
          >
            <h2 className="text-3xl font-bold text-secondary flex items-center gap-3">
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
            <div className="mt-6 text-slate-300 space-y-4">
              <div className="bg-linear-to-r from-green-900/30 to-green-800/30 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-green-300 mb-2 text-lg">
                  🟢 Plano Básico — R$ 49,90 / mês
                </h3>
                <p className="text-slate-300 text-sm mb-3">
                  Ideal para quem quer controle financeiro sem depender de
                  suporte constante.
                </p>
                <ul className="text-slate-300 text-sm space-y-2 ml-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Acesso completo ao
                    sistema
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Correções de bugs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Ajuda no uso do
                    sistema
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Atualizações
                    contínuas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Suporte via
                    WhatsApp (até 24h)
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-r from-blue-900/30 to-blue-800/30 p-6 rounded-lg border-l-4 border-blue-400 relative">
                <div className="hidden sm:block absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ MAIS POPULAR
                </div>
                <div className="sm:hidden mb-3">
                  <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    ⭐ MAIS POPULAR
                  </span>
                </div>
                <h3 className="font-bold text-blue-300 mb-2 text-lg">
                  🔵 Plano VIP — R$ 79,90 / mês
                </h3>
                <p className="text-slate-300 text-sm mb-3">
                  Para quem quer mais agilidade e proximidade.
                </p>
                <ul className="text-slate-300 text-sm space-y-2 ml-4">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Tudo do Plano
                    Básico
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Prioridade no
                    suporte (até 12h)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Backups automáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Pequenos ajustes
                    sob demanda
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Participação ativa
                    nas melhorias
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-r from-amber-900/30 to-amber-800/30 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="font-bold text-amber-300 mb-2 text-lg">
                  💳 Implantação — R$ 300,00 (única vez)
                </h3>
                <p className="text-slate-300 text-sm">
                  Configuração inicial, validação de acesso e orientações de
                  uso.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* FAQ */}
        <section className="bg-linear-to-br from-slate-900/80 to-slate-800/80 rounded-2xl shadow-2xl p-8 border border-secondary/30 transition hover:shadow-3xl hover:shadow-secondary/20">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("faq")}
          >
            <h2 className="text-3xl font-bold text-secondary flex items-center gap-3">
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
            <div className="mt-6 text-slate-300 space-y-4">
              <div className="bg-slate-800/40 border-l-4 border-secondary p-4 rounded-lg">
                <p className="font-bold text-secondary mb-2 text-base">
                  🔒 Meus dados estão seguros?
                </p>
                <p className="text-slate-300 text-sm">
                  Sim. Usamos sessão protegida, acesso restrito e dados
                  separados por cliente.
                </p>
              </div>
              <div className="bg-slate-800/40 border-l-4 border-secondary p-4 rounded-lg">
                <p className="font-bold text-secondary mb-2 text-base">
                  📱 Funciona no celular?
                </p>
                <p className="text-slate-300 text-sm">
                  Sim, o sistema é totalmente responsivo e funciona em qualquer
                  dispositivo.
                </p>
              </div>
              <div className="bg-slate-800/40 border-l-4 border-secondary p-4 rounded-lg">
                <p className="font-bold text-secondary mb-2 text-base">
                  ✏️ Posso editar ou apagar transações?
                </p>
                <p className="text-slate-300 text-sm">
                  Sim, com cuidado, pois a exclusão é permanente.
                </p>
              </div>
              <div className="bg-slate-800/40 border-l-4 border-secondary p-4 rounded-lg">
                <p className="font-bold text-secondary mb-2 text-base">
                  🔗 E se eu perder o link?
                </p>
                <p className="text-slate-300 text-sm">
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
          className="bg-linear-to-br from-slate-900/80 to-slate-800/80 rounded-2xl shadow-2xl p-8 border border-secondary/30 transition hover:shadow-3xl hover:shadow-secondary/20"
        >
          <h2 className="text-3xl font-bold text-secondary flex items-center gap-3 mb-6">
            📞 Suporte e Atendimento
          </h2>
          <p className="text-slate-300 mb-6 text-lg">
            Encontrou um problema ou tem dúvidas? Estamos aqui para ajudar!
          </p>
          <div className="bg-linear-to-r from-purple-900/20 to-blue-900/20 border border-secondary/20 p-6 rounded-xl mb-8">
            <p className="text-slate-300 font-semibold mb-3">
              <strong className="text-secondary">Canal de Atendimento:</strong>{" "}
              WhatsApp
            </p>
            <p className="text-slate-300 leading-relaxed">
              Para agilizar o atendimento, informe: O que aconteceu, data/hora e
              prints se possível. Nosso time responde em até 2 horas.
            </p>
          </div>

          {/* Botões de Contato */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://w.app/neodevzone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 text-center"
            >
              💬 Falar no WhatsApp
            </a>
            <a
              href="mailto:neodevzone@gmail.com"
              className="flex-1 bg-linear-to-r from-secondary to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/50 text-center"
            >
              📧 Enviar Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-slate-800/50 mt-16 pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8 mb-12 items-center">
            {/* Logo Meu Caixa */}
            <div className="flex justify-center">
              <img
                src={logoMeuCaixa}
                alt="Meu Caixa"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>

            {/* Info */}
            <div className="text-center text-slate-400 text-sm space-y-2">
              <p className="text-slate-300 font-semibold mb-1">
                Documentação Oficial
              </p>
              <p>Última atualização: Janeiro de 2026</p>
              <p className="text-secondary font-semibold">
                Versão: 1.1.0 — MVP
              </p>
            </div>

            {/* Logo NeoDevZone */}
            <div className="flex justify-center">
              <div className="text-center">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">
                  Criado e mantido por
                </p>
                <div className="flex items-center justify-center gap-2">
                  <img
                    src={logoNeoDevZone}
                    alt="NeoDevZone"
                    className="h-6 object-contain opacity-80 hover:opacity-100 transition"
                  />
                  <span className="text-secondary font-bold">NeoDevZone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800/50 pt-8 text-center text-slate-500 text-sm">
            <p>© 2026 Meu Caixa. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 text-slate-600">
              Desenvolvido com ❤️ por{" "}
              <span className="text-secondary">NeoDevZone</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
