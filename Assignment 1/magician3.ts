function show_magicians(names: string[]) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

function make_great(names: string[]) {
  const modifiedNames: string[] = [];

  for (let i = 0; i < names.length; i++) {
    modifiedNames.push(names[i] + ' the Great');
  }

  return modifiedNames;
}

// Create an array of magician's names
const newMagicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call make_great() to create a new array with modified newMagicianNames
const modifiednewMagicianNames = make_great([...newMagicianNames]);

// Call show_magicians() to show the original and modified arrays
console.log('Original Magician Names:');
show_magicians(newMagicianNames);

console.log('\nModified Magician Names:');
show_magicians(modifiednewMagicianNames);
