# 💰 meuCaixa — Frontend

<p align="center">
  <img src="https://img.shields.io/github/languages/top/NeoDevZone/meuCaixa?style=for-the-badge&color=007AFF" alt="Linguagem principal">
  <img src="https://img.shields.io/github/repo-size/NeoDevZone/meuCaixa?style=for-the-badge&color=28a745" alt="Tamanho do repositório">
  <img src="https://img.shields.io/github/last-commit/NeoDevZone/meuCaixa?style=for-the-badge&color=ffc107" alt="Último commit">
  <img src="https://img.shields.io/github/stars/NeoDevZone/meuCaixa?style=for-the-badge&color=f39c12" alt="Stars">
  <img src="https://img.shields.io/github/issues/NeoDevZone/meuCaixa?style=for-the-badge&color=e74c3c" alt="Issues">
</p>

<p align="center">
  Interface web do <b>meuCaixa</b>, um microSaaS desenvolvido para ajudar pequenos empreendedores a controlarem suas finanças.
</p>

---

## 🚀 Sobre o projeto

O **meuCaixa** é um sistema SaaS que permite ao empreendedor acompanhar o fluxo financeiro do seu negócio de forma simples e organizada.

A plataforma permite:

* Registrar receitas
* Registrar despesas
* Controlar vendas fiadas
* Visualizar extrato financeiro
* Acompanhar histórico de movimentações

---

## ✨ Funcionalidades

* Autenticação de usuários
* Dashboard financeiro
* Cadastro de entradas
* Cadastro de saídas
* Controle de clientes com fiado
* Histórico de pagamentos
* Registro automático no extrato
* Documentação interna do sistema

---

## 🧠 Regra de negócio

O sistema possui um fluxo integrado para **fiado**.

Quando um pagamento de fiado é realizado:

* O sistema registra automaticamente uma nova entrada financeira
* Atualiza o histórico do cliente
* Mantém o extrato do sistema consistente

---

## 🏗 Arquitetura

Frontend (React SPA)
⬇
API REST (Node.js + Express)
⬇
MongoDB

O frontend é responsável por:

* Interface do usuário
* Consumo da API
* Organização do fluxo financeiro
* Experiência do usuário

---

## 🛠 Tecnologias

**Frontend**

* React
* Vite
* TailwindCSS

**Backend**

* Node.js
* Express

**Banco de dados**

* MongoDB

**Autenticação**

* JWT
* bcrypt

---

## 📸 Interface do sistema

Em breve serão adicionadas imagens das principais telas:

* Dashboard
* Extrato financeiro
* Controle de fiado
* Cadastro de transações

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido para:

* Construir um microSaaS funcional
* Aplicar arquitetura fullstack
* Trabalhar com regras de negócio reais
* Criar uma solução para pequenos empreendedores

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido por

NeoDevZone
Antonio Gabriel
