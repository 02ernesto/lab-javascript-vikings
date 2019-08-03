// Soldier
class Soldier { //SE cxrea el soldado
    constructor(healthArg, strengthArg) {// se le da atributos por medio de un constructor fuerza y salud
      this.health = healthArg; //se declara que salud es igual a salud, para poder utilizar el constru
      this.strength = strengthArg; // Se declara fuerza = fuerza para utilizar el constructor despues
    }
    attack() {
      return this.strength;  //la funcion ataque regresa fuerza
    }
    receiveDamage(damage) { // jala la propiedad salud del objeto padre
      this.health -= damage;
    }
  }
  
  // Viking
  class Viking extends Soldier { // se crea Soldado aparir de vikingo (interencia)
    constructor(name, health, strength) { // se hace un constructor con nombre, salud y fuerza
      super(health, strength);  //llama la propiedad del padre (soldier)
      this.name = name; //nombre = a nombre para utilizar el constructor
    }
  
    receiveDamage(damage) { // se crea el objeto Daño, donde salud se le resta daño
      this.health -= damage;
      let res = `${this.name} has died in act of combat`; // muere el jugador
      if (this.health > 0) // si salud llega a 0
        res = `${this.name} has received ${damage} points of damage`; // mientras no llegue a 0 muestra el daño
      return res;
    }
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  
  // Saxon
  class Saxon extends Soldier { // otra desendencia de soldado
    constructor(health, strength) { // se declara salud y fuerza
      super(health, strength); // se obtienen las propiedades del padre
    }
  
    attack() {
      return super.attack(); // se ejecuta la funcion ataque
    }
    receiveDamage(dmg) { // se vuelve a utilizar la funcion daño, pero para peleador SAxon 
      super.receiveDamage(dmg);
      let res = `A Saxon has died in combat`;
      if (this.health > 0) res = `A Saxon has received ${dmg} points of damage`;
      return res;
    }
  }
  
  // War Se realiza la batalla creando metodos y creando peleadores o quitando
  class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
    vikingAttack() {
      if (this.vikingArmy.length < 1) return;
      if (this.saxonArmy.length < 1) return;
      let vik = this.vikingArmy.pop();
      let sax = this.saxonArmy.pop();
      let res = sax.receiveDamage(vik.strength);
      if (sax.health > 0) this.saxonArmy.push(sax);
      this.vikingArmy.push(vik);
      return res;
    }
    saxonAttack() {
      if (this.vikingArmy.length < 1) return;
      if (this.saxonArmy.length < 1) return;
      let vik = this.vikingArmy.pop();
      let sax = this.saxonArmy.pop();
      let res = vik.receiveDamage(sax.strength);
      this.saxonArmy.push(sax);
      if (vik.health > 0) this.vikingArmy.push(vik);
      return res;
    }
    showStatus() {
      if (this.saxonArmy.length < 1)
        return "Vikings have won the war of the century!";
      if (this.vikingArmy.length < 1)
        return "Saxons have fought for their lives and survive another day...";
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }// gana quien tenga mas peleadores vivos 