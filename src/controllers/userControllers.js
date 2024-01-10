import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const userGetLike = async (req, res) => {
  try {
    let { userId } = req.params;
    let data = await conn.like_res.findAll({
      where: {
        user_id: userId,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`userGetLike error ${e}`);
  }
};

export { userGetLike };
