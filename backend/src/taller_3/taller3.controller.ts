import { desglosarString, twoSum, conversionRomana, descomposicion } from "./taller3.actions";
import { Romana } from './types';

// DECLARE CONTROLLER FUNCTIONS
async function desglosarString_controller(palabra: string, tipo: string): Promise<number | string>{
  const res = await desglosarString(palabra, tipo);

  return res;
}

async function twoSum_controller(lista: number[], num:number): Promise<number[] | string> {
  const res = await twoSum(lista, num);

  return res;
}

async function descomposicion_controller(mamotretoPAL: string): Promise<string[]> {
  const res = await descomposicion(mamotretoPAL);

  return res;
}

async function conversionRomana_controller(roman: Romana): Promise<number> {
  const res = await conversionRomana(roman);

  return res;
}

// EXPORT CONTROLLER FUNCTIONS
export { desglosarString_controller, twoSum_controller, conversionRomana_controller, descomposicion_controller };
