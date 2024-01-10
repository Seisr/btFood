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

const userGetRate = async (req, res) => {
  try {
    let { userId } = req.params;
    let data = await conn.rate_res.findAll({
      where: {
        user_id: userId,
      },
    });
    res.send(data);
  } catch (e) {
    res.send(`userGetRate error ${e}`);
  }
};

const userCreateLike = async (req, res) => {
  try {
    let { user_id, res_id, date_like } = req.body;
    let newData = {
      user_id,
      res_id,
      date_like,
    };
    await conn.like_res.create(newData);
    res.send(`userCreateLike successful`);
  } catch (e) {
    res.send(`userCreateLike error ${e}`);
  }
};

const userDeleteLike = async (req, res) => {
  try {
    let { userId, resId } = req.params;
    await conn.like_res.destroy({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    res.send(`userDeleteLike successful`);
  } catch (e) {
    res.send(`userDeleteLike error ${e}`);
  }
};

const userCreateRate = async (req, res) => {
  try {
    let { user_id, res_id, amount, date_rate } = req.body;
    let newData = {
      user_id: user_id,
      res_id: res_id,
      amount: amount,
      date_rate: date_rate,
    };
    await conn.rate_res.create(newData);
    res.send(`userCreateRate successful`);
  } catch (e) {
    res.send(`userCreateRate error ${e}`);
  }
};

const userCreateOrders = async (req, res) => {
  try {
    let { user_id, food_id, amount, codes, arr_sub_id } = req.body;
    console.log(codes);
    let newData = {
      user_id: user_id,
      food_id: food_id,
      amount: amount,
      codes: codes,
      arr_sub_id: arr_sub_id,
    };
    await conn.orders.create(newData);
    res.send(`userCreateOrders successful`);
  } catch (e) {
    res.send(`userCreateOrder error ${e}`);
  }
};

export {
  userGetLike,
  userGetRate,
  userCreateLike,
  userDeleteLike,
  userCreateRate,
  userCreateOrders,
};
