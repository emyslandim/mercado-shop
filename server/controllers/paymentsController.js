const mercadopago = require('mercadopago');
const dotenv = require("dotenv");
dotenv.config();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
  base_url: 'https://api.mercadopago.com/v1'
});

exports.createPayment = async (req, res) => {
  const body = req.body;
  try {
    const response = await mercadopago.payment.create(body);
    res.json(response.body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar pagamento');
  }
};
