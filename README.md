# genericApi

Um projeto de estudos para criar uma API genérica utilizando Express e MongoDB. O objetivo é desenvolver uma aplicação totalmente desacoplada, com uma estrutura de arquivos genérica que facilitará a manutenção e escalabilidade.

## Índice

- [genericApi](#genericapi)
  - [Índice](#índice)
  - [Descrição](#descrição)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Instalação](#instalação)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Uso](#uso)
  - [Contribuição](#contribuição)
  - [Licença](#licença)

## Descrição

Este projeto visa proporcionar uma base sólida para a criação de APIs RESTful com uma arquitetura limpa e desacoplada. A API será construída utilizando o framework Express e o banco de dados MongoDB, permitindo fácil manipulação de dados e integração com diferentes serviços.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/) (para modelagem de dados)
- [TypeScript](https://www.typescriptlang.org/) (opcional, se preferir)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/genericApi.git
   cd genericApi
   ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure suas variáveis de ambiente (exemplo: .env).

## Estrutura do Projeto

```
genericApi/
├── src/
│   ├── controllers/       # Controladores da API
│   ├── models/            # Modelos de dados
│   ├── routes/            # Rotas da API
│   ├── middlewares/       # Middleware da API
│   ├── config/            # Configurações da aplicação
│   └── index.ts           # Ponto de entrada da aplicação
├── tests/                 # Testes automatizados
├── .env                   # Variáveis de ambiente
├── .gitignore             # Arquivo gitignore
├── eslint.config.mjs      # Configuração do ESLint
├── .prettierrc            # Configuração do Prettier
├── package.json           # Gerenciador de pacotes
└── README.md              # Este arquivo
```

## Uso

Para iniciar a aplicação, execute o seguinte comando:

  ```bash
  npm start
  ```

A API estará disponível em <http://localhost:3000>.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
3. Faça as suas alterações e commit (git commit -m 'Adicionar uma nova feature').
4. Envie para o repositório remoto (git push origin feature/nome-da-feature).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a MIT License.
