import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        isActive: boolean;
        isAdm: boolean;
        id: string;
      };
    }
  }
}
