import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";
const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({}); //returns all records inside product model
  const createdProducts = await Product.insertMany(data.products); //we call this to insert an array of products to the product model in the database
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
