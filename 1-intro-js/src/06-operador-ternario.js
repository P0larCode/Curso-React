const average = 5.9;
let status2 = '';
// status2 = ( average >= 5.5) ? 'Aprobado' : 'Rechazado';

if (average >= 5.5){
    status2 = 'Aprovado';
}else{
    status2 = 'Rechazado';
}

console.log (`Resultado: ${status2}`);

// se puede recurrir al if convencional pero una forma abreviada
// a la que podemos recurrir es usar el operador ternario 
// de la siguiente manera:

//este codigo realiza la comparatoria para ver que numero es mayor

//se definen las variables, max es el inicio del contador, por eso se inicializa en 0
let max = 0;
//las constantes se definen de esta forma solo para ejemplificar
const a = 5;
const b = 8;
const c = 12;

// la linea de codigo dice que max es igual a la operacion del if y dice lo siguiente
//¿a es mayor que b?, si la respuesta es si entonces a es mayor que b :(sino) es b mayor que a 
max = a > b ? a : b;
//al haber un 3er valor se tiene que evaluar nuevamente pero esta vez con respecto a c
//¿max es mayor que c?, si la respuesta es si entonces max es mayor que c :(sino) es c mayor que max
max = max > c ? max : c;

// finalente se imprime en consola un mensaje de que nos dice que numero es mayor y concatena 
// la variable para mostrar el resultado
console.log (`El numero mayor es ${max}`);
