//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printAll(person3) {
    for(let i = 0; i < Object.keys(person3).length;i++) {
        console.log(Object.values(person3)[i])
    }
}

printAll(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;



// Use an arrow to create the printInfo method
    this.printInfo = () => `Hello! My name is ${this.name} and my age is ${this.age}.`;
    
    

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = () => `${this.name} age is now ${this.age+=1}`;

}
let person1 = new Person("Jack", 19)
console.log(person1.printInfo())
console.log(person1.addAge())
console.log(person1.addAge())
console.log(person1.addAge())

let person2 = new Person("Katie", 18)
console.log(person2.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLengthChecker = (s) => {
    return new Promise( (resolve, reject) => {
    if(s.length >10) {
        resolve('Big word')
    }
    else {
        reject('Small Number')
    }
})
}

stringLengthChecker("Gotta get back Back to the Past Samurai Jack")

.then( (result) => {
    console.log(`${result}`)
})

.catch( (error) => {
    console.log(`${error}`)
})
    
stringLengthChecker("Dare ya?")
.then( (result) => {
    console.log(`${result}`)
})

.catch( (error) => {
    console.log(`${error}`)
})