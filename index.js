const person = {
    name: 'shakil',
    age: 24,
    love: function (name){
        console.log(person.name + ' loves ' + name);
    }
}

// dot notation
console.log(person.name);

// bracket notation
console.log(person['age']); 

// new keyword the variable create as an object.. new Number, new String , new Number 
let x = "shakil"; // literal syntax 
let y = new String("shakil");
console.log(y) // typeof object
console.log(y.length);

Boolean

