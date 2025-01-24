# Chat App

## Description
The aim of this project is to develop real-time chat application that use react and socket.io 

## Features
- Support amount of user:
The project includes real time conection with socket.io in client side and server side
- Dockerized:
Fully dockerized to ensure an isolated and reproducible environment for running the application across various systems.

## Technologies
-Express.js
-Postgres-db
-Sequalize ORM
-Docker
-React.js
-Socker.io

## Run App
1. [Run Local](#Run-Local)
2. [Run With Docker](#Run-With-Docker)

## Run Local
Step-by-step instructions for setting up the project:
```bash
git clone https://github.com/fallahpour-fr/chat-app.git
cd server
npm install
npm run dev
npx sequelize-cli db:migrate

cd client
npm install
npm start
```

## Run With Docker

install [Docker Desktop Ubuntu](https://docs.docker.com/desktop/setup/install/mac-install/) or 
[Docker Desktop windows](https://docs.docker.com/desktop/setup/install/windows-install/)

Then run command bellow:
```bash
docker compose up --build
```
Each time that want to up or down after build app you can use thease command :
```bash
docker compose up
docker compose down
```
client run in (http://localhost:3000) and server run in (http://localhost:5000)

