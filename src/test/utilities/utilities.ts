import { waitFor } from "@testing-library/react";

/*
This function is used to test that a given callable (a function or an async function) 
never resolves. It uses the expect and waitFor functions from Jest to check that the 
callable does not resolve. 
To use it, simply pass in the callable as an argument and await the result of expectNever.
*/

export async function expectNever(callable: () => unknown): Promise<void> {
  await expect(() => waitFor(callable)).rejects.toEqual(expect.anything());
}
