import {
  CaretUp,
  CheckCircle,
  LightbulbFilament,
  ShieldCheck,
  Rocket,
} from "@phosphor-icons/react";
import { useState } from "react";
import logoMeuCaixa from "../assets/LogoMeuCaixaA.png";
import logoNeoDevZone from "../assets/LogoNeoDevZone.png";

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
              <span className="px-3 sm:px-4 py-2 text-xs uppercase tracking-wide sm:tracking-[0.2em] font-semibold text-secondary bg-secondary/10 border border-secondary/30 rounded-full backdrop-blur whitespace-nowrap">
                ✨ Controle Financeiro Inteligente
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-black bg-linear-to-r from-secondary via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Seu Caixa, Sem Dor de Cabeça
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Gerencie sua loja com precisão. Acompanhe entradas, saídas,
                fiados e crescimento em tempo real.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur hover:bg-white/10 transition">
                <div className="text-2xl mb-1">⚡</div>
                <p className="text-xs text-slate-400">Tempo Real</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur hover:bg-white/10 transition">
                <div className="text-2xl mb-1">🔒</div>
                <p className="text-xs text-slate-400">100% Seguro</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur hover:bg-white/10 transition">
                <div className="text-2xl mb-1">📱</div>
                <p className="text-xs text-slate-400">Mobile</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur hover:bg-white/10 transition">
                <div className="text-2xl mb-1">👥</div>
                <p className="text-xs text-slate-400">Suporte Real</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <a
                href="/login"
                className="px-8 py-4 rounded-lg bg-linear-to-r from-secondary to-purple-600 text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
              >
                Começar Agora →
              </a>
              <a
                href="https://w.app/neodevzone"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-secondary/10 transition"
              >
                Conversar com Suporte
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center pt-4">
              <div className="h-px bg-linear-to-r from-transparent via-secondary to-transparent flex-1"></div>
              <span className="text-sm text-slate-400">
                Confiado por pequenos negócios
              </span>
              <div className="h-px bg-linear-to-r from-transparent via-secondary to-transparent flex-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-16">
        {/* Why Choose Us */}
        <section className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
              Por Que Meu Caixa?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ferramentas simples que entregam resultados reais para seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="group p-6 rounded-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-secondary/50 transition hover:shadow-lg hover:shadow-secondary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition">
                  <Rocket className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Rápido & Prático</h3>
                  <p className="text-slate-400">
                    Registre transações em segundos. Sem complicações, sem
                    formulários enormes.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group p-6 rounded-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-secondary/50 transition hover:shadow-lg hover:shadow-secondary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition">
                  <ShieldCheck className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Segurança Garantida
                  </h3>
                  <p className="text-slate-400">
                    Seus dados são privados, protegidos e acessíveis apenas por
                    você.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group p-6 rounded-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-secondary/50 transition hover:shadow-lg hover:shadow-secondary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition">
                  <LightbulbFilament className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Inteligência em Tempo Real
                  </h3>
                  <p className="text-slate-400">
                    Veja seu fluxo de caixa atualizado minuto a minuto.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="group p-6 rounded-xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-secondary/50 transition hover:shadow-lg hover:shadow-secondary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition">
                  <CheckCircle className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suporte Humano</h3>
                  <p className="text-slate-400">
                    Conversa com pessoas reais, não robôs. Rápido e eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                <strong>controle financeiro de pequenos negócios</strong> com
                foco em segurança e clareza.
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
                  <p className="mb-3">No topo da tela, você encontrará:</p>
                  <ul className="space-y-2 ml-4">
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
              size={28}
              weight="bold"
              className={`text-secondary transition-transform ${
                expandedSections["features"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["features"] && (
            <div className="mt-6 text-slate-300 space-y-4">
              <div className="bg-linear-to-r from-purple-900/40 to-purple-800/40 p-6 rounded-xl border-l-4 border-purple-400">
                <h3 className="font-bold text-purple-300 mb-2 text-lg">
                  🏠 Extrato
                </h3>
                <p className="text-slate-300">
                  Resumo claro por período: saldo do mês, total de entradas,
                  total de saídas e histórico de transações.
                </p>
              </div>

              <div className="bg-linear-to-r from-green-900/40 to-green-800/40 p-6 rounded-xl border-l-4 border-green-400">
                <h3 className="font-bold text-green-300 mb-2 text-lg">
                  📥 Entrada
                </h3>
                <p className="text-slate-300 mb-3">
                  Utilize esta aba sempre que{" "}
                  <strong>dinheiro entrar no caixa</strong>.
                </p>
                <div className="text-slate-300">
                  <p className="text-sm">
                    <strong>Campos:</strong> Descrição, Valor, Data, Método
                  </p>
                  <p className="text-xs opacity-75 mt-2">
                    📌 Ex: Venda de produto — R$ 100 — Dinheiro
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-r from-orange-900/40 to-orange-800/40 p-6 rounded-xl border-l-4 border-orange-400">
                <h3 className="font-bold text-orange-300 mb-2 text-lg">
                  📤 Saída
                </h3>
                <p className="text-orange-300 mb-3">
                  Aqui você registra tudo que <strong>sai do caixa</strong>.
                </p>
                <div className="text-orange-300">
                  <p className="text-sm">
                    <strong>Campos:</strong> Descrição, Valor, Data, Método
                  </p>
                  <p className="text-xs opacity-75 mt-2">
                    📌 Ex: Compra de mercadoria — R$ 30 — PIX
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-r from-blue-900/40 to-blue-800/40 p-6 rounded-xl border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-300 mb-2 text-lg">
                  💳 Fiado
                </h3>
                <p className="text-blue-300 mb-3">
                  O <strong>Fiado</strong> controla vendas a prazo com
                  segurança.
                </p>
                <div className="text-blue-300">
                  <p className="text-sm">
                    <strong>Funcionalidades:</strong> Lista de devedores,
                    histórico completo, marcar como pago, remover registro
                  </p>
                  <p className="text-xs opacity-75 mt-2">
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
              size={28}
              weight="bold"
              className={`text-secondary transition-transform ${
                expandedSections["plans"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["plans"] && (
            <div className="mt-6 space-y-4">
              <div className="bg-linear-to-br from-green-900/40 to-green-800/40 p-6 rounded-xl border-2 border-green-400 hover:shadow-lg transition">
                <h3 className="font-bold text-slate-300 mb-2 text-lg">
                  🟢 Plano Básico — R$ 49,90 / mês
                </h3>
                <p className="text-slate-300 mb-4">
                  Ideal para quem quer controle financeiro sem depender de
                  suporte constante.
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Acesso completo ao sistema
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Correções de bugs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Ajuda no uso do sistema
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Atualizações contínuas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Suporte via WhatsApp (até 24h)
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-xl border-2 border-blue-400 hover:shadow-lg transition relative">
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
                <p className="text-blue-300 mb-4">
                  Para quem quer mais agilidade e proximidade.
                </p>
                <ul className="text-blue-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Tudo do Plano Básico
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Prioridade no suporte (até 12h)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Backups automáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Pequenos ajustes sob demanda
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="shrink-0" />
                    Participação ativa nas melhorias
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-br from-yellow-900/40 to-yellow-800/40 p-6 rounded-xl border-2 border-yellow-400 hover:shadow-lg transition">
                <h3 className="font-bold text-yellow-300 mb-2 text-lg">
                  💳 Implantação — R$ 300,00 (única vez)
                </h3>
                <p className="text-yellow-300">
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
              size={28}
              weight="bold"
              className={`text-secondary transition-transform ${
                expandedSections["faq"] ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections["faq"] && (
            <div className="mt-6 text-slate-300 space-y-4">
              <div className="border-l-4 border-secondary pl-6 py-2">
                <p className="font-bold text-secondary text-lg">
                  Meus dados estão seguros?
                </p>
                <p className="text-slate-300 mt-2">
                  Sim. Usamos sessão protegida, acesso restrito e dados
                  separados por cliente. Todos os seus dados são armazenados com
                  segurança.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-6 py-2">
                <p className="font-bold text-secondary text-lg">
                  Funciona no celular?
                </p>
                <p className="text-slate-300 mt-2">
                  Sim, o sistema é totalmente responsivo e funciona em qualquer
                  dispositivo com navegador atualizado.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-6 py-2">
                <p className="font-bold text-secondary text-lg">
                  Posso editar ou apagar transações?
                </p>
                <p className="text-slate-300 mt-2">
                  Sim, com cuidado, pois a exclusão é permanente. Recomendamos
                  confirmar antes de deletar.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-6 py-2">
                <p className="font-bold text-secondary text-lg">
                  E se eu perder o link?
                </p>
                <p className="text-slate-300 mt-2">
                  Entre em contato com o suporte via WhatsApp e eles reenvia o
                  link para você em poucos minutos.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Suporte */}
        <section
          id="suporte"
          className="bg-linear-to-br from-slate-900/80 to-slate-800/80 rounded-2xl shadow-2xl p-8 border border-secondary/30 text-slate-100 transition hover:shadow-3xl hover:shadow-secondary/20"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-secondary">
            📞 Suporte e Atendimento
          </h2>
          <p className="mb-6 text-lg text-slate-300">
            Encontrou um problema ou tem dúvidas? Estamos aqui para ajudar!
          </p>
          <div className="bg-secondary/10 backdrop-blur p-6 rounded-xl border border-secondary/30">
            <p className="text-lg font-semibold mb-2 text-secondary">
              💬 Canal de Atendimento: WhatsApp
            </p>
            <p className="text-slate-300 mb-4">
              Para agilizar o atendimento, informe: O que aconteceu, data/hora e
              prints se possível.
            </p>
            <a
              href="https://w.app/neodevzone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition shadow-lg"
            >
              Entrar em Contato →
            </a>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Controle seu negócio com confiança. Acesse agora.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/login"
              className="px-8 py-4 rounded-lg bg-linear-to-r from-secondary to-purple-600 text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
            >
              Entrar no Sistema
            </a>
            <a
              href="https://w.app/neodevzone"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-secondary/10 transition"
            >
              Agendar Demo
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Sobre */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-secondary">Sobre</h3>
              <p className="text-slate-400 text-sm">
                Meu Caixa é a solução de controle financeiro para pequenos
                negócios que buscam clareza e segurança.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-secondary">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/login"
                    className="text-slate-400 hover:text-secondary transition"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/documentacao"
                    className="text-slate-400 hover:text-secondary transition"
                  >
                    Documentação
                  </a>
                </li>
                <li>
                  <a
                    href="https://w.app/neodevzone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-secondary transition"
                  >
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-secondary">Conecte-se</h3>
              <p className="text-slate-400 text-sm">
                Dúvidas? Fale com nosso time pelo WhatsApp.
              </p>
              <a
                href="https://w.app/neodevzone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-secondary text-white rounded-lg font-semibold text-sm hover:bg-secondary/90 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Logos e Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-center gap-8 mb-6">
              {/* Logo Meu Caixa */}
              <div className="flex items-center gap-4">
                <img
                  src={logoMeuCaixa}
                  alt="Meu Caixa"
                  className="h-12 object-contain"
                />
              </div>

              {/* Divider */}
              <div className="text-slate-500">+</div>

              {/* Logo NeoDevZone */}
              <div className="flex items-center gap-4">
                <img
                  src={logoNeoDevZone}
                  alt="NeoDevZone"
                  className="h-12 object-contain"
                />
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-slate-400 text-sm">
                © 2026 Meu Caixa. Criado e mantido pela NeoDevZone
              </p>
              <p className="text-slate-500 text-xs">
                Última atualização: Janeiro de 2026 — Versão 1.1.0 — MVP
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
