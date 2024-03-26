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
}

export const getReviews = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    let allreviews = (await pool.request().execute("getAllReviews")).recordset;

    return res.status(200).json({
      reviews: allreviews,
    });
  } catch (error) {
    return res.json({ error });
  }
};

export const getOneReview = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let review = (await pool.request().input("review_id", id).execute('getOneReview')).recordset

        return res.json({
            review
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getSpecReviews = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let reviews = (await pool.request().input("spec_id", id).execute('getSpecReviews')).recordset

        return res.json({
            reviews
        })
    } catch (error) {
        return res.json({error})
    }
}
export const getUserReviews = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let reviews = (await pool.request().input("user_id", id).execute('getUserReviews')).recordset

        return res.json({
            reviews
        })
    } catch (error) {
        return res.json({error})
    }
}