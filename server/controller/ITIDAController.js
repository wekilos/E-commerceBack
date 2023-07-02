const { request } = require("express");
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
				"/grocery_categories?page=" +
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

const getAllBrands = async (req, res) => {
	const { page, limit, lang, order } = req.query;
	const Page = page ? page : 0;
	const Limit = limit ? limit : 20;
	const Lang = lang ? lang : "TM";
	const Order = order ? order : "ASC";
	try {
		const response = await axios({
			url:
				BASE_URL +
				"/grocery_brands?page=" +
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

const getAllMarkets = async (req, res) => {
	const { page, limit, lang, order } = req.query;
	const Page = page ? page : 0;
	const Limit = limit ? limit : 20;
	const Lang = lang ? lang : "TM";
	const Order = order ? order : "ASC";
	try {
		const response = await axios({
			url:
				BASE_URL +
				"/grocery_markets?page=" +
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
				"/grocery_discount_products?page=" +
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
				"/grocery_more_sale_products?page=" +
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
				"/grocery_category_products?page=" +
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

const getAllSubCategoryProducts = async (req, res) => {
	const { page, limit, lang, order, subcategory_id } = req.query;
	const Page = page ? page : 0;
	const Limit = limit ? limit : 20;
	const Lang = lang ? lang : "TM";
	const Order = order ? order : "ASC";
	try {
		const response = await axios({
			url:
				BASE_URL +
				"/grocery_subcategory_products?page=" +
				Page +
				"&limit=" +
				Limit +
				"&lang=" +
				Lang +
				"&order=" +
				Order +
				"&subcategory_id=" +
				subcategory_id,
			method: "get",
		});
		res.status(200).json(response.data);
		console.log(response.data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
};

const getAllSameProducts = async (req, res) => {
	const { page, limit, lang, order, product_id } = req.query;
	const Page = page ? page : 0;
	const Limit = limit ? limit : 20;
	const Lang = lang ? lang : "TM";
	const Order = order ? order : "ASC";
	try {
		const response = await axios({
			url:
				BASE_URL +
				"/grocery_same_products?page=" +
				Page +
				"&limit=" +
				Limit +
				"&lang=" +
				Lang +
				"&order=" +
				Order +
				"&product_id=" +
				product_id,
			method: "get",
		});
		res.status(200).json(response.data);
		console.log(response.data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
};

const getAllBarndProducts = async (req, res) => {
	const { page, limit, lang, order, brand_id } = req.query;
	const Page = page ? page : 0;
	const Limit = limit ? limit : 20;
	const Lang = lang ? lang : "TM";
	const Order = order ? order : "ASC";
	try {
		const response = await axios({
			url:
				BASE_URL +
				"/grocery_brand_products?page=" +
				Page +
				"&limit=" +
				Limit +
				"&lang=" +
				Lang +
				"&order=" +
				Order +
				"&brand_id=" +
				brand_id,
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
				"/grocery_search_products?page=" +
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

const getProduct = async (req, res) => {
	const { page, limit, lang, order, product_id } = req.query;
	const Page = page ? page : 0;
	const Limit = limit ? limit : 20;
	const Lang = lang ? lang : "TM";
	const Order = order ? order : "ASC";
	try {
		const response = await axios({
			url:
				BASE_URL +
				"/grocery_product?page=" +
				Page +
				"&limit=" +
				Limit +
				"&lang=" +
				Lang +
				"&order=" +
				Order +
				"&product_id=" +
				product_id,
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
	const { page, limit, lang, order, market_id } = req.query;
	const Page = page ? page : 0;
	const Limit = limit ? limit : 20;
	const Lang = lang ? lang : "TM";
	const Order = order ? order : "ASC";
	try {
		const response = await axios({
			url:
				BASE_URL +
				"/grocery_market?page=" +
				Page +
				"&limit=" +
				Limit +
				"&lang=" +
				Lang +
				"&order=" +
				Order +
				"&market_id=" +
				market_id,
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
		order,
	} = req.body;
	console.log(req.body);
	try {
		const response = await axios.post(BASE_URL + "/grocery_order", {
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
		const response = await axios.post(BASE_URL + "/grocery_rejected_order", {
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
				"/grocery_orders?page=" +
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
				"/grocery_order?page=" +
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
	const { user_id, market_id, username, text, star_count } = req.body;

	try {
		const response = await axios.post(BASE_URL + "/grocery_give_rating", {
			user_id,
			market_id,
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
	const { user_id, product_id } = req.body;

	try {
		const response = await axios.post(BASE_URL + "/grocery_favourite_product", {
			user_id,
			product_id,
		});
		res.status(200).json(response.data);
		console.log(response.data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
};

const addToFavMarket = async (req, res) => {
	const { user_id, market_id } = req.body;

	try {
		const response = await axios.post(BASE_URL + "/grocery_favourite_market", {
			user_id,
			market_id,
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
				"/grocery_favourite_products?page=" +
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
				"/grocery_favourite_markets?page=" +
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

const changeOrderStatus = async (req, res) => {
	const { user_id, order_id, status } = req.body;

	try {
		const response = await axios.post(
			BASE_URL + "/grocery_change_order_status",
			{ user_id, order_id, status }
		);
		res.status(200).json(response.data);
		console.log(response.data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
};

exports.getAllCategories = getAllCategories;
exports.getAllBrands = getAllBrands;
exports.getAllMarkets = getAllMarkets;
exports.getAllDiscountProducts = getAllDiscountProducts;
exports.getAllMoreSaleProducts = getAllMoreSaleProducts;
exports.getAllCategoryProducts = getAllCategoryProducts;
exports.getAllSubCategoryProducts = getAllSubCategoryProducts;
exports.getAllSameProducts = getAllSameProducts;
exports.getAllBarndProducts = getAllBarndProducts;
exports.getAllSearchProducts = getAllSearchProducts;
exports.getProduct = getProduct;
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
exports.changeOrderStatus = changeOrderStatus;
