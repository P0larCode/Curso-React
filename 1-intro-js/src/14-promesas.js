//las promesas se utilizan mucho en el
//consumo de apis ya que siempre puede existir algo de 
//retrazo en medio de la comunicacion y puede que se cumpla o no,
//y en medio de la comunicacion pueden pasar muchas cosas
//las promesas son asicncronas, ya que se se ejecutan en un
//espacio distinto a la situacion real

import  {findInvoiceById} from './data/invoices.js';

// const promise = new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//         const result = invoiceById (2);
//         if(result){
//             resolve (result);
//         }else{
//             reject('Error no existe la factura por el id');
//         }
//         resolve(result);
//     }, 2500);
// });

//estructura de una promesa
// promise.then((result) => {
//     console.log(JSON);
//     console.log('Realizada con exito alguna tarea con demora.');
// }).catch((error) => {
//     console.error(error);
// });

findInvoiceById (1)
    .then(console.log)
    .catch(console.error);

//se puede abreviar lo de arriba de la siguiente manera
// promise
//     .then(console.log)
//     .then (console.error);

