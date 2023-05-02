# Mercado Shop
Loja de roupa que aceita pagamentos via pix orquestrados pela api do mercado pago. 

<img width="1792" alt="Captura de Tela 2023-05-01 às 20 56 04" src="https://user-images.githubusercontent.com/44002213/235551836-a838c5d4-a6f1-484c-af3d-f958827bc41d.png">

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
3. Crie um arquivo .env utilizando como base o .env.example e adicione o `VITE_ACCESS_TOKEN`: token de acesso da API do mercado pago
5. Inicie o cliente: `npm run dev`

Esses passos vão iniciar o cliente e um servidor local, na porta 3000 e 500.

## API

O servidor fornece as seguintes rotas da API:

- `POST /api/payments`: cria um novo pagamento com base nos dados fornecidos no corpo da solicitação.

### Como acessar a documentação da API
Para acessar a documentação da API gerada pelo Swagger, basta executar o projeto e acessar a seguinte URL no seu navegador: http://localhost:5000/api-docs.

Ao acessar essa URL, você será redirecionado para a documentação da API, que apresentará uma visão geral dos endpoints disponíveis e dos parâmetros esperados.

