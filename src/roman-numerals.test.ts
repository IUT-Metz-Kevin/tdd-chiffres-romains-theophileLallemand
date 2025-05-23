import { expect, test } from "vitest";

class RomanNumeral {
  of(value: string): number {
    
  }
}


test.each([
    ["I", 1],
])("%s should give %s", (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});

// Write your test here
