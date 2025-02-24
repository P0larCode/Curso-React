
const  httpCLient = fetch ('https://jsonplaceholder.typicode.com/users');

// httpCLient.then (response => {
//     // console.log(response)
//     response.json().then(data => {
//         console.log(data)
//     })
// });


httpCLient
    .then (response => response.json())
    .then (data => console.log (data));

console.log('hola mundo');


