# Download Node.js

We need to set up a **Node.js** server. For this purpose, download and install it if you haven't already.
you can download it from its's official website,   [Node.js](https://nodejs.org/en/download/).

If you don't know what is **Node.js** here is short description,
> **Node JS** or **Node** is an Open Source and Cross Platform runtime environmennt for executing JavaScript code.

Supplemental reading on [NODE-JS](https://en.wikipedia.org/wiki/Node.js)



# Setup Project

1. Create a directory of any name.
2. Open it in your preferred code editor.
3. Run the following commands in the project terminal to create package.JSON file:
```bash
npm init --yes
```
OR
```bash
npm init -y
```


# Install Express Package

Run the following command in your project terminal to install **Express** in the project.
```bash
npm install express
```
# Install Joi Package

Run the following command in your project terminal to install **Joi** in the project for validation.
```bash
npm install joi
```



# Creating a Route

Create an index.js file. Here we will route multiple request on server.

Please use the **index.js** file, I'm providing for you in this repository.

# Run the API

Run the following command in your project terminal to run the app.
```bash
node index.js
```


# Test the API

Open your browser 

there are multiple endpoints:
API at endpoint: **localhost:1000/api/genres**
API at endpoint: **localhost:1000/api/genres/:id**
