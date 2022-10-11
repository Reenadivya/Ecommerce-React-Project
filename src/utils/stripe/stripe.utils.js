import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  `pk_test_51LrAESD0s5Rbh6ocX3fUcx8D8hLW7SDYy7F031eJFi8IHq4eFgjxKljVH0BFXSMENwdyIK9PXuIIgx3HYVE24pkW00BfIjp7iD`
);
