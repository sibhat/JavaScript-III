/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When this is called on a function without bind or call, the keyword is referencing to window object.
* 2. With Implicite bind, this keyword reference to the "nearst" object it has. 
* 3. With Explicite bind, this keyword can be bind to any function it is bind to. 
* 4. With new bind rule, when we use new keyword on function constractor, behind the scene, new keyword create this object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function example(){
    console.log('exampe to window binging'+ this.name);
}

// Principle 2
// code example for Implicit Binding
let vehicle = {
    type: 'car',
    wheels: 4,
    engine: '6cyl',
    honk: function(){
        return `${this.type} is honking`;
    }
}
vehicle.honk();


// Principle 3
// code example for New Binding
const Student = function (name, age, id ){
    this.name = name;
    this.age = age;
    this.id = id;
    this.info = function(){
        return `${this.name} is ${this.age} years old, with id number: ${this.id}`;
    }
}
let sibhat = new Student('sibhat', 27, 1);
console.log(sibhat.info())

// Principle 4
// code example for Explicit Binding
function sayname (){
    return `my name is ${this.name}`;
}
let example2 = {
    name: 'sibhat',
    age: 27
}
console.log(sayname.call(example2))