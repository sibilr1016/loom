import Product from "../models/product.schema.js";

async function getProductsHAndler(req, res) {
  const result = await Product.find({});
  console.log(result);
  res && res.json(result);
}

export default getProductsHAndler;
