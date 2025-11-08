import { Router, Request, Response } from "express";
import { findMax_controller, includes_controller, sum_controller, missingNumbers_controller } from "./taller2.controller";

// INIT ROUTES
const taller_2_routes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function findMax_route(request: Request, response: Response) {

  const { numbers } = request.body;

  const max = await findMax_controller(numbers);

  response.status(200).json({
    message: "Success.",
    max: max,
    numbers: numbers,
  });
}

async function includes_route(request: Request, response: Response) {

  const { numbers, a_encontrar} = request.body;

  const res = await includes_controller(numbers, a_encontrar);

  response.status(200).json({
    message: "Success.",
    result: res,
    numbers: numbers,
    a_encontrar: a_encontrar,
  });
}

async function sum_route(request: Request, response: Response) {

  const { numbers } = request.body;

  const total = await sum_controller(numbers);

  response.status(200).json({
    message: "Success.",
    total: total,
    numbers: numbers,
  });
}

async function missingNumbers_route(request: Request, response: Response) {

  const { numbers } = request.body;

  const res = await missingNumbers_controller(numbers);

  response.status(200).json({
    message: "Success.",
    missingNumbers: res,
    numbers: numbers,
  });
}

// DECLARE ENDPOINTS
taller_2_routes.post("/findMax", findMax_route);
taller_2_routes.post("/includes", includes_route);
taller_2_routes.post("/sum", sum_route);
taller_2_routes.post("/missingNumbers", missingNumbers_route);

// EXPORT ROUTES
export default taller_2_routes;
