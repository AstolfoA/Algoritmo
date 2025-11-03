// concatenar un array

let integrado = [
  [0, 1],
  [2, 3],
  [4, 5],
];

let newArray = [].concat(...integrado);


// integrado.reduce((a, b) => {
    // return a.concat(b);

// });

console.log(newArray);
