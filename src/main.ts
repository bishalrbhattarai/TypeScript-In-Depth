// let myName = "John Doe";

// let val: unknown;
// val = true as boolean;

// let album: any = "Demo";
// album = 13;

// const sum = (a: number, b: number): number => {
//   return +a + b;
// };

// console.log(sum(2, 4));

// let stringArr = ["one", "two", "three", "four"];

// let guitars = ["start", "les paaul", 5150];

// let test = [];
// let objs: object[] = [{}];

const obj: { name: string; age: number } = {
  name: "John Doe",
  age: 20,
};

obj["age"] = 21;

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let slash = {
  name: "Slash",
  active: false,
  albums: ["guns n roses", "sweet child o'mine", 1880],
};
