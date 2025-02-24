//para desestructurar el arreglo se hace lo siguiente

const user = {
    username: 'Fabian',
    email: 'correo@google.com',
    age: '23',
    ranking: 9,
};

//se crea la funcion sin usar la palabra function sino 
//haciendo uso de la funcion de flecha
const detail = (user) => {
    const {username, email} = user;
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}
//se llama a la funcion detail que es la que realiza toda la accion de
//desestructurar e imprimir en consola el arreglo
detail(user)

//___________________________________________________________________________

// otra forma de hacerlos ahorrando una linea de codigo es la siguiente:
const detail2 = ( user ) => {
    console.log(`El detalle del usuario ${user.username} con correo ${user.email}`);
}

detail2(user)