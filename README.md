<p align="center">
  <h3 align="center">User CRUD Back</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Lincense&message=MIT&color=0000ff " alt="License" />
</p>

<p align="center">
    This website was developed to Develcode test job.
    <br />
    <br />
    <a href="README.md">🇺🇸English</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## 🗂 Table of Contents

* [About the Project](#book-about-the-project)
  * [Technologies](#computer-technologies)
* [Installation](#bricks-installation)
  * [Prerequisites](#construction-prerequisites)
  * [Front-end](#lipstick-front-end)
  * [Back-end](#file_cabinet-back-end)
    * [Installing Dependencies](#construction-installing-dependencies)
    * [Setting Back-end](#wrench-setting-back-end)
    * [Running Back-end](#arrow_forward-running-back-end)
* [License](#page_facing_up-license)
* [Author](#woman_technologist-author)

## :book: About The Project

It was proposed to create a CRUD of users with the following information: name, date of birth, photo using a MySQL database and Nodejs backend project.

### :computer: Technologies

* [TypeScript](https://www.typescriptlang.org)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com)
* [Axios](https://axios-http.com/docs/intro)
* [TypeORm](https://typeorm.io#/)
* [MySQL](https://www.mysql.com)
* [Nestjs](https://nestjs.com)
* [Prisma](https://www.prisma.io)
* [Swagger](https://swagger.io)

## :bricks: Installation

This project use [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com), you will need them to build its dependencies.

### :construction: Prerequisites

Clone this project repository:
```bash

$ git clone https://github.com/3salles/develcode-back.git

# Enter in `develcode-back` folder:

$ cd develcode-back
```

🚨 If you don't have git in your machine, you can install it [here](https://git-scm.com/downloads).

## :lipstick: Front-end

You can see how to use the backend project going to its repository [here](https://github.com/3salles/user-crud)

🚨 This is using a deployed frontend link into [Vercel](https://vercel.com). If you want to run the frontend locally, remember to change in `main.ts` the following line:

```ts
app.enableCors({
    origin: 'http://localhost:3000',
  });
```

## :file_cabinet: Back-end

### :construction: Instalando Dependências

Inside develcode-back folder, install dependencies with following comand:

```bash
$ yarn install
```

### :wrench: Setting Back-end

Create a `.env` document into the root project:

```bash
$ touch .env

# And add a database url

DATABASE_URL="mysql://DB_USER:DB_PASSWORD@localhost:3306/develcode"
```

Create database tables with following command:

```bash
$ yarn prisma migrate dev
```

### :arrow_forward: Running Back-end

Run following command to start back-end:

```bash
$ yarn start:dev
```

The Application will be avaible on `http://localhost:3001/`.

🚨 You can see all routes and params of this project accessing `http://localhost:3001/` or `https://develcode-back.herokuapp.com/api/`.

### :page_facing_up: License

This project uses [MIT](https://github.com/3salles/develcode-back/blob/main/LICENSE) lincense.

## :woman_technologist: Author
<p align="center">
  <a href="https://github.com/3salles"><img src="https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/3salles" alt="Github" /></a>
  <a href="https://www.linkedin.com/in/beatriz-salles-b701a31a6/"><img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-salles-b701a31a6" alt="LinkendIn" /></a>
  <a href="mailto:beatrizsallesss@gmail.com"><img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:beatrizsallesss@gmail.com" alt="Gmail" /></a>
</p>

<p align="center">Developed with 💜 by Beatriz Salles</p>
