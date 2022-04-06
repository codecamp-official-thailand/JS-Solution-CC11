// Lab 2.18
const users = [{ user: 'Name1' }, { user: 'Name2', age: 2 }, { user: 'Name2' }, { user: 'Name3', age: 4 }];

for (let { user, age = 'Unknown' } of users) {
  console.log(`${user} ${age}`);
}
