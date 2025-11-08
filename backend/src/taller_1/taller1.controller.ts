import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from "./taller1.actions";

// DECLARE CONTROLLER FUNCTIONS
async function convertidorTemp_controller(c: number): Promise<number> {
  const temp = await convertidorTemp(c);

  return temp;
}

async function resolvedor_controller(a:number, b: number, c: number, sig: number): Promise<number | string> {
  const res = await resolvedor(a, b, c, sig);

  return res;
}

async function mejorParidad_controller(num: number): Promise<boolean> {
  const res = await mejorParidad(num);

  return res;
}

async function peorParidad_controller(num: number): Promise<boolean | string> {
  const res = await peorParidad(num);

  return res;
}

// EXPORT CONTROLLER FUNCTIONS
export { convertidorTemp_controller, resolvedor_controller, mejorParidad_controller, peorParidad_controller };
