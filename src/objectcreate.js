let animal = {
  eats: true,
};

const newAnimal = Object.create(animal);

newAnimal.eats = false;
console.log(animal.eats);

console.log(newAnimal.eats);
