let myName = "John Doe";

let val: unknown;
val = true as boolean;

let album: any = "Demo";
album = 13;

const sum = (a: number, b: number): number => {
  return +a + b;
};

console.log(sum(2, 4));