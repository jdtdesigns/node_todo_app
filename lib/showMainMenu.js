const inquirer = require('inquirer');
const showAllTodos = require('./actions/showAllTodos');
const showAddMenu = require('./actions/showAddMenu');
const clearTodos = require('./actions/clearTodos');

function showMainMenu() {
  // Show a prompt with 2 choices - Show all todos / add a todo
  inquirer.prompt({
    type: 'list',
    name: 'option',
    message: 'Please select an option.',
    choices: [
      {
        name: 'Show all Todos',
        value: 'show'
      },
      {
        name: 'Add a Todo',
        value: 'add'
      },
      {
        name: 'Clear Todos',
        value: 'clear'
      },
      {
        name: 'Exit the application.',
        value: 'exit'
      }
    ]
  }).then(choice => {
    // Call a function based on their choice
    switch (choice.option) {
      case 'show':
        showAllTodos()
          // Call main menu again to show the menu after displaying todos
          .then(showMainMenu);
        break;
      case 'add':
        showAddMenu()
          // Call main menu again to show the menu after displaying todos
          .then(showMainMenu);
        break;
      case 'clear':
        clearTodos()
          .then(showMainMenu);
        break;
      default:
        console.log('Thanks for using the Todo Pro App!');
        process.exit();
    }
  })
}

module.exports = showMainMenu;