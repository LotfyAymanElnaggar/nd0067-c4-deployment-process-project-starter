import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,

  dialect: "postgres",
  storage: ":memory:",
});

//const sequelize = new Sequelize(
// "postgres://postgres:myPassword@database-1.cjgo5oahfx0s.us-east-1.rds.amazonaws.com:5432/postgres"
//);
