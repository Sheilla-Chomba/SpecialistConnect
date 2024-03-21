import mssql from "mssql";
import { Request, Response } from "express";
import { Order, Updated_Order } from "../Interfaces/order";
import { sqlConfig } from "../Config/sql.config";
import { registerOrderSchema } from "../Validators/order.validators";
import { v4 } from "uuid";

const orders: Order[] = [];
const updated_orders: Updated_Order[] = [];

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

export const getOneOrder = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let order = (await pool.request().input("order_id", id).execute('getOneOrder')).recordset

        return res.json({
            order
        })
    } catch (error) {
        return res.json({error})
    }
}
export const getSpecOrders = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let spec_orders = (await pool.request().input("spec_id", id).execute('getSpecOrders')).recordset

        return res.json({
            spec_orders
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { order_desc, status }: Updated_Order = req.body;

    const pool = await mssql.connect(sqlConfig);

    let result = (
      await pool
        .request()
        .input("order_id", id)
        .input("order_desc", mssql.VarChar, order_desc)
        .input("status", mssql.VarChar, status)
        .execute("updateOrder")
    ).rowsAffected;

    // console.log(result);

    return res.status(200).json({
      message: "Order details successfully updated",
    });
  } catch (error) {
    return res.json({ error });
  }
};