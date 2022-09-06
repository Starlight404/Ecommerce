import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config(); //for fetching data

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected boss");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));//the form data in the post request will be converted to a json object inside req.body

app.use("/api/seed", seedRouter);

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

//its a middleware that accpets four parameters
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
