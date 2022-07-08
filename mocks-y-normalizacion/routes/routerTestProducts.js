import Router from "express";
import { controllersApiTestProducts } from "../controllers/controllersApiTestProducts.js";

export const routerTestProducts = new Router();


routerTestProducts.get("/", controllersApiTestProducts.getProducts);