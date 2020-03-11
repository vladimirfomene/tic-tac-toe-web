# Tic Tac Toe Web Backend
Node.js backend API for Tic-Tac-Toe Web. It implements the minimax algorithm which allows
the AI in the game to know its next move.

# Prerequisites
Softwares you need to install to run the API 
- [Node.js and NPM (Node Package Manager)](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

# Database Configuration

To setup the API you need to make sure you have MySQL installed on your system. For that, you can use something like Docker:

```bash
# create a new database
sudo docker run --name tic-tac-toe-mysql \ 
    -p 9090:3306 \
    -e MYSQL_ROOT_PASSWORD=password \
    -e MYSQL_DATABASE=tic-tac-toe \
    -e MYSQL_USER=tic-tac-toe-user \
    -e MYSQL_PASSWORD=password \
    -d mysql:5.7

# if needed, you can both stop and remove it
docker stop tic-tac-toe-mysql
docker rm tic-tac-toe-mysql
```

Once you have a MySQL database available, you will have to create a `.env` in this directory and add the database configuration details there:

```properties
MYSQL_USER=tic-tac-toe-user
MYSQL_PASSWORD=password
MYSQL_HOST=localhost
MYSQL_DATABASE_NAME=tic-tac-toe
MYSQL_PORT=9090
```

# Running The Project
Execute the following command to install all the project dependencies.

```bash
npm install
```

In order to migrate the database schema to MySQL, run the following command:

```bash
npm run db-migrate
```

With that in place, you can start the application:

```bash
npm run start
```

Or run test with:

```bash
npm run test
```

To clean up the code with linting run the following command:

```bash
npm run lint
```