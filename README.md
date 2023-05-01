# Mercado Shop
Loja de roupa que aceita pagamentos via pix orquestrados pela api do mercado pago. 

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [React.js](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)

## Pré-requisitos

Antes de executar o client e o server, você precisa ter o Node.js instalado na sua máquina.

## Executando o server

1. Clone este repositório: `git clone https://github.com/emyslandim/mercado-shop.git`
2. Navegue até a pasta do servidor: `cd server`
3. Instale as dependências: `npm install`
4. Crie um arquivo .env utilizando como base o .env.example e adicione o `ACCESS_TOKEN`: token de acesso da API do mercado pago
5. execute o servidor utilizando `npm run server` no terminal


## Executando o cliente

Para executar o cliente, é necessário ter o Node.js instalado em sua máquina e também ter as dependências instaladas. Para fazer isso, siga os seguintes passos:

1. Navegue até a pasta do cliente: `cd frontend`
2. Instale as dependências: `npm install`
3. Crie um arquivo .env utilizando como base o .env.example e adicione o `ACCESS_TOKEN`: token de acesso da API do mercado pago
5. Inicie o cliente: `npm run dev`

Esses passos vão iniciar o cliente e um servidor local, na porta 3000 e 500.

## API

O servidor fornece as seguintes rotas da API:

- `POST /api/payments`: cria um novo pagamento com base nos dados fornecidos no corpo da solicitação.

