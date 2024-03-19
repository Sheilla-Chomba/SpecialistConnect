import { Router } from "express";
import { createOrder, getOneOrder, getOrders, updateOrder } from "../Controllers/order.controller";

const orderRouter = Router()

orderRouter.post('/', createOrder)
orderRouter.get("/", getOrders)
orderRouter.get("/:id", getOneOrder)
orderRouter.put("/update/:id", updateOrder);

export default orderRouter;