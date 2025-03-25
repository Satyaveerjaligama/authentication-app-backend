import { Request, Response, NextFunction } from "express";

const validateRequestBody =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (err: any) {
      res.status(400).json({ error: err?.errors[0] });
    }
  };

export default validateRequestBody;
