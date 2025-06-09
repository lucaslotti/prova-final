# Aplicação ReactJS + Express + Docker

Este projeto é uma aplicação fullstack com frontend em ReactJS (usando Material UI) e backend em Express. A aplicação é containerizada via Docker para facilitar o deploy e desenvolvimento.

## Descrição

- Frontend ReactJS consumindo uma API RESTful criada em Express.
- Rotas principais da API:
  - `GET /usuarios`: retorna lista de usuários.
  - `GET /dados/:id`: retorna dados detalhados de um usuário pelo ID.
- Interface construída com Material UI para estilo e responsividade.
- Docker para containerizar frontend e backend, permitindo execução isolada e consistente.

## Requisitos

- Docker instalado
- Docker Compose (se for usado para orquestrar containers)

## Como rodar

### 1. Build e execução com Docker

No diretório raiz do projeto, rode:

```bash
docker-compose up --build
Isso irá:

Construir as imagens do frontend e backend

Iniciar os containers e vincular as portas definidas

2. Acessar a aplicação
Frontend: http://localhost:3000

API Backend: http://localhost:5000

Arquitetura da aplicação
bash
Copiar
Editar
/frontend            # ReactJS + Material UI
  ├── src
  │   ├── components # Componentes React
  │   ├── pages      # Páginas da aplicação
  │   └── App.js     # Roteamento e setup principal
/backend             # Express API
  ├── routes         # Definição das rotas /usuarios e /dados/:id
  ├── controllers    # Lógica dos endpoints
  ├── models         # Modelos de dados (se usar banco ou mock)
  └── server.js      # Configuração do servidor Express
/docker-compose.yml  # Orquestração dos containers
/Dockerfile.frontend # Dockerfile para frontend React
/Dockerfile.backend  # Dockerfile para backend Express
Rotas da API
Método	Rota	Descrição
GET	/usuarios	Retorna lista de usuários
GET	/dados/:id	Retorna dados de usuário por ID