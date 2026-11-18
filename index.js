//RESUELVE LOS EJERCICIOS AQUI
/*
[ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que sea el resultado de elevar cada número a si mismo. 
*/
const numbers = [4, 5, 6, 7, 8, 9, 10]
const elevados =() => {
    return numbers.map(num => num ** num);
}


/*
- [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
```
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
*/

const foodList =['Pizza', 'Ramen', 'Paella', 'Entrecot']
const result2 = foodList.map ((element)=>{
    if(element === "Pizza"){
        return `Como soy de Italia, amo comer ${element}`
    }
    if(element === "Ramen"){
        return `Como soy de Japón, amo comer ${element}`
    }
    if(element === "Paella"){
        return `Como soy de Valencia, amo comer ${element}`
    }
    if(element === "Entrecot"){
        return `Aunque no como carne, el ${element} es sabroso`
    }
})

/*
    Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
*/
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];
/*
// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

const result3 = staff.map ((persona)=>{
        return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`   
})

/*
4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter((num)=>{
    if(num % 2 != 0){
        return num
    }
})

/*


    5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!']
*/


const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

const result5 = [];

foodList2.filter((food) => {
    if (food.isVeggie) {
        if (food.name.includes("burguer")) {
            result5.push(`Que rica ${food.name} me voy a comer!`);
        } else {
            result5.push(`Que rico ${food.name} me voy a comer!`);
        }
    }
});

/*
    Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

*/
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
/*
  [
    'TV Samsung',
    'Viaje a Cancún'
  ]
*/
const result6 = []
inventory.foreach ((producto)=>{
  if (producto.price > 300) result6.push(producto.name)
})