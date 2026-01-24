import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import logo from "../assets/MeuCaixaComFundo.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/clientes/login", {
        email,
        senha,
      });

      // Token é automaticamente salvo em cookie httpOnly pelo backend
      const { token } = response.data;

      if (!token) {
        setError("Erro: token não recebido do servidor");
        return;
      }

      try {
        // Decodificar o payload do JWT (base64)
        const parts = token.split(".");
        if (parts.length !== 3) {
          setError("Erro: token JWT inválido");
          return;
        }

        const payload = JSON.parse(atob(parts[1]));
        const clienteId = payload.clienteId;

        if (!clienteId) {
          setError("Erro: clienteId não encontrado no token");
          return;
        }

        // Salvar clienteId no localStorage para usar nas rotas
        localStorage.setItem("clienteId", clienteId);

        navigate(`/c/${clienteId}`);
      } catch (decodeError) {
        console.error("Erro ao decodificar token:", decodeError);
        setError("Erro ao processar token de autenticação");
      }
    } catch (err) {
      console.error("Erro de login:", err);
      const errorMessage =
        (err as { response?: { data?: { error?: string } } }).response?.data
          ?.error || "Erro ao fazer login. Verifique suas credenciais.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary via-secondary to-text-dark flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Seção de Marketing */}
        <div className="text-white space-y-6 hidden md:block">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Meu Caixa"
              className="w-24 h-24 rounded-3xl shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Meu Caixa</h1>
              <p className="text-xl text-border-detail">
                Seu negócio organizado
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-3">
              <div className="bg-text-dark rounded-full p-2 mt-1">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Controle Financeiro Completo
                </h3>
                <p className="text-border-detail">
                  Gerencie entradas, saídas e vendas fiadas em um só lugar
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-text-dark rounded-full p-2 mt-1">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Relatórios em Tempo Real
                </h3>
                <p className="text-border-detail">
                  Acompanhe seu lucro e despesas com extratos detalhados
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-text-dark rounded-full p-2 mt-1">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Seguro e Confiável</h3>
                <p className="text-gray-200">
                  Seus dados protegidos com a melhor tecnologia de segurança
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-200">
              Feito para empreendedores que querem transformar a gestão do seu
              negócio.
            </p>
          </div>
        </div>

        {/* Seção de Login */}
        <div className="w-full">
          {/* Logo mobile */}
          <div className="md:hidden flex justify-center mb-8">
            <img
              src={logo}
              alt="Meu Caixa"
              className="w-20 h-20 rounded-2xl shadow-xl"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-dark mb-2">
                Bem-vindo de volta!
              </h2>
              <p className="text-gray-600">Entre para gerenciar seu negócio</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-text-dark font-semibold">
                  Email
                </label>
                <input
                  className="bg-gray-50 border-2 border-gray-200 rounded-xl h-12 px-4 focus:border-primary focus:outline-none transition-colors"
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="senha" className="text-text-dark font-semibold">
                  Senha
                </label>
                <input
                  className="bg-gray-50 border-2 border-gray-200 rounded-xl h-12 px-4 focus:border-primary focus:outline-none transition-colors"
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm text-center py-3 px-4 rounded-xl">
                  {error}
                </div>
              )}

              <button
                className="w-full h-12 text-white text-lg font-bold bg-linear-to-r from-primary to-secondary rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                type="submit"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Tenha o controle total do seu negócio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
