// Enunciado

// Dado un array de números y un objetivo (target), encuentra dos índices cuyos valores sumen exactamente ese objetivo.
// Debe retornar los índices, no los valores.

// entrada
// nums = [2, 7, 11, 15]
// target = 9

// analicis
// tenemos en la entrada un arreglo y un numero
// necesitamos conseguir el numero del target itrando el arreglo
// creamos una condicion. si la suma de los numeros iterados es igual al target salir sino seguir iterrando.
// creamos un arreglo vacio para recibir el valor.
// return



const nums = [11, 2, 7, 11, 15];
const target = 9;
let array = [];

const getNumber = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target ) {
                return `el objetivo es ${[i,j]}`
            }
        }
        
    }
}

console.log(getNumber(nums, target))



