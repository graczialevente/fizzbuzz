export function convertNumber(value: number): string {
  let output = "";

  if (value === 0) {
    /** only for completeness */
    throw new Error("That situation is pointless when you wanna convert 0");
  }

  if (value % 3 === 0) {
    output += "Fizz";
  }

  if (value % 5 === 0) {
    output += "Buzz";
  }

  return output || String(value);
}
