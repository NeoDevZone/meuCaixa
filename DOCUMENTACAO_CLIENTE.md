# 📊 Meu Caixa — Documentação do Usuário

## Bem-vindo ao Meu Caixa!

O **Meu Caixa** é um sistema simples, rápido e confiável para **controle financeiro de pequenos negócios** . Ele foi pensado para quem precisa registrar entradas, saídas e fiados **sem complicação** , com visão clara do dinheiro que entra e sai.

Você não precisa entender de tecnologia. O sistema funciona direto no navegador, em celular ou computador.

---

## 📋 Índice

1. [Visão Geral](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-vis%C3%A3o-geral)
2. [Como Começar](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-como-come%C3%A7ar)
3. [Funcionalidades Principais](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-funcionalidades-principais)
4. [Guia de Uso Passo a Passo](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-guia-de-uso-passo-a-passo)
5. [Planos e Valores](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-planos-e-valores)
6. [Dúvidas Frequentes](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-d%C3%BAvidas-frequentes)
7. [Suporte e Atendimento](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-suporte-e-atendimento)
8. [Atualizações e Evolução do Sistema](https://chatgpt.com/c/69737cb2-dd5c-832c-92a0-58a8b99a9077#-atualiza%C3%A7%C3%B5es-e-evolu%C3%A7%C3%A3o-do-sistema)

---

## 🎯 Visão Geral

O Meu Caixa centraliza todas as movimentações financeiras do seu negócio em um único lugar, evitando anotações em papel, esquecimentos e erros de cálculo.

### Principais Benefícios

- ✅ **Controle total do caixa** em tempo real
- ✅ **Registro rápido** de entradas e saídas
- ✅ **Controle de fiado** com histórico completo
- ✅ **Resumo mensal automático**
- ✅ **Acesso de qualquer lugar**

---

## 🚀 Como Começar

### 1️⃣ Acesso ao Sistema (Login Seguro)

Agora o acesso é feito com **email e senha** (token seguro em cookie). Basta abrir o link do sistema e fazer login:

- **Email**: cadastrado na criação da sua conta
- **Senha**: definida no cadastro (pode ser alterada em Alterar Senha)
- **Segurança**: token httpOnly + SameSite=None; Secure (recomendado usar o navegador atualizado)

> ⚠️ Guarde suas credenciais com segurança. Se perder o acesso, peça um reset de senha ao suporte.

### 2️⃣ Identificação Automática

Após o login, o sistema reconhece automaticamente sua conta e carrega apenas **os dados do seu negócio**.

### 3️⃣ Menu Principal

No topo da tela, você encontrará:

- **Home** — Visão geral do caixa
- **Entrada** — Registrar dinheiro que entrou
- **Saída** — Registrar despesas
- **Fiado** — Controle de vendas a crédito

---

## 💼 Funcionalidades Principais

### 🏠 Home — Painel de Controle

#### Como funciona a segurança dos dados

- **Cookies seguros**: o acesso às rotas acontece com token em cookie httpOnly (não exposto no navegador).
- **Domínios autorizados**: só o domínio oficial do Meu Caixa pode chamar a API.
- **Logout limpo**: botão de sair remove o identificador local e invalida o acesso.

O **Home** mostra um resumo claro das finanças do período selecionado:

- **Saldo do mês**
- **Total de Entradas**
- **Total de Saídas**
- **Histórico de Transações**

#### Como usar

- Use os botões para navegar entre meses
- Clique em uma transação para ver detalhes
- O saldo é atualizado automaticamente

---

### 📥 Entrada — Registrar Receitas

Utilize esta aba sempre que **dinheiro entrar no caixa** .

**Campos:**

| Campo     | Descrição                          |
| --------- | ---------------------------------- |
| Descrição | Origem do dinheiro                 |
| Valor     | Valor recebido                     |
| Data      | Data da entrada                    |
| Método    | Dinheiro, PIX, Débito, Crédito etc |

📌 Exemplo:
Venda de produto — R$ 100 — Dinheiro

---

### 📤 Saída — Registrar Despesas

Aqui você registra tudo que **sai do caixa** .

**Campos:**

| Campo     | Descrição          |
| --------- | ------------------ |
| Descrição | Motivo do gasto    |
| Valor     | Valor pago         |
| Data      | Data da despesa    |
| Método    | Forma de pagamento |

📌 Exemplo:
Compra de mercadoria — R$ 30 — PIX

---

### 💳 Fiado — Controle de Créditos

O **Fiado** permite controlar vendas a prazo com segurança.

#### Registrar Fiado

| Campo   | Descrição       |
| ------- | --------------- |
| Cliente | Nome do cliente |
| Valor   | Valor devido    |
| Data    | Data do fiado   |

#### Funcionalidades

- Lista de clientes devedores
- Histórico completo de fiados
- Marcar como pago
- Remover registro

✅ Ao marcar como pago, o valor entra automaticamente como **Entrada** .

---

## 🎓 Guia de Uso Passo a Passo

### Primeiro Dia

1. Registre uma **Entrada**
2. Registre uma **Saída**
3. Confira o saldo no **Home**

### Usando Fiado

1. Registre o fiado
2. Acompanhe na lista
3. Marque como pago quando receber

### Consultar Meses Anteriores

- Use os botões no **Home** para navegar entre meses

---

## 💰 Planos e Valores

O Meu Caixa funciona com planos mensais de manutenção, que garantem funcionamento, segurança e evolução do sistema.

### 🟢 Plano Básico — **R$ 39,90 / mês**

Ideal para quem quer controle financeiro sem depender de suporte constante.

**Inclui:**

- Acesso completo ao sistema
- Correções de bugs
- Backups automáticos
- Atualizações contínuas
- Suporte via WhatsApp

**Suporte:**

- Prazo de resposta: até **24h**
- Limite recomendado: até **20 contatos semanais**

---

### 🔵 Plano VIP — **R$ 59,90 / mês** ⭐

Para quem quer mais agilidade e proximidade.

**Inclui tudo do Básico +**

- Prioridade no suporte
- Ajuda no uso do sistema
- Pequenos ajustes sob demanda
- Participação ativa nas melhorias

**Suporte:**

- Prazo de resposta: até **12h**

## 💳 Valor de Implantação

A implantação do **Meu Caixa** é cobrada **uma única vez** e inclui toda a configuração inicial do sistema.

### O que está incluso na implantação:

- Criação do ambiente exclusivo do seu negócio
- Configuração inicial do sistema
- Validação de acesso e funcionamento
- Entrega do link personalizado
- Orientações iniciais de uso

### 💰 Valores:

- **Valor padrão:** R$ 300,00

> Após a implantação, o sistema passa a funcionar normalmente com o plano de manutenção escolhido.

### 🔔 Atualizações Especiais

- Atualizações normais estão incluídas em todos os planos
- **Grandes atualizações** podem gerar reajuste ou novo plano, sempre comunicado previamente

---

## ❓ Dúvidas Frequentes

**Meus dados estão seguros?**
Sim. Cada cliente possui acesso isolado e seguro.

**Funciona no celular?**
Sim, totalmente responsivo.

**Posso editar ou apagar transações?**
Sim, com cuidado, pois a exclusão é permanente.

**E se eu perder o link?**
Entre em contato com o suporte.

---

## 📞 Suporte e Atendimento

O suporte é feito via WhatsApp.

Para agilizar o atendimento, informe:

- O que aconteceu
- Data e horário
- Prints, se possível

---

## 🔄 Atualizações e Evolução do Sistema

O Meu Caixa está em constante evolução. Melhorias e novas funcionalidades são liberadas regularmente para todos os clientes.

---

## 🎉 Considerações Finais

O Meu Caixa foi criado para **simplificar sua rotina financeira** e evitar perdas por falta de controle.

Use diariamente, mantenha os registros atualizados e aproveite o sistema ao máximo.

---

_Última atualização: Janeiro de 2026_
_Versão: 1.0.0 — MVP_
