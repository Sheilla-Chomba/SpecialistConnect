import { Router } from "express";
import { createOrder, getOrders } from "../Controllers/order.controller";

const orderRouter = Router()

orderRouter.post('/', createOrder)
orderRouter.get("/", getOrders);

export default orderRouter;