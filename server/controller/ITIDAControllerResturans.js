const axiosIns = require("../../config/axiosIns");
const axios = require("axios");

const BASE_URL = "http://119.235.118.211:8080";

const getAllCategories = async (req, res) => {
  const { page, limit, lang, order } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_categories?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getAllDiscountProducts = async (req, res) => {
  const { page, limit, lang, order } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_restaurant_discount?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getAllMoreSaleProducts = async (req, res) => {
  const { page, limit, lang, order } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_restaurant_more_sale?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getAllCategoryProducts = async (req, res) => {
  const { page, limit, lang, order, category_id } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_restaurant_category?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&category_id=" +
        category_id,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getMarket = async (req, res) => {
  const { page, limit, lang, order, restaurant_id } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_restaurant?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&restaurant_id=" +
        restaurant_id,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getResturantMeals = async (req, res) => {
  const { page, limit, lang, order, restaurant_id } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_restaurant_meals?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&restaurant_id=" +
        restaurant_id,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getResturantMealsByIds = async (req, res) => {
  const { page, limit, lang, order, ids } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_restaurant_meals_ids?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&ids=" +
        ids,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getResturantsByIds = async (req, res) => {
  const { page, limit, lang, order, ids } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_restaurants_ids?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&ids=" +
        ids,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getAllSearchProducts = async (req, res) => {
  const { page, limit, lang, order, product_name } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_search_meal?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&product_name=" +
        product_name,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const createOrder = async (req, res) => {
  const {
    user_id,
    phone_number,
    address,
    price,
    service_price,
    discount_price,
    delivery_price,
    note,
    code,
    status,
    type_payment,
    restaurant_id,
    order,
  } = req.body;
  console.log(req.body);
  try {
    const response = await axios.post(BASE_URL + "/food_order", {
      user_id,
      phone_number,
      address,
      price,
      service_price,
      discount_price,
      delivery_price,
      note,
      code,
      status,
      type_payment,
      restaurant_id,
      order,
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const rejectOrder = async (req, res) => {
  const { user_id, order_id } = req.body;

  try {
    const response = await axios.post(BASE_URL + "/food_rejected_order", {
      user_id,
      order_id,
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getAllOrders = async (req, res) => {
  const { page, limit, lang, order, user_id } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_orders?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&user_id=" +
        user_id,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getOrder = async (req, res) => {
  const { page, limit, lang, order, order_id } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_order?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&order_id=" +
        order_id,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const createRating = async (req, res) => {
  const { user_id, restaurant_id, username, text, star_count } = req.body;

  try {
    const response = await axios.post(BASE_URL + "/food_give_rating", {
      user_id,
      restaurant_id,
      username,
      text,
      star_count,
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const addToFavProduct = async (req, res) => {
  const { user_id, food_id } = req.body;

  try {
    const response = await axios.post(BASE_URL + "/food_favourite_meal", {
      user_id,
      food_id,
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const addToFavMarket = async (req, res) => {
  const { user_id, restaurant_id } = req.body;

  try {
    const response = await axios.post(BASE_URL + "/food_favourite_restaurant", {
      user_id,
      restaurant_id,
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getFavProducts = async (req, res) => {
  const { page, limit, lang, order, user_id } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_favourite_meals?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&user_id=" +
        user_id,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const getFavMarkets = async (req, res) => {
  const { page, limit, lang, order, user_id } = req.query;
  const Page = page ? page : 0;
  const Limit = limit ? limit : 20;
  const Lang = lang ? lang : "TM";
  const Order = order ? order : "ASC";
  try {
    const response = await axios({
      url:
        BASE_URL +
        "/food_favourite_restaurants?page=" +
        Page +
        "&limit=" +
        Limit +
        "&lang=" +
        Lang +
        "&order=" +
        Order +
        "&user_id=" +
        user_id,
      method: "get",
    });
    res.status(200).json(response.data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

exports.getAllCategories = getAllCategories;
exports.getAllDiscountProducts = getAllDiscountProducts;
exports.getAllMoreSaleProducts = getAllMoreSaleProducts;
exports.getAllCategoryProducts = getAllCategoryProducts;
exports.getAllSearchProducts = getAllSearchProducts;
exports.getMarket = getMarket;
exports.createOrder = createOrder;
exports.rejectOrder = rejectOrder;
exports.getAllOrders = getAllOrders;
exports.getOrder = getOrder;
exports.createRating = createRating;
exports.addToFavProduct = addToFavProduct;
exports.addToFavMarket = addToFavMarket;
exports.getFavProducts = getFavProducts;
exports.getFavMarkets = getFavMarkets;
exports.getResturantMeals = getResturantMeals;
exports.getResturantMealsByIds = getResturantMealsByIds;
exports.getResturantsByIds = getResturantsByIds;
