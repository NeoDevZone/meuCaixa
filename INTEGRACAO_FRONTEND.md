# 📱 GUIA DE INTEGRAÇÃO AUTH - Front-end

## 🔐 Fluxo de Autenticação

```
┌─────────────────────────────────────────────────────────┐
│ FRONT-END                                               │
├─────────────────────────────────────────────────────────┤
│ 1. Usuário preenche Email + Senha                       │
│ 2. POST /api/clientes/login {email, senha}              │
│ 3. Backend retorna: {token}                             │
│ 4. Token armazenado automaticamente em cookie (httpOnly)│
│ 5. Requisições subsequentes enviam cookie automaticamente│
│                                                          │
│ Acesso a rotas multi-tenant:                            │
│ 6. GET /api/c/:clienteId/entradas                       │
│ 7. Middleware ensureAuth valida token do cookie         │
│ 8. Middleware resolveClienteMiddleware injeta dbCliente │
│ 9. Controller processa com dados do cliente             │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Endpoints Disponíveis

### 1️⃣ CLIENTES (sem autenticação necessária)

#### Criar Cliente (Admin)

```http
POST /api/clientes
Content-Type: application/json
x-admin-token: <seu-admin-token>

{
  "nome": "Seu Negócio",
  "email": "email@exemplo.com",
  "senha": "senha123"
}

✅ Response (201):
{
  "message": "Cliente criado com sucesso",
  "cliente": {
    "_id": "ObjectId",
    "nome": "Seu Negócio",
    "email": "email@exemplo.com",
    "databaseName": "c_abc123...",
    "ativo": true,
    "criadoEm": "2026-01-23T10:00:00Z"
  }
}
```

#### Login Cliente

```http
POST /api/clientes/login
Content-Type: application/json

{
  "email": "email@exemplo.com",
  "senha": "senha123"
}

✅ Response (200):
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

⚠️ Note: Token é salvo automaticamente em cookie httpOnly
```

---

### 2️⃣ ENTRADAS (autenticado)

#### Criar Entrada

```http
POST /api/c/:clienteId/entradas/create
Content-Type: application/json
Cookie: access_token=<seu-token>

{
  "descricao": "Venda para cliente X",
  "metodo": "Dinheiro",
  "valor": 150.50
}

✅ Response (201):
"Entrada criada com sucesso"
```

#### Listar Entradas

```http
GET /api/c/:clienteId/entradas
Cookie: access_token=<seu-token>

✅ Response (200):
[
  {
    "_id": "ObjectId",
    "descricao": "Venda para cliente X",
    "tipo": "Entrada",
    "metodo": "Dinheiro",
    "valor": 150.50,
    "data": "2026-01-23"
  },
  ...
]
```

#### Deletar Entrada

```http
DELETE /api/c/:clienteId/entradas/delete/:id
Cookie: access_token=<seu-token>

✅ Response (204): (sem conteúdo)
```

---

### 3️⃣ SAÍDAS (autenticado)

#### Criar Saída

```http
POST /api/c/:clienteId/saidas/create
Content-Type: application/json
Cookie: access_token=<seu-token>

{
  "descricao": "Compra de material",
  "metodo": "Débito",
  "valor": 300.00
}

✅ Response (201):
{ "message": "Saida Criada com sucesso" }
```

#### Listar Saídas

```http
GET /api/c/:clienteId/saidas
Cookie: access_token=<seu-token>

✅ Response (200):
[
  {
    "_id": "ObjectId",
    "descricao": "Compra de material",
    "tipo": "Saida",
    "metodo": "Débito",
    "valor": 300.00,
    "data": "2026-01-23"
  },
  ...
]
```

#### Deletar Saída

```http
DELETE /api/c/:clienteId/saidas/delete/:id
Cookie: access_token=<seu-token>

✅ Response (204): (sem conteúdo)
```

---

### 4️⃣ COMPRADORES (autenticado)

#### Listar Compradores

```http
GET /api/c/:clienteId/compradores
Cookie: access_token=<seu-token>

✅ Response (200):
[
  {
    "_id": "ObjectId",
    "nome": "João Silva",
    "divida": 250.00
  },
  ...
]
```

#### Obter Comprador por ID

```http
GET /api/c/:clienteId/compradores/:_id
Cookie: access_token=<seu-token>

