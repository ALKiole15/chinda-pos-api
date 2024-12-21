import { Response, Request } from "express";

export type RequestHandler = (
  request: Request,
  response: Response
) => void | Promise<Response>;
