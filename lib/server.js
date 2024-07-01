// Server Module.

import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./handlers/products.handler.mjs";
import { users } from "./handlers/users.handler.mjs";

const server = {};
const expressServer = express();
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));
expressServer.use(cors());

const upload = multer();

// Starter Express server, og vi lytter på requests/forespørgelser.
server.run = () => {
  console.log("\n\n---------------------");
  console.log(
    "Starter REACT DEV Server",
    process.env.NODE_ENV,
    process.env.SERVER_HOST
  );
  console.log("\n\n---------------------");

  expressServer.listen(process.env.SERVER_PORT, () =>
    console.log(`Serveren lytter på port ${process.env.SERVER_PORT}`)
  );
};

expressServer.get("/", async (req, res) => {
  res.json({ status: true, message: "Our node.js app works" });
});

expressServer.get("/products", async (req, res) => {
  let result = await getProducts();
  res.json({
    status: true,
    message: "All products successfully fetched",
    data: result,
  });
});

expressServer.post("/products", async (req, res) => {
  let body = await req.body;

  let result = await createProduct(body);
  res.json({
    status: true,
    message: "Product successfully fetched",
    data: result,
  });
});

expressServer.delete("/products", async (req, res) => {
  let body = await req.body;

  let result = await deleteProduct(body);
  res.json({
    status: true,
    message: "Product successfully deleted",
    data: result,
  });
});

expressServer.put("/products", async (req, res) => {
  let body = await req.body;

  let result = await updateProduct(body);
  res.json({
    status: true,
    message: "Product successfully updated",
    data: result,
  });
});

/* Mine Server Kald */

expressServer.get("/users", async (req, res) => {
  let result = await users();
  res.json({
    status: true,
    message: "All Users successfully fetched",
    data: result,
  });
});

// Exporterer vores server module objekt.
export default server;
