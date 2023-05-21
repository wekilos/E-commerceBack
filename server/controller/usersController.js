var Sequelize = require("sequelize");
const { User, UserAddress } = require("../../models");
var sequelize = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Func = require("../functions/functions");
const Op = Sequelize.Op;
const fs = require("fs");

const getAll = async (req, res) => {
  const { active, name } = req.query;

  const Active = active ? { active: active } : null;
  const Username =
    name &&
    (name?.length > 0
      ? {
          [Op.or]: [
            { name: { [Op.like]: `%${name}%` } },
            { lastname: { [Op.like]: `%${name}%` } },
          ],
        }
      : null);
  User.findAll({
    include: [
      {
        model: UserAddress,
      },
    ],

    where: {
      [Op.and]: [Active, Username],
    },
    order: [["id", "DESC"]],
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const data = await User.findOne({ where: { id: id } });
  if (data) {
    User.findOne({
      include: [
        {
          model: UserAddress,
        },
      ],
      where: {
        id: id,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: err });
      });
  } else {
    res.send("BU ID boyuncha User yok!");
  }
};

const create = async (req, res) => {
  const { name, lastname, birthday, phone_number } = req.body;
  const exist = await User.findOne({
    where: {
      phone_number: phone_number,
    },
  });

  if (exist) {
    let text = "Bu nomur-da ulanyjy bar!";
    res.json({
      msg: text,
    });
  } else {
    User.create({
      name,
      lastname,
      birthday,
      phone_number,
      active: true,
      deleted: false,
    })
      .then(async (data) => {
        jwt.sign(
          {
            id: data.id,
            name: data.name,
            lastname: data.lastname,
            phone_number: data.phone_number,
          },
          Func.Secret(),
          (err, token) => {
            res.status(200).json({
              msg: "Suссessfully",
              token: token,
              id: data.id,
              name: data.name,
              lastname: data.lastname,
              phone_number: data.phone_number,
            });
          }
        );
      })
      .catch((err) => {
        console.log(err);
        res.json("create employee:", err);
      });
  }
};

const login = async (req, res) => {
  const { phone_number } = req.body;

  await User.findOne({
    where: { phone_number: phone_number },
  })
    .then(async (data) => {
      if (!data.active) {
        res.json({ msg: "Siz DisActive edilen!" });
        return 0;
      }
    })
    .catch((err) => {
      let text = "Hasaba alynmadyk employee!";
      res.send({ login: false, msg: text, err: err });
    });
};

const update = async (req, res) => {
  const { name, lastname, id } = req.body;

  const data = await User.findOne({ where: { id: id } });
  if (!data) {
    res.json("Bu Id boyuncha User yok!");
  } else {
    User.update(
      {
        name,
        lastname,
        active: true,
        deleted: false,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then(async (data) => {
        res.json("updated");
      })
      .catch((err) => {
        console.log(err);
        res.json("update employee:", err);
      });
  }
};

const disActive = async (req, res) => {
  const { id } = req.params;
  let data = await User.findOne({ where: { id } });
  if (data) {
    User.update(
      {
        active: false,
      },
      {
        where: {
          id,
        },
      }
    )
      .then(() => {
        res.json("DisActived!");
      })
      .catch((err) => {
        console.log(err);
        res.json({ err: err });
      });
  } else {
    res.json("Bu Id Boyuncha User yok!");
  }
};

const Active = async (req, res) => {
  const { id } = req.params;
  let data = await User.findOne({ where: { id } });
  if (data) {
    User.update(
      {
        active: true,
      },
      {
        where: {
          id,
        },
      }
    )
      .then(() => {
        res.json("DisActived!");
      })
      .catch((err) => {
        console.log(err);
        res.json({ err: err });
      });
  } else {
    res.json("Bu Id Boyuncha User yok!");
  }
};

const Delete = async (req, res) => {
  const { id } = req.params;
  let data = await User.findOne({ where: { id } });
  if (data) {
    User.update(
      {
        active: false,
        deleted: true,
      },
      {
        where: {
          id,
        },
      }
    )
      .then(() => {
        res.json("Deleted!");
      })
      .catch((err) => {
        console.log(err);
        res.json({ err: err });
      });
  } else {
    res.json("Bu Id Boyuncha User yok!");
  }
};
const Destroy = async (req, res) => {
  const { id } = req.params;
  let data = await User.findOne({ where: { id } });
  if (data) {
    User.destroy({
      where: {
        id,
      },
    })
      .then(() => {
        res.json("destroyed!");
      })
      .catch((err) => {
        console.log(err);
        res.json({ err: err });
      });
  } else {
    res.json("Bu Id Boyuncha User yok!");
  }
};
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.login = login;
exports.update = update;
exports.disActive = disActive;
exports.Active = Active;
exports.Delete = Delete;
exports.Destroy = Destroy;
