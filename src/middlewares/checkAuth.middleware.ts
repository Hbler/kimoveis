import "dotenv/config";

import jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

export const checkAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token || !token.includes("Bearer")) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({
          message: "Invalid token",
        });
      }

      req.user = {
        isActive: decoded.isActive,
        isAdm: decoded.isAdm,
        id: decoded.sub,
      };

      next();
    }
  );
};
