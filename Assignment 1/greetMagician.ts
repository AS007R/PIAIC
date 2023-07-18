function show_magician(names: string[]) {
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
  }
  
  function make_great(names: string[]) {
    for (let i = 0; i < names.length; i++) {
      names[i] = names[i] + ' the Great';
    }
  }
  
  // Create an array of magician's names
  const magician: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  // Call make_great() to modify the magicianNames array
  make_great(magician);
  
  // Call show_magician() to see the modified list
  show_magician(magician);
  