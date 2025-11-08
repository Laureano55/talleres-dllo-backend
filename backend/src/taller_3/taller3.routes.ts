import { Router, Request, Response } from "express";
import { Romana } from './types';

import { desglosarString_controller, twoSum_controller, conversionRomana_controller, descomposicion_controller } from "./taller3.controller";

// INIT ROUTES
const taller_3_routes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function desglosarString_route(request: Request, response: Response) {

  const { palabra, tipo } = request.body;

  if (tipo !== "vocales" && tipo !== "consonantes") {
    return response.status(400).json({
      error: "El tipo debe ser 'vocales' o 'consonantes'.",
    });
  }

  const res = await desglosarString_controller(palabra, tipo);


  response.status(200).json({
    message: "Success.",
    result: res,
    palabra: palabra,
    tipo: tipo,
  });
 
}

async function twoSum_route(request: Request, response: Response) {

  const { lista, num } = request.body;


  const res = await twoSum_controller(lista, num);


  response.status(200).json({
    message: "Success.",
    result: res,
    lista: lista,
    num: num,
  });
 
}

async function conversionRomana_route(request: Request, response: Response) {

  const { roman } = request.body;


  const res = await conversionRomana_controller(roman);


  response.status(200).json({
    message: "Success.",
    result: res,
    roman: roman,
  });
 
}


async function descomposicion_route(request: Request, response: Response) {

  const { mamotreto } = request.body;

  const res = await descomposicion_controller(mamotreto);

  response.status(200).json({
    message: "Success.",
    result: res,
    mamotreto: mamotreto,
  });

}

// DECLARE ENDPOINTS
taller_3_routes.post("/desglosarString", desglosarString_route);
taller_3_routes.post("/twoSum", twoSum_route);
taller_3_routes.post("/conversionRomana", conversionRomana_route);
taller_3_routes.post("/descomposicion", descomposicion_route);

// EXPORT ROUTES
export default taller_3_routes;
