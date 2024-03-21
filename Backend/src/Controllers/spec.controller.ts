import mssql from "mssql";
import { Request, Response } from "express";
import { Spec } from "../Interfaces/spec";
import { sqlConfig } from "../Config/sql.config";
import { registerSpecSchema } from "../Validators/spec.validators";

const specs: Spec[] = [];

export const createSpec = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const existingId = await callGetIDProcedure(id);
    if (!existingId) {
      return res.status(404).json({
        error: "Spec with the provided id not found",
      });
    }

    const { job_title, spec_loc, spec_desc, ratings,prof_image}: Spec = req.body;

    let { error } = registerSpecSchema.validate(req.body);

    if (error) {
      return res.status(404).json({
        error: error.details[0].message,
      });
    }

    const pool = await mssql.connect(sqlConfig);

    let result = (
      await pool
        .request()
        .input("spec_id", mssql.VarChar, id)
        .input("job_title", mssql.VarChar, job_title)
        .input("spec_loc", mssql.VarChar, spec_loc)
        .input("spec_desc", mssql.VarChar, spec_desc)
        .input("ratings", mssql.Int, ratings)
        .input("prof_image", mssql.VarChar, prof_image)
        .execute("registerSpec")
    ).rowsAffected;

    console.log(result);

    return res.json({
      message: "Profile created successfully",
    });
  } catch (error) {
    return res.json({ error: "error" });
  }
};
async function callGetIDProcedure(spec_id: string) {
  try {
    const pool = await mssql.connect(sqlConfig);

    const result = await pool.request()
            .input('spec_id', mssql.VarChar, spec_id)
            .execute('getSpecID');

        if (result.recordset.length > 0) {
            const existingId = result.recordset[0];
            return existingId;
        } else {
            return null;
        }
  } catch (error) {
    console.error("Error calling getID procedure:", error);
    throw error;
  }
}
export const getSpecs = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    let allspecs = (await pool.request().execute("getAllSpecs")).recordset;

    return res.status(200).json({
      specs: allspecs,
    });
  } catch (error) {
    return res.json({ error });
  }
};

export const getOneSpec = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const pool = await mssql.connect(sqlConfig);

    let spec = (await pool.request().input("spec_id", id).execute("getOneSpec"))
      .recordset;

    return res.json({
      spec,
    });
  } catch (error) {
    return res.json({ error });
  }
};

export const updateSpec = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { job_title, spec_loc, spec_desc, ratings,prof_image }: Spec = req.body;

    const pool = await mssql.connect(sqlConfig);

    let result = (
      await pool
        .request()
        .input("spec_id", id)
        .input("job_title", mssql.VarChar, job_title)
        .input("spec_loc", mssql.VarChar, spec_loc)
        .input("spec_desc", mssql.VarChar, spec_desc)
        .input("ratings", mssql.Int, ratings)
        .input("prof_image", mssql.VarChar, prof_image)
        .execute("updateSpec")
    ).rowsAffected;

    // console.log(result);

    return res.status(200).json({
      message: "Details successfully updated",
    });
  } catch (error) {
    return res.json({ error });
  }
};

