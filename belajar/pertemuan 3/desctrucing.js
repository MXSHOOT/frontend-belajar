/**
Membuat object of object
 */

const req = {
    body: {
        name: "Faris",
        age: 21,
        major: "Informatics",
    },
};

//Melakukan Destructing Object
const {name,age,major} = req.body;

console.log(name,age,major);

// Destructing array

const familiy = ["Mikel","Hannah","Jonas"];

const [husband,wife,son] = familiy;

console.log(husband,wife,son);