const showMainMenu = require('./lib/showMainMenu');

// Show the user an intro message

// Offer a menu to either show all stored todos or add a todo


function init() {
  console.log('Welcome to the Todo Pro App!\n----------------------------');

  // Show our main menu - options of show all todos or add todo
  showMainMenu();
}

init();