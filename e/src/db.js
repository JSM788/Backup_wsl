#!/usr/bin/node

const {Sequelize, DataTypes} = require("sequelize")

const database = new Sequelize(`postgres://postgres:72781128@localhost/prueba`, {dialect: "postgres"})


database.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, underscored: true }
);


module.exports = {database}
