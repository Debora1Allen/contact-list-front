# Contact List Web App

Este projeto é um aplicativo da Web front-end criado usando **React**, **TypeScript** e **SCSS** que interage com a API da lista de contatos para gerenciar pessoas e seus contatos.

---

## Índice

- [Features](#features)
- [Instalação](#instalação)
- [Interface do usuário](#interface-do-usuário)
- [Tecnologias](#tecnologias)
- [Testes](#testes)
- [Licença](#licença)

---

## Features

- Interface amigável para gerenciar pessoas e seus contatos.
- Usa ganchos React e arquitetura de componentes moderna.
- Conecta-se à API de backend para executar operações CRUD.

---

## Instalação

### Pré-requisitos

- **Node.js** (v14+)

### Steps

1. Clone o repositório:

```bash
git clone <https://github.com/Debora1Allen/contact-list-front>
```

2. Navegue até o diretório do projeto:

```bash
cd contact-list-front
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` para variáveis ​​de ambiente. Exemplo:

```env
REACT_APP_API_URL=http://localhost:3000/api/persons
```

5. Inicie o aplicativo:

```bash
npm start
```

O aplicativo agora deve estar em execução em `http://localhost:3000`.

---

## Interface do usuário

A interface do usuário permite que você:

- Visualize todas as pessoas e seus contatos.
- Adicione uma nova pessoa e contatos.
- Atualize a pessoa e os contatos existentes.
- Excluir pessoas e contatos.

### Example UI
- **List of Persons**: exibe todas as pessoas com suas informações de contato.
- **Create Form**: permite que você insira novos detalhes da pessoa.
- **Edit Form**: atualize os detalhes de uma pessoa existente.

---

## Tecnologias

- **React**
- **TypeScript**
- **SCSS**
- **Axios** (para solicitações de API)

---

## Testes

Para executar testes, certifique-se de que **Jest** esteja configurado e execute:

```bash
npm test
```

---

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---