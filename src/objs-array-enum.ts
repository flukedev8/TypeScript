// Object types
const person: {
    name:string ;
    age: number ;
    hobbies: string[]; 
    role: [number, string];
} = {
    name:'Fluke dev',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

//Array Typs
let exampleArray : string[];
exampleArray = ['Spots', 'Car']

let exampleArrayAny : any[];
exampleArrayAny = ['Spots', 'Car', 0 , true ]

console.log(person.name);

for (let hobby = 0; hobby < person.hobbies.length; hobby++) {
    console.log(person.hobbies[hobby]);
}

//Tuples
person.role = [0, 'admin'];

//Enum Types
enum Role { ADMIN, READ_ONLY, AUTHOR };

const personUser: {
    name:string ;
    age: number ;
    hobbies: string[]; 
    role: Role;
} = {
    name:'Fluke dev',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

if (personUser.role === Role.ADMIN) {
    console.log('Is Admin');
    
}


