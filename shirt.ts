function make_shirt(size: string = "large", message: string = "I Love Typescript the most!") {
    console.log(`The shirt size is ${size}. The message printed on the shirt is: "${message}".`);
  }
  
  // Calling the function with default values.
  make_shirt();
  make_shirt('Medium');
  make_shirt('Small', 'World is for Asad subhani');
  