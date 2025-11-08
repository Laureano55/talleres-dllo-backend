import { findMax, includes, sum, missingNumbers } from "./taller2.actions";

// DECLARE CONTROLLER FUNCTIONS
async function findMax_controller(numbers: number[]): Promise<number> {
  const max = await findMax(numbers);

  return max;
}

async function includes_controller(numbers: number[], a_encontrar: number): Promise<boolean> {
  const res = await includes(numbers, a_encontrar);

  return res;
}

async function sum_controller(numbers: number[]): Promise<number> {
  const res = await sum(numbers);

  return res;
}

async function missingNumbers_controller(numbers: number[]): Promise<number[]> {
  const res = await missingNumbers(numbers);

  return res;
}

// EXPORT CONTROLLER FUNCTIONS
export { findMax_controller, includes_controller, sum_controller, missingNumbers_controller };
