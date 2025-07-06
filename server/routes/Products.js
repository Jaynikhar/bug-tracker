const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.post("/add", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send("Product added");
});

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.patch("/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.send("Product updated");
});

router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Product deleted");
});

module.exports = router;
