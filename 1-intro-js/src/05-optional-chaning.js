const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id:2,
        name:'Pablo',
        lastname: 'Padilla',
        age: 20,
    },
    items:[
        {
            producto: 'keyboard',
            price:399,
            quantity: 2,
        },
        {
            producto: 'mouse',
            price:200,
            quantity: 1,
        },
        {
            producto: 'paper',
            price: 100,
            quantity: 10,
        },
    ],

    total: function (){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
    greeting: function() {
        return `${this.client.name}`;
    }
};

//el operador opcional con el signo de pregunta
//ayuda a preguntar si existe el dato en cuestion
//y en caso de que no solo coloca un undefined
//pero no salta un error fatal
console.log(invoice.company?.name);
console.log(invoice.client?.name);
//la linea de codigo numero 45 es lo mismo que la 46 pero abreviado
// if(invoice.company != undefined && invoice.company.name){
if(invoice.company?.name){
    console.log('perfecto');
}else{
    console.log('no viene la empresa');
}