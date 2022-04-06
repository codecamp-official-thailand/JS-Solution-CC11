const user = {};
user.name = 'John'; // { name: 'John' }
user.surname = 'Doe'; // { name: 'John', surname: 'Doe' }
user.name = 'Matt'; // { name: 'Matt', surname: 'Doe' }
delete user.name; // { surname: 'Doe' }