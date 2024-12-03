"use strict";
// let myName = "John Doe";
const greetGuitarists = (guitarist) => {
    return `Hello ${guitarist.name}, nice to meet You`;
};
const arg1 = {
    name: "John Doe",
    active: true,
    albums: [1, 2, 3],
    noOfAlbums: 3,
};
console.log(greetGuitarists(arg1));
