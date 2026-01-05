// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt (Immutable)

const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsidetemp=null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

// const bigNumber = 12365478987456321n



// Reference (Non Premitive) (mutable)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "Prasad",
    age: 23,
}

const myFunction = function() { 
    console.log("hello");
}

console.log(typeof myObj);





//***************************************** */

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "prasadpalled"

let anothername = myYoutubename
anothername = "prasad"

console.log(anothername);
console.log(myYoutubename);

let user1 = {
    email : "user@gmail.com",
    age : 23
}

let user2 = user1

user2.email = "user2@gamil.com"

console.log(user1.email);
console.log(user2.email);


