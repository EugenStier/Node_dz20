class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound() {
    console.log("The dog barks");
  }
}
const animal: Animal = new Animal("corsa", "rotweiler");
const dog: Dog = new Dog("penta", "uno", "dubl");
animal.sound();
dog.sound();
console.log(animal);
console.log(dog);

// задание 2
class Library {
  static totalBooks: number = 0;
  constructor() {
    Library.totalBooks++;
  }
  static addBook() {
    this.totalBooks++;
  }
}
console.log(Library.totalBooks);
Library.addBook();
console.log(Library.totalBooks);

// задание 3
class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make; // Марка
    this.model = model; // Модель
  }

  getDetails(): string {
    return `Vehicle: ${this.make} ${this.model}`;
  }
}

class Motorcycle extends Vehicle {
  type: string;
  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }

  getDetails(): string {
    return `Motorcycle: ${this.make} ${this.model}, Type: ${this.type}`;
  }
}

const myVehicle = new Vehicle("Toyota", "Corolla");
console.log(myVehicle.getDetails());

const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", "Cruiser");
console.log(myMotorcycle.getDetails());
