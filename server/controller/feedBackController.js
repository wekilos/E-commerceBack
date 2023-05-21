var Sequelize = require("sequelize");
const { FeedBack } = require("../../models");
const Op = Sequelize.Op;
const fs = require("fs");

const getAll = async (req, res) => {
  const { filter } = req.query;

  const Filter =
    filter &&
    (filter?.length > 0
      ? {
          [Op.or]: [
            { fullname: { [Op.like]: `%${filter}%` } },
            { email: { [Op.like]: `%${filter}%` } },
            { text: { [Op.like]: `%${filter}%` } },
          ],
        }
      : null);

  FeedBack.findAll({
    where: {
      [Op.and]: [Filter],
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
  const data = await FeedBack.findOne({ where: { id: id } });
  if (data) {
    FeedBack.findOne({
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
    res.send("BU ID boyuncha FeedBack yok!");
  }
};

const create = async (req, res) => {
  const { fullname, email, text } = req.body;

  FeedBack.create({
    fullname,
    email,
    text,
  })
    .then(async (data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json("create FeedBack:", err);
    });
};

const update = async (req, res) => {
  const { fullname, email, text, id } = req.body;

  const data = await FeedBack.findOne({ where: { id: id } });
  if (!data) {
    res.json("Bu Id boyuncha FeedBack yok!");
  } else {
    FeedBack.update(
      {
        fullname,
        email,
        text,
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
        res.json("update FeedBack:", err);
      });
  }
};

const Destroy = async (req, res) => {
  const { id } = req.params;
  let data = await FeedBack.findOne({ where: { id } });
  if (data) {
    FeedBack.destroy({
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
    res.json("Bu Id Boyuncha FeedBack yok!");
  }
};
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.update = update;
exports.Destroy = Destroy;
