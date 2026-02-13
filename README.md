# 📌 API de Gerenciamento de Usuários

Uma **API REST simples e eficiente**, desenvolvida em **Node.js** com **Express**, para gerenciamento de usuários.  
Este projeto demonstra conceitos fundamentais de backend, como criação de rotas, uso dos métodos HTTP, tratamento de status codes e persistência de dados em memória.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript server-side  
- **Express** — Framework web minimalista e flexível  
- **Git / GitHub** — Controle de versionamento e hospedagem  
- **Insomnia / Postman** — Ferramentas para testes da API  

---

## ⚙️ Funcionalidades

- **GET /usuarios**  
  Lista todos os usuários cadastrados.

- **GET /usuarios/:id** 
  Busca um usuário específico pelo ID.

- **POST /usuarios**  
  Cadastra um novo usuário no sistema.

---

## 🚀 Como Executar o Projeto

1️⃣ Clone o repositório  
git clone https://github.com/viitusx/user-manager-api

2️⃣ Acesse a pasta do projeto  
cd gerenciador-de-usuarios

3️⃣ Instale as dependências  
npm install

4️⃣ Inicie o servidor  
node index.js

O servidor iniciará em:  
http://localhost:3000

---

## 📚 Documentação das Rotas

### 🔹 Listar Usuários

URL: /usuarios  
Método: GET  
Resposta de Sucesso: 200 OK  

---

### 🔹 Buscar Usuário por ID

URL: /usuarios/:id  
Método: GET  
Resposta de Erro: 404 Not Found (caso o ID não exista)  

---

### 🔹 Criar Usuário

URL: /usuarios  
Método: POST  

Corpo da Requisição (JSON):  
{
  "nome": "Seu Nome",
  "cargo": "Desenvolvedor"
}

Resposta de Sucesso: 201 Created  

---

## 👨‍💻 Autor

Victor Silva  
Estudante de Análise e Desenvolvimento de Sistemas  
UNINASSAU
