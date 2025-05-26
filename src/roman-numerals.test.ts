import { expect, test } from "vitest";

class RomanNumeral {
  of(value: string): number {
    if(value === "I") return 1
    else if(value === "II") return 2
    else return 0
  }
}

test.each([
    ["I", 1],
    ["II", 2]
])("%s should give %s", (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});

// Write your test here
