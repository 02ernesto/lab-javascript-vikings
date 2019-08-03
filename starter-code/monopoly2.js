/*
//Ejemplo de un juego muy simple de Monopoly
let squares = [100, -1,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10];

// creación de la clase

class Player {
    //El constructor es el metodo con la palabra reservada "new"
    constructor (name,color){
        this.name = name;
        this.color= color;
        this.position = 0;
        this.cash = 40; 
    }
    //MEtodo Mover
    move(){
        let dice = 1+Math.floor(6*Math.random());
        this.position =(this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash < 0) {
            console.log("Perdiste " + this.name);
        }
    }
    //Información de como quedo el juego
    displayInfo () {
        console.log(this.name + " Estas en la posición " + this.position + " Y tines $" +this.cash);
    }
}

// Inicializando Jugadores
let player1 = new Player("Joaquin", "Red");
let player2 = new Player("MAxcence", "blue");
let player3 = new Player("Mostafa", "black");
// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

*/
// segundo ejemplo con extends

class Animal {
    constructor(name,maincolor,sound) {
        this.name = name;
        this.maincolor = maincolor;
        this.sound = sound;
    }
    scream(intensity) {
        console.log (`${this.sound} ${'!'.repeat(intensity)}`);
    }
}
//
// La clase Cat tiene, por defecto, todos los mismos atributos y métodos que Animal pero tendrá algunos que solo pertenecen al gato
class Cat extends Animal {
    constructor(name,maincolor,sound,nbOfLegs) {

// `super` se refiere al constructor del padre (Animal)
// con super Cat obtiene todos los atributos y métodos de la clase Animal
   super(name,maincolor,sound);
   this.nbOfLegs = this.nbOfLegs; // Un nuevo atributo        
    }
}
const garfield = new Cat("Garfield", "orange"," Meow",4);
console.log(garfield);
// {
//   name: 'Garfield',
//   mainColor: 'orange',
//   sound: 'Meow',
//   nbOfLegs: 4
// }
garfield.scream(2); // <== Meow !!
garfield.scream(5); // <== Meow !!!!!

// SEgundo Ejemplo
class Chamelon extends Animal {
    //Anulación del constructor predeterminado
    constructor(name){
        super(name, "green", "....");
    }
    changeColor(newColor) {
        this.maincolor = newColor
    }
}
const pascal = new Chameleon('Pascal')
pascal.changeColor('red');
console.log(pascal);
// {
//   name: 'Pascal',
//   mainColor: 'red', <== notice the difference
//   sound: '...' 
// }