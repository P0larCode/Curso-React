const sayhello = (name = 'Lore', age = 0) => `hola mundo function ${name} edad ${age}`;
const add = (a = 0, b = 0) => a + b;

const result = sayhello ('Juan', 10);

console.log(result);
console.log(add(10, 5));