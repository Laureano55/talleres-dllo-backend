import { Router, Request, Response } from "express";
import { convertidorTemp_controller, resolvedor_controller, mejorParidad_controller, peorParidad_controller } from "./taller1.controller";

// INIT ROUTES
const taller_1_routes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function convertidorTemp_route(request: Request, response: Response) {

  const { c } = request.body;

  const temp = await convertidorTemp_controller(c);

  response.status(200).json({
    message: "Success.",
    celcious: c,
    farenheit: temp,
  });
}

async function resolvedor_route(request: Request, response: Response) {

  const { a, b, c, sig} = request.body;

  const res = await resolvedor_controller(a,b,c,sig);

  response.status(200).json({
    message: "Success.",
    x: res
  });
}

async function mejorParidad_route(request: Request, response: Response) {

  const { num } = request.body;

  const res = await mejorParidad_controller(num);

  response.status(200).json({
    message: "Success.",
    number: num,
    isEven: res
  });
}

async function peorParidad_route(request: Request, response: Response) {

  const { num } = request.body;

  const res = await peorParidad_controller(num);

  response.status(200).json({
    message: "Success.",
    number: num,
    isEven: res
  });
}

// DECLARE ENDPOINTS
taller_1_routes.post("/convertidorTemp", convertidorTemp_route);
taller_1_routes.post("/resolvedor", resolvedor_route);
taller_1_routes.post("/mejorParidad", mejorParidad_route);
taller_1_routes.post("/peorParidad", peorParidad_route);

// EXPORT ROUTES
export default taller_1_routes;
