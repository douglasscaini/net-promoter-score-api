<h1 align="center"><img src="./.github/logo.svg" width="400px"/></h1>

<h3 align="center">Net Promoter Score - NPS</h3>

<p align="center">“O que sabemos é uma gota. O que ignoramos é um oceano.”</p>

<p align="center">
  <a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#challenge">Desafios</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>
</p>

## :speech_balloon: Sobre <a name="about"></a>

> O NPS é uma aplicação que consiste em calcular o Net Promoter Score (métrica que tem como objetivo medir a satisfação e lealdade dos clientes de uma empresa). Nele fazemos o cadastro de usuários e o cadastro de pesquisas. Portanto, um e-mail pode ser enviado ao destinatário para responder à pesquisa de satisfação para realizar os cálculos necessários para obter o NPS.

<br />
<table>
  <tr>
    <td colspan="1">Desktop</td>
  </tr>
  <tr>
    <td><img src="./.github/gif.gif" width=1000px /></td></td>
  </tr>
</table>

## :warning: Instalação <a name="install"></a>

```bash
# Instalar todas as dependências necessárias:
$ npm install

# Iniciar o projeto em localhost:
$ npm run dev

# Iniciar a migration:
$ npm run typeorm migration:run

# Criar migration (caso necessário):
$ npx typeorm migration:create -n CreateUsers
$ npx typeorm migration:create -n CreateSurveys

```

## :triangular_flag_on_post: Desafio <a name="challenge"></a>

> Aprender TypeScript e aprimorar a utilização de recursos de Banco de Dados :D

## :heavy_check_mark: Tecnologias <a name="technologies"></a>

- [TypeScript](https://www.typescriptlang.org/)
- TypeORM
- Express
- SQLite

---

by [Douglas Scaini](https://www.github.com/douglasscaini)
