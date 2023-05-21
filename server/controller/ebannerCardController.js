var Sequelize = require("sequelize");
const { EBannerCard } = require("../../models");
const Op = Sequelize.Op;
const fs = require("fs");

const getAll = async (req, res) => {
  EBannerCard.findAll({
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
  const data = await EBannerCard.findOne({ where: { id: id } });
  if (data) {
    EBannerCard.findOne({
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
    res.send("BU ID boyuncha EBannerCard yok!");
  }
};

const create = async (req, res) => {
  const files =
    req.files.img.constructor === Array ? req.files.img : [req.files.img];
  console.log("filessss>>>>>>", typeof files);
  console.log("files", files);

  let imgs = [];
  const upl = (img) => {
    let randomNumber = Math.floor(Math.random() * 999999999999);
    let img_direction = `./uploads/` + randomNumber + `${img.name}`;
    fs.writeFile(img_direction, img.data, function (err) {
      console.log(err);
    });
    imgs.push({ img: img_direction });
  };

  files?.map((item) => {
    upl(item);
  });

  EBannerCard.bulkCreate(imgs, { returning: true })
    .then(async (data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json("create EBannerCard:", err);
    });
};

const update = async (req, res) => {
  const { img, id } = req.body;

  const data = await EBannerCard.findOne({ where: { id: id } });
  if (!data) {
    res.json("Bu Id boyuncha EBannerCard yok!");
  } else {
    EBannerCard.update(
      {
        img,
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
        res.json("update EBannerCard:", err);
      });
  }
};

const Destroy = async (req, res) => {
  const { id } = req.params;
  let data = await EBannerCard.findOne({ where: { id } });
  if (data) {
    EBannerCard.destroy({
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
    res.json("Bu Id Boyuncha EBannerCard yok!");
  }
};
exports.getAll = getAll;
exports.getOne = getOne;
exports.create = create;
exports.update = update;
exports.Destroy = Destroy;
