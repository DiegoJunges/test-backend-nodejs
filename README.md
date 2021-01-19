<h3 align="center">
  Express Application for teste-backend-nodejs project
</h3>


<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/DiegoJunges/gobarber-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/diego-junges/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Diego%20Junges-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/DiegoJunges/gobarber-api?color=%23FF9000">

  <a href="https://github.com/DiegoJunges/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DiegoJunges/gobarber-api?color=%23FF9000">
  </a>

  <a href="https://github.com/DiegoJunges/test-backend-nodejs/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/DiegoJunges/test-backend-nodejs?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/DiegoJunges/test-backend-nodejs?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=TestBackend%20-%20DiegoJunges&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDiegoJunges%2Ftest-backend-nodejs%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 🛸 About the project

This api has made on a test to a company that im trying a role. I used some SOLID principles and Design Patterns like Singleton, Dependency Injection and others.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/DiegoJunges/test-backend-nodejs.git && cd gobarber-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=postgres \
              -e POSTGRES_DB=desafio -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```
## 🧞‍ Documentation

**Routes to create products**

```bash
# Run the server, database(Postgre) and send a Post request method using Insomnia or Postman to:
http://localhost:3333/products
json body example:
{
	"title": "guitar",
	"description": "a cool guitar",
	"price": 500.00,
	"category": "musician instrument"
}
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork DiegoJunges/test-backend-nodejs
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd test-backend-nodejs

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Diego Junges 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/diego-junges/)
