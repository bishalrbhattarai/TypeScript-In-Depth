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

// const obj: { name: string; age: number } = {
//   name: "John Doe",
//   age: 20,
// };

// obj["age"] = 21;

// let slash: Guitarist = {
//   name: "Slash",
//   active: false,
//   albums: ["guns n roses", "sweet child o'mine", 1880],
// };

// let jimmy: Guitarist = {
//   name: "Jimmy",
//   albums: ["I", "II", "III"],
// };

// jimmy = slash;

// working with functions

// type Guitarist = {
//   name?: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

// const greetGuitarists = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name}, nice to meet You`;
// };
// const arg1 = {
//   name: "John Doe",
//   active: true,
//   albums: [1, 2, 3],
//   noOfAlbums: 3,
// };

// console.log(greetGuitarists(arg1));

// enum Grade {
//   U = "user",
//   A = "admin",
//   S = "superadmin",
// }
// console.log(Grade.U);

// type Guitarist = {
//   name: string;
//   active: boolean;
//   albums: (string | number)[];
// };

// functions :

const add = (a: number, b: number): number => {
  return a + b;
};

const logMessage = <T>(message: T): T => {
  return message;
};
