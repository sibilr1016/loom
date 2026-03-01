import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoDb from "./config/mongoDb.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
mongoDb();

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
