// realizar una funcion que nos permita realizar las 4 operaciones aritmeticas, la funcion debe recibir tres parametro (a, b) y uno con el nombre de la operacion (en minusculas). si el parametro de la operacion no esvalido que mande un error personalizado.

const operAritmetica = (operacion, a = 0 ,b = 0) => {
    switch (operacion) {
        case "suma": a + b;
        break;

        case 'resta': a - b;
        break;
        
        case 'multiolicacion': a * b;
        break;

        case 'division': a / b;
        break;

        default: `esta operacion ${operacion} no es valida!!`;
    }
    console.log(nums);
}
operAritmetica(suma, 1 , 20)