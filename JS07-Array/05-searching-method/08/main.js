// // Lab 4.20
function deleteTask(id) {
  const idx = tasks.findIndex(function (el) {
    return el.id === id;
  });
  if (idx !== -1) {
    tasks.splice(idx, 1);
  }
}

deleteTask(1);
console.log(tasks);
