const axios = require("axios");

const getOnlinePayment = async (req, res) => {
	const { order_id, price } = req.body;

	try {
		let config = {
			baseURL: "https://mpi.gov.tm/payment/rest/register.do?",
			url: "/",
			method: "get",
			params: {
				orderNumber: order_id,
				amount: price * 100,
				currency: "934",
				language: "ru",
				returnUrl: `http://ast.com.tm/checkout-result/?type=success&order_id=${order_id}`,
				failUrl: `http://ast.com.tm/checkout-result/?type=cancel&order_id=${order_id}`,
				userName: 701411000036,
				password: "E2hgRvgPdffhU83",
				pageView: "Desktop",
				description: "orderDesc",
			},
		};

		let response = await axios(config);

		if (response.data.errorCode != 0 && response.data.errorCode != 1) {
			throw new Error(`Unexpected errorCode ${response.data.errorCode}`);
		}

		if (response.data.errorCode == 1) {
			const new_order_id = Date.now().toString();
			config.params.orderNumber = new_order_id;
			config.params.returnUrl = `http://ast.com.tm/checkout-result/?type=success&order_id=${new_order_id}`;
			config.params.failUrl = `http://ast.com.tm/checkout-result/?type=cancel&order_id=${new_order_id}`;

			response = await axios(config);
			if (response.data.errorCode != 0) {
				throw new Error(`Unexpected errorCode ${response.data.errorCode}`);
			}
			response.data.order_id = new_order_id;
		}

		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
};

exports.getOnlinePayment = getOnlinePayment;
