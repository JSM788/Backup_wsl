#!/usr/bin/node

const express = require("express");
const Sequelize = require("sequelize");
const app = express();

const sequelize = new Sequelize("repaso", "postgres", "", {
  host: "localhost",
  dialect: "postgresql",
});

const postresModel = sequelize.define("postres", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  nombre: Sequelize.STRING,
  calorias: Sequelize.INTEGER,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexion");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3001, () => {
  console.log("Puerto 3001");
});

