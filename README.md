# steam-game-finder

This app uses the valve api to serve a webapp at that allows the user to find a game in common that they could play.

# Tech Stack

**Client:** TypeScript, ReactJS, Tailwind

**Server:** Python, Flask, Nginx, SQLAlchemy

**Other:** Docker


# Configuring the repo for the first time and running the application

## Deploy this application locally

The instructions below will allow you to run this project on your local computer using 

**make build**

1. Run the following command in the terminal to download a copy of the repo to your local machine

```bash
  git clone +++
```

- Navigate into the new sub-folder created called **calhacks-2023**.

2. After the project repo is downloaded navigate into the project directory

```bash
  cd STEAM_GAME_FINDER
```

3. Manually open Docker desktop or run the command below to open Docker

```bash
 open -a Docker
```

4. Once the Docker desktop is runnning, type the command below to create and start the containerized application

```bash
  make build
```

At this point the container with the app should be running in your local computer

Services are running on **Port 3000** (front-end React), **Port 5001** (back-end REST). Please make sure you have no other app running on these ports

5. Run the following command to create and reset the Messages table in the database.

- This command can be used any time you want to delete and reset all the data in the database

```bash
make clean
```

Open a browser to the local host **http://localhost:3000/** and start using the app!


