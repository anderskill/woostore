import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://shop-interview.acrowd.se",
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products?per_page=50");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postWooCommerceOrder(data) {
  await api
    .post("orders", data)
    .then((response) => {
      // console.log(response.data);
    })
    .catch((error) => {
      // console.log(error.response.data);
    });
}
