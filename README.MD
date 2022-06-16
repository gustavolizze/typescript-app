### Challenge

Desafio feito em typescript e testes unitários com jest e sinon.

### Versões utilizadas

- Node: v16.15.1
- Npm: 8.11.0

### Buildando:

`npm run build`

### Executando:

#### Typescript Direto (Sem build):

`npm start -- (argumentos)` ex:
`npm start -- https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt ./teste.txt`

#### Node.js (Com Build)

`npm run start:builded -- (argumentos)` ex:
`npm run start:builded -- https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt ./agora.csv`

#### Testes:

`npm test`
