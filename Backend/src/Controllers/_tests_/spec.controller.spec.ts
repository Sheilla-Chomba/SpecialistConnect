import mssql from "mssql";
import { createSpec } from "../spec.controller";

describe("Create Spec", () => {
  let res: any;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it("successfully registers a spec", async () => {
    const req = {
      body: {
        // spec_id: "dffdfgggb",
        job_title: "Data Analyst",
        spec_loc: "Nyeri, Kenya",
        spec_desc: "aI am good ata Data Cleaning",
        ratings: 2000,
        prof_image: "admin.jpeg",
      },
    };


    const mockedInput = jest.fn().mockReturnThis(); //makes it chainable

    const mockedExecute = jest.fn().mockResolvedValue({ rowsAffected: [1] });

    const mockedRequest = {
      input: mockedInput,
      execute: mockedExecute,
    };

    const mockedPool = {
      request: jest.fn().mockReturnValue(mockedRequest),
    };

    jest.spyOn(mssql, "connect").mockResolvedValue(mockedPool as never);

    await createSpec(req as any, res);

    expect(res.json).toHaveBeenCalledWith({
      message: "Profile created successfully",
    });
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
