function show_magicians(names: string[]) {
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
  }
  
  // Create an array of magician's names
  const magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  // Call the function to show the magicians
  show_magicians(magicianNames);
  