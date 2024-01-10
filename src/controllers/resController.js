import { Sequelize } from "sequelize";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const conn = initModels(sequelize);

const resGetLike = async (req, res) => {
  try {
    let { res } = req.params;
    let data = await conn.like_res.findAll();
    res.send(data);
  } catch (e) {
    res.send(`resGetLike error ${e}`);
  }
};

export { resGetLike };
