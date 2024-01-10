import { Sequelize } from "sequelize";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const conn = initModels(sequelize);

const resGetLike = async (req, res) => {
  try {
    let { resId } = req.params;
    let data = await conn.like_res.findAll({
      where: {
        res_id: resId,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`resGetLike error ${e}`);
  }
};

const resGetRate = async (req, res) => {
  try {
    let { resId } = req.params;
    let data = await conn.rate_res.findAll({
      where: {
        res_id: resId,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`resGetRate error ${e}`);
  }
};

export { resGetLike, resGetRate };
