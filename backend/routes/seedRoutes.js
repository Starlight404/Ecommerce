import express from "express";
import Product from "../models/productModel.js";
import data from "../data.js";
const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({}); //returns all records inside product model
  const createdProducts = await Product.insertMany(data.products); //we call this to insert an array of products to the product model in the database
  res.send({ createdProducts }); // send this to the frontend
});

export default seedRouter;
