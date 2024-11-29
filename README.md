# CRUD com Node.js, Sequelize, PostgreSQL, Insomnia.

Este projeto é um exemplo de aplicação CRUD (Create, Read, Update, Delete) desenvolvida usando **Node.js**, **Express**, **Sequelize**, **PostgreSQL** e **Insomnia** no backend.

---

## 🚀 Funcionalidades

- **Criar:** Adicionar novos usuários.
- **Ler:** Listar todos os usuários cadastrados.
- **Ler:** Listar um usuário por id.
- **Atualizar:** Editar informações de usuários existentes.
- **Deletar:** Remover usuários do banco de dados.

---

## 🛠️ Tecnologias Utilizadas

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Sequelize](https://sequelize.org/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Nodemon](https://nodemon.io/) (para desenvolvimento)
- **Frontend:**

- **Ferramentas de Teste:**
  - [Insomnia](https://insomnia.rest/)

---

## 📋 Pré-requisitos

1. **Node.js** instalado ([como instalar](https://nodejs.org/)).
2. **PostgreSQL** configurado e rodando localmente.
3. Ferramenta para requisições HTTP (opcional: [Insomnia](https://insomnia.rest/)).

---

## ⚙️ Configuração e Instalação

### 1️⃣ Clonar o Repositório
```
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>
```

### 2️⃣ Instalar Dependências
- `npm install`

### 3️⃣ Configurar o Banco de Dados
Configure as credenciais no arquivo config/config.json ou use variáveis de ambiente com um arquivo .env:

```
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_HOST=127.0.0.1
```

#### Criar o Banco com Sequelize
- `npx sequelize-cli db:create`

#### Execute as migrações:
- `npx sequelize-cli db:migrate`

### 4️⃣ Rodar o Servidor
- `npm start`
- O servidor estará disponível em http://localhost:3000.

### 🔍 Como Usar
Testar com Insomnia

#### 1. Criar Usuário
- Endpoint: POST /usuarios
- URL: http://localhost:3000/usuarios
- Body (JSON):
- json

```
{
  "nome": "Exemplo",
  "email": "exemplo@email.com"
}
```

#### 2. Listar Usuários
- Endpoint: GET /usuarios
- URL: http://localhost:3000/usuarios

#### 3. Atualizar Usuário
- Endpoint: PUT /usuarios/:id
- URL: http://localhost:3000/usuarios/1
- Body (JSON):
- json
```
{
  "nome": "Novo Nome",
  "email": "novo@email.com"
}
```
#### 4. Deletar Usuário
- Endpoint: DELETE /usuarios/:id
- URL: http://localhost:3000/usuarios/1

### 📂 Estrutura do Projeto

```
├── models/         # Modelos do Sequelize
├── migrations/     # Arquivos de migração
├── config/         # Configuração do banco de dados
├── server.js       # Configuração do servidor Express
├── package.json    # Dependências e scripts
└── README.md       # Documentação do projeto
```

### 📝 Licença
Este projeto é livre para uso pessoal ou educacional. 😊
