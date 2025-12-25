// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsidetemp=null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

// const bigNumber = 12365478987456321n



// Reference (Non Premitive)

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
