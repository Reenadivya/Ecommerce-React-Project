require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51LrAESD0s5Rbh6ocgLrYNhkH8t0orYv9M0KRO3wqxdiOXm7LCKEwMdMAY3fc0ta3QbW6ngruFUlmENrL8CZPuiKA00pDLOHLlh"
);
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const stripe = require("stripe")(
//   "sk_test_51LrAESD0s5Rbh6ocgLrYNhkH8t0orYv9M0KRO3wqxdiOXm7LCKEwMdMAY3fc0ta3QbW6ngruFUlmENrL8CZPuiKA00pDLOHLlh"
// );

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
