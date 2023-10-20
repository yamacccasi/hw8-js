/* 
const obje = { a: 1, b: 2 }; */

const arr = ["a", "b", "c"];

arr[10] = "3456";
console.log(arr);
const arrObj = {
  0: "a",
  1: "b",
  2: "c",
  abc: {
    df: [{}, {}],
    def: {},
  },
};

const b = "b";

//arrObj.b = "1234";
arrObj[b] = 1234;
console.log(arrObj.b);

const obj = {
  Anna: 500,
  Alice: 800,
};

// масивы - частный случай обьектов, в массивах клюич всегда фиксированный
