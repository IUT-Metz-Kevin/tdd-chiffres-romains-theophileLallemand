import { test, expect } from 'vitest';

class RomanNumeral {
  private symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  private isLowerThan(romanianToTest: string, higherRomanian: string) {
    return this.symbolMap[romanianToTest] < this.symbolMap[higherRomanian];
  }

  private valueOf(romanian: string) {
    return this.symbolMap[romanian];
  }

  of(value: string): number {
    let index = 0;
    let resultat = 0;
    while (value[index]) {
      const romanianChar = value[index];
      const nextRomanianChar = value[index + 1];

      if (this.isLowerThan(romanianChar, nextRomanianChar)) {
        resultat += this.valueOf(nextRomanianChar) - this.valueOf(romanianChar);
        index += 2;
      } else if (this.valueOf(romanianChar)) {
        resultat += this.valueOf(romanianChar);
        index += 1;
      } else throw new Error('Not a Romanian number');
    }

    return resultat;
  }
}

test.each([
  ['I', 1],
  ['II', 2],
  ['III', 3],
  ['V', 5],
  ['VI', 6],
  ['VII', 7],
  ['VIII', 8],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
  ['IV', 4],
  ['IX', 9],
  ['CM', 900],
])('%s should become %s', (input, expected) => {
  expect(new RomanNumeral().of(input)).toBe(expected);
});
