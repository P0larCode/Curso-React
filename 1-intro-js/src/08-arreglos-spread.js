

const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.concat('pantalla lcd', 'sony tv');

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

// Los 3 puntos ... son un operador que se utiliza para descomponer 
//los elementos de los arreglos y agregarlos a una nueva matriz
//(hacer el intento de quitar y poner los puntos para ver la diferencia)
//se puede usar el operador concat pero esta es una alternativa mas limpia

//despues de todo se pueden seguir agregando elementos
const mercado = [...fruits, ...products, 'lechuga', 'papas', 'uvas'];


console.log (products);
console.log (mercado);