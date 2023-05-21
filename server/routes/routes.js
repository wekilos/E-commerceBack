const express = require("express");
// const { verify } = require("crypto");
const Func = require("../functions/functions");
const sequelize = require("../../config/db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cache = require("../../config/node-cache");
const path = require("path");

// Controllers
const UserControllers = require("../controller/usersController");
const UserAddressControllers = require("../controller/usersAddressController");
const FeedBackControllers = require("../controller/feedBackController");
const ConfigControllers = require("../controller/configController");
const EBannerCardControllers = require("../controller/ebannerCardController");
const EBannerControllers = require("../controller/ebannerController");
const ECarouselControllers = require("../controller/ecarouselController");
const FoodBannerControllers = require("../controller/foodBannerController");
const FoodCarouselControllers = require("../controller/foodCarouselController");

// For Token

const verifyToken = async (req, res, next) => {
  const bearerHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, Func.Secret(), (err, authData) => {
      if (err) {
        res.json("err");
        console.log(err);
      } else {
        req.id = authData.id;
      }
    });
    next();
  } else {
    res.send("<center><h2>This link was not found! :(</h2></center>");
  }
};

// // Routes

// User Routes
router.get("/user/all", cache.get, UserControllers.getAll, cache.set);
router.get("/user/:id", cache.get, UserControllers.getOne, cache.set);
router.post("/user/create", UserControllers.create);
router.post("/user/login", UserControllers.login);
router.patch("/user/update", verifyToken, UserControllers.update);
router.patch("/user/disActive/:id", UserControllers.disActive);
router.patch("/user/active/:id", UserControllers.Active);
router.patch("/user/delete/:id", verifyToken, UserControllers.Delete);
router.delete("/user/destroy/:id", UserControllers.Destroy);

// User Address Routes
router.get(
  "/address/all",
  verifyToken,
  cache.get,
  UserAddressControllers.getAll,
  cache.set
);
router.get(
  "/address/:id",
  verifyToken,
  cache.get,
  UserAddressControllers.getOne,
  cache.set
);
router.post("/address/create", verifyToken, UserAddressControllers.create);
router.patch("/address/update", verifyToken, UserAddressControllers.update);
router.delete(
  "/address/destroy/:id",
  verifyToken,
  UserAddressControllers.Destroy
);

// FeedBack Routes
router.get("/feedBack/all", cache.get, FeedBackControllers.getAll, cache.set);
router.get("/feedBack/:id", cache.get, FeedBackControllers.getOne, cache.set);
router.post("/feedBack/create", verifyToken, FeedBackControllers.create);
router.patch("/feedBack/update", verifyToken, FeedBackControllers.update);
router.delete("/feedBack/destroy/:id", FeedBackControllers.Destroy);

// Config Routes
router.get("/config/all", cache.get, ConfigControllers.getAll, cache.set);
router.get("/config/:id", cache.get, ConfigControllers.getOne, cache.set);
router.post("/config/create", ConfigControllers.create);
router.patch("/config/update", ConfigControllers.update);
router.delete("/config/destroy/:id", ConfigControllers.Destroy);

// E-banner-cards Routes
router.get(
  "/e-banner-card/all",
  cache.get,
  EBannerCardControllers.getAll,
  cache.set
);
router.get(
  "/e-banner-card/:id",
  cache.get,
  EBannerCardControllers.getOne,
  cache.set
);
router.post("/e-banner-card/create", EBannerCardControllers.create);
router.patch("/e-banner-card/update", EBannerCardControllers.update);
router.delete("/e-banner-card/destroy/:id", EBannerCardControllers.Destroy);

// E-banner Routes
router.get("/e-banner/all", cache.get, EBannerControllers.getAll, cache.set);
router.get("/e-banner/:id", cache.get, EBannerControllers.getOne, cache.set);
router.post("/e-banner/create", EBannerControllers.create);
router.patch("/e-banner/update", EBannerControllers.update);
router.delete("/e-banner/destroy/:id", EBannerControllers.Destroy);

// E-Carousel Routes
router.get(
  "/e-carousel/all",
  cache.get,
  ECarouselControllers.getAll,
  cache.set
);
router.get(
  "/e-carousel/:id",
  cache.get,
  ECarouselControllers.getOne,
  cache.set
);
router.post("/e-carousel/create", ECarouselControllers.create);
router.patch("/e-carousel/update", ECarouselControllers.update);
router.delete("/e-carousel/destroy/:id", ECarouselControllers.Destroy);

// Food-banner Routes
router.get("/f-banner/all", cache.get, FoodBannerControllers.getAll, cache.set);
router.get("/f-banner/:id", cache.get, FoodBannerControllers.getOne, cache.set);
router.post("/f-banner/create", FoodBannerControllers.create);
router.patch("/f-banner/update", FoodBannerControllers.update);
router.delete("/f-banner/destroy/:id", FoodBannerControllers.Destroy);

// Food-carousel Routes
router.get(
  "/f-carousel/all",
  cache.get,
  FoodCarouselControllers.getAll,
  cache.set
);
router.get(
  "/f-carousel/:id",
  cache.get,
  FoodCarouselControllers.getOne,
  cache.set
);
router.post("/f-carousel/create", FoodCarouselControllers.create);
router.patch("/f-carousel/update", FoodCarouselControllers.update);
router.delete("/f-carousel/destroy/:id", FoodCarouselControllers.Destroy);

module.exports = router;
