import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node38_food2", "root", "12041994", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default sequelize;