✅ Response (200):
{
  "_id": "ObjectId",
  "nome": "João Silva",
  "divida": 250.00
}
```

---

### 5️⃣ FIADOS (autenticado)

#### Criar Primeiro Fiado (novo comprador)

```http
POST /api/c/:clienteId/fiados/create
Content-Type: application/json
Cookie: access_token=<seu-token>

{
  "nomeComprador": "Maria Santos",
  "descricao": "Venda fiada",
  "valor": 100.00
}

✅ Response (201):
{ "message": "Fiado e comprador cadastrado com sucesso" }

📝 Cria automaticamente:
- Comprador com divida = 100.00
- Fiado associado ao comprador
```

#### Criar Fiado (comprador existente)

```http
POST /api/c/:clienteId/fiados/create/:_id
Content-Type: application/json
Cookie: access_token=<seu-token>

{
  "descricao": "Novo fiado",
  "valor": 50.00
}

✅ Response (201):
{ "message": "Fiado Criado com sucesso" }

📝 Nota: Automaticamente incrementa divida do comprador
```

#### Criar Pagamento de Fiado

```http
POST /api/c/:clienteId/fiados/pagamento/:_id
Content-Type: application/json
Cookie: access_token=<seu-token>

{
  "valor": 50.00,
  "metodo": "Dinheiro"
}

✅ Response (201):
{ "message": "Pagamento criado com sucesso" }

📝 Nota:
- Decrementa divida do comprador
- Cria entrada automática
- Registra pagamento em fiados
```

#### Listar Fiados e Pagamentos

```http
GET /api/c/:clienteId/fiados
Cookie: access_token=<seu-token>

✅ Response (200):
[
  {
    "_id": "ObjectId",
    "idComprador": "ObjectId",
    "descricao": "Venda fiada",
    "tipo": "fiado",
    "valor": 100.00,
    "data": "2026-01-23"
  },
  {
    "_id": "ObjectId",
    "idComprador": "ObjectId",
    "descricao": "pagamento fiado - Maria Santos",
    "tipo": "pagamento",
    "valor": 50.00,
    "data": "2026-01-23"
  }
]
```

#### Listar Fiados por Comprador

```http
GET /api/c/:clienteId/fiados/comprador/:_id
Cookie: access_token=<seu-token>

✅ Response (200):
[
  {
    "_id": "ObjectId",
    "idComprador": "ObjectId",
    "descricao": "Venda fiada",
    "tipo": "fiado",
    "valor": 100.00,
    "data": "2026-01-23"
  }
]
```

#### Deletar Fiado

```http
DELETE /api/c/:clienteId/fiados/delete/:_id
Cookie: access_token=<seu-token>

✅ Response (204): (sem conteúdo)
```

---

### 6️⃣ EXTRATO (autenticado)

#### Extrato Completo

```http
GET /api/c/:clienteId/extrato
Cookie: access_token=<seu-token>

✅ Response (200):
[
  {
    "_id": "ObjectId",
    "descricao": "Venda para cliente X",
    "tipo": "Entrada",
    "metodo": "Dinheiro",
    "valor": 150.50,
    "data": "2026-01-23"
  },
  {
    "_id": "ObjectId",
    "descricao": "Compra de material",
    "tipo": "Saida",
    "metodo": "Débito",
    "valor": 300.00,
    "data": "2026-01-23"
  },
  ...
]

📝 Nota: Ordenado por data descendente (mais recentes primeiro)
```

#### Extrato por Data (Mês/Ano)

```http
GET /api/c/:clienteId/extrato/data?data=2026-01
Cookie: access_token=<seu-token>

✅ Response (200):
[
  {
    "_id": "ObjectId",
    "descricao": "Venda para cliente X",
    "tipo": "Entrada",
    "metodo": "Dinheiro",
    "valor": 150.50,
    "data": "2026-01-23"
  },
  ...
]

📝 Formato: YYYY-MM (ex: 2026-01, 2025-12)
```

---

## 🛠️ Exemplo de Integração JavaScript/TypeScript

```typescript
// 1️⃣ LOGIN
async function login(email: string, senha: string) {
  const response = await fetch("http://localhost:3000/api/clientes/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // ✅ IMPORTANTE: Envia cookies
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) {
    throw new Error("Login falhou");
  }

  const { token } = await response.json();
  // Token é automaticamente salvo em cookie pelo servidor
  // Não precisa fazer nada aqui
  return token;
}

