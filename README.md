# 🚀  Todo-list intreview V360

![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Static Badge](https://img.shields.io/badge/TRAEFIK-blue?style=for-the-badge&logo=traefikproxy&logoColor=white&logoSize=amg)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

> ☕ App para gerenciar tarefas feito em ruby on rails  [link para demo](https://drive.google.com/file/d/1q5jYCM0sXvZ8k7ZMHQrXMLAC5ZJgBPVI/view?usp=drive_link)

#### ⚙️ Technical requirements 
- **Ruby**: Versão 3.2 ou superior 
- **Rails**: Versão 7.1 ou superior
- **postgres**: Versão 14 ou superior
- **Versão do Nodejs**: Versão 18 ou superior

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `ruby/docker`
- Você tem uma máquina `<Windows / Linux / Mac>`
- Você leu `<guia / link / documentação_relacionada_ao_projeto>`.

## 🌐 starting application commands

```bash
   git clone https://github.com/hellyaxs/todo-list.git && cd todo-list
```

## starting application with docker-compose

```bash
   docker-compose up
```

> não se esqueça e preencher as variaveis de ambiente

### initial settings back-end
1. inside diretory backend

```bash
   cd back-end
```

2.install the dependencies

```bash
   bundle install
```

3.rising application

```bash
   rails db:migrate && rails server
```

### initial settings front-end

2.install the dependencies

```bash
   npm install
```

3.build e start application

```bash
   npm run build && npm run start
```



## 📫 Contribuindo

Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).