<br />
<p align="center">
  <a href="https://github.com/Thalmonn/apiTestOutvio">
    <img src="https://cdn-icons-png.flaticon.com/512/967/967558.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">API Test Outvio</h3>

  <p align="center">
    An API created to perform concurrent requests, with public and private endpoints, using rate limits for each type of user.
    <br />
    <a href="https://github.com/Thalmonn/apiTestOutvio/issues">Report Bug</a>
    ·
    <a href="https://github.com/Thalmonn/apiTestOutvio/issues">Request Feature</a>
  </p>
</p>

[![Prettier][prettier-shield]][prettier-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- ABOUT THE PROJECT -->
## About The Project

This api aims to provide two routes for example GET requests. A public route and a private route, where on this second one, a token is needed to perform the request.

Information such as the user's ip and the generated token are stored in a database using mongoDB, so that the information is validated later.

A rate limit was defined for each of the route types, where there is a configurable value through the environment of how many requests are allowed within an hour.

Redis was used to work the information cache, and some mechanics to work the concurrency.

<!-- INSTALLATION -->

## Installation

You'll need [Node.js](https://nodejs.org) installed on your computer in order to build this app.

```bash
git clone https://github.com/Thalmonn/apiTestOutvio.git

$ cd apiTestOutvio
$ npm install
```

<br />

---

<!-- SETUP -->

## Setup

#### Copy or rename the file

```
$ cp .env-examples .env
```

<br />

---

<!-- RUNNING TESTS -->

## Running tests

```
$ npm run test
```

<br />

---

<!-- RUNNING APPLICATION -->

## Running the application

```bash

# Run the application
$ npm run start

```

<br />

---

<!-- RUNNING -->

#### Or Run Docker
```
$ docker-compose up -d
```

<br />

---

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

[![Twitter][twitter-shield]][twitter-url] [![LinkedIn][linkedin-shield]][linkedin-url] [![E-mail][gmail-shield]][gmail-url]

<!-- SHIELDS & IMAGES -->
[prettier-url]: https://prettier.io/
[prettier-shield]: https://img.shields.io/badge/codystyle-prettier-pink?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/Thalmonn/boraver.svg?style=for-the-badge
[issues-url]: https://github.com/Thalmonn/boraver/issues
[license-shield]: https://img.shields.io/github/license/Thalmonn/boraver.svg?style=for-the-badge
[license-url]: https://github.com/Thalmonn/boraver/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Thalmonn
[twitter-shield]: https://img.shields.io/badge/-Twitter-black.svg?style=for-the-badge&logo=twitter&colorB=555
[twitter-url]: https://twitter.com/thalmonn
[gmail-shield]: https://img.shields.io/badge/-Gmail-black.svg?style=for-the-badge&logo=gmail&colorB=555
[gmail-url]: mailto:thalmonnsales@gmail.com
