// Lab 2.7
let guest = 'Jane';
let admin = 'Pete';
let dummy = guest;
guest = admin;
admin = dummy;

[guest, admin] = [admin, guest];
console.log(guest);
console.log(admin);