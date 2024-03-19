import mssql from "mssql";
import { Request, Response } from "express";
import { sqlConfig } from "../Config/sql.config";
import { registerReviewSchema } from "../Validators/reviews.validators";
import { v4 } from "uuid";
import { Review } from "../Interfaces/review";

const reviews: Review[] = [];

export const createReview = async (req: Request, res: Response) => {
  try {
    const id = v4();

    const {order_id, review_desc }: Review = req.body;

    let { error } = registerReviewSchema.validate(req.body);

    if (error) {
      return res.status(404).json({
        error: error.details[0].message,
      });
    }

    const pool = await mssql.connect(sqlConfig);

    let result = (
      await pool
        .request()
        .input("review_id", mssql.VarChar, id)
        .input("order_id", mssql.VarChar, order_id)
        .input("review_desc", mssql.VarChar, review_desc)
        .execute("createReview")
    ).rowsAffected;

    console.log(result);

    return res.json({
      message: "Review created successfully",
    });
  } catch (error) {
    return res.json({ error: "error" });
  }
};
