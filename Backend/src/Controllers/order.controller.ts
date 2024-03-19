import mssql from "mssql";
import { Request, Response } from "express";
import { Order } from "../Interfaces/order";
import { sqlConfig } from "../Config/sql.config";
import { registerOrderSchema } from "../Validators/order.validators";
import { v4 } from "uuid";

const orders: Order[] = [];

export const createOrder = async (req: Request, res: Response) => {
  try {
    const id = v4();

    const { spec_id,user_id,order_desc, status }: Order =
      req.body;

    let { error } = registerOrderSchema.validate(req.body);

    if (error) {
      return res.status(404).json({
        error: error.details[0].message,
      });
    }

    const pool = await mssql.connect(sqlConfig);

    let result = (
      await pool
        .request()
        .input("order_id", mssql.VarChar, id)
        .input("spec_id", mssql.VarChar, spec_id)
        .input("user_id", mssql.VarChar, user_id)
        .input("order_desc", mssql.VarChar, order_desc)
        .input("status", mssql.VarChar, status)
        .execute("createOrder")
    ).rowsAffected;

    console.log(result);

    return res.json({
      message: "Order created successfully",
    });
  } catch (error) {
    return res.json({ error: "error" });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    let allorders = (await pool.request().execute("getAllOrders")).recordset;

    return res.status(200).json({
      orders: allorders,
    });
  } catch (error) {
    return res.json({ error });
  }
};