// 2️⃣ REQUISIÇÕES AUTENTICADAS
async function buscarEntradas(clienteId: string) {
  const response = await fetch(
    `http://localhost:3000/api/c/${clienteId}/entradas`,
    {
      method: "GET",
      credentials: "include", // ✅ IMPORTANTE: Envia cookie com token
    },
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar entradas");
  }

  return response.json();
}

// 3️⃣ CRIAR ENTRADA
async function criarEntrada(
  clienteId: string,
  descricao: string,
  metodo: string,
  valor: number,
) {
  const response = await fetch(
    `http://localhost:3000/api/c/${clienteId}/entradas/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // ✅ IMPORTANTE
      body: JSON.stringify({ descricao, metodo, valor }),
    },
  );

  if (!response.ok) {
    throw new Error("Falha ao criar entrada");
  }

  return response.json();
}

// 4️⃣ USO
(async () => {
  try {
    // Login
    const token = await login("email@exemplo.com", "senha123");
    console.log("Login bem-sucedido!", token);

    // Usar clienteId (obtido de localStorage ou do token decodificado)
    const clienteId = "seu-cliente-id-aqui";

    // Buscar entradas
    const entradas = await buscarEntradas(clienteId);
    console.log("Entradas:", entradas);

    // Criar entrada
    const novaEntrada = await criarEntrada(
      clienteId,
      "Venda",
      "Dinheiro",
      100.0,
    );
    console.log("Entrada criada:", novaEntrada);
  } catch (error) {
    console.error("Erro:", error);
  }
})();
```

---

## 📝 Variáveis de Ambiente Necessárias

**.env (Backend)**

```env
# Banco de dados
MONGO_URI=mongodb://localhost:27017
MONGO_MAIN_DB_NAME=caixa_main

# Autenticação
JWT_SECRET=sua-chave-secreta-super-segura-aqui
JWT_SECRET_KEY=sua-chave-secreta-super-segura-aqui
ADMIN_API_TOKEN=seu-token-admin-super-seguro

# CORS
VITE_FRONTEND_URL=http://localhost:5173
```

**.env (Frontend)**

```env
VITE_API_URL=http://localhost:3000
```

---

## ⚠️ Notas Importantes

1. **Cookies httpOnly**: O token é armazenado automaticamente em cookie. Não exponha em localStorage.
2. **CORS**: Configure `credentials: 'include'` em todas requisições fetch/axios.
3. **clienteId**: Necessário em todas rotas multi-tenant (está na URL: `/api/c/:clienteId/...`).
4. **Expiração**: Token expira em 8 horas. O usuário deve fazer login novamente.
5. **Admin**: Endpoints de criação de cliente requerem header `x-admin-token`.

---

## 🔍 Tratamento de Erros

```typescript
async function requisicao(url: string) {
  try {
    const response = await fetch(url, {
      credentials: "include",
    });

    // 401 = Token inválido/expirado - redirecionar para login
    if (response.status === 401) {
      window.location.href = "/login";
      return;
    }

    // 403 = Acesso negado
    if (response.status === 403) {
      throw new Error("Sem permissão para acessar este recurso");
    }

    // 404 = Recurso não encontrado
    if (response.status === 404) {
      throw new Error("Recurso não encontrado");
    }

    // Outros erros
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erro na requisição");
    }

    return response.json();
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
```

---

## ✅ Checklist de Implementação Frontend

- [ ] Página de Login (email + senha)
- [ ] Armazenar `clienteId` após login (localStorage ou context)
- [ ] Listar Entradas
- [ ] Criar Entrada
- [ ] Deletar Entrada
- [ ] Listar Saídas
- [ ] Criar Saída
- [ ] Deletar Saída
- [ ] Listar Compradores
- [ ] Criar Fiado (novo comprador)
- [ ] Criar Fiado (comprador existente)
- [ ] Registrar Pagamento
- [ ] Visualizar Extrato
- [ ] Filtrar Extrato por Mês/Ano
- [ ] Logout (limpar dados locais)
- [ ] Tratamento de erros 401/403

---

**Versão:** 1.0  
**Última atualização:** 23 de Janeiro, 2026  
**Status:** ✅ Pronto para implementação
