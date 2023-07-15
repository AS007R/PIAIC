const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

console.log("Animals:");
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(animal);
}
console.log("\nAnimal Statements:");
for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  

  if (animal === 'Dog') {
    console.log("A dog would make a great companion and is known for their loyalty.");
  } else if (animal === 'Cat') {
    console.log("A cat can be independent yet affectionate, making them wonderful pets.");
  } else if (animal === 'Rabbit') {
    console.log("Rabbits are cute and social animals that can bring joy to your home.");
  }

}

console.log("\nThese animals can bring happiness and companionship to your life!");
