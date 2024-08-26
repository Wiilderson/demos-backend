# Demos e Frames

Este é um projeto backend desenvolvido utilizando Node.js, Express, TypeScript e Sequelize. O objetivo deste projeto é fornecer uma API RESTful para gerenciar demos com frames htmls renderizados.

## Tecnologias utilizadas:

- Node.js: Ambiente de execução para JavaScript.
- Express: Framework para Node.js para criar APIs RESTful.
- TypeScript: Superset de JavaScript que adiciona tipagem estática.
- Sequelize: ORM para Node.js, utilizado para interagir com bancos de dados relacionais.
- PostgreSQL: Banco de dados relacional.

## Instalação do ambiente Dev:

1 - Clone o repositório em sua máquina;
2 - Acesse o diretório: ```cd seu-repositorio```;
3 - Instale as dependências: ```npm install```;
4 - Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:
```
DB_HOST=localhost
DB_USER=seu-usuario
DB_PASS=sua-senha
DB_NAME=nome-do-banco
DB_DIALECT=postgres
PORT=3000
```
5 - Execute o script para popular o banco com os frames: 
``` npm run seed ```;
6 - por ultimo inicie o servidor de desenvolvimento:
``` npm run dev ```;
## Rotas da API:
Aqui estão as principais rotas disponíveis na API. Para obter detalhes completos sobre cada rota, consulte os controladores na pasta src/controllers.
- GET /api/demos: Retorna uma lista de itens.
- PUT /api/frames/:id: Atualiza um frame específico.
