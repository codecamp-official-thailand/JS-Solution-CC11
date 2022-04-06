// Lab 4.19

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

function updateTask(id, newName) {
  const idx = tasks.findIndex(function (el) {
    return el.id === id;
  });
  if (idx !== -1) {
    tasks[idx].name = newName;
  }
}

updateTask(2, 'Travelling');
console.log(tasks);