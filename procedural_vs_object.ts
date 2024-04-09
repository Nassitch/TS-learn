class Personne {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName(): string {
    return `I am ${this.name}.`;
  }

  tellMyAge(): string {
    return `I am ${this.age} years old.`;
  }
}

const personne10 = new Personne("John", 40);
const personne20 = new Personne("Marie", 35);

console.log(personne10.tellMyName(), personne10.tellMyAge());
console.log(personne20.tellMyName(), personne20.tellMyAge());
