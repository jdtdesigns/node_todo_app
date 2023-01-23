const fs = require('fs').promises;

function clearTodos() {
  return fs.writeFile('./todos.txt', '')
    .then(() => {
      console.log('Todos deleted successfully!\n----------');
    });
}

module.exports = clearTodos;