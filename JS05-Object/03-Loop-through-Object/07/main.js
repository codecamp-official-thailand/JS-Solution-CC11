
const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

const input = prompt('Enter name');
let showText = 'Not Found';
if (employees[input] !== undefined) {
  showText = `Name: ${input}, salary: ${employees[input].salary},
  address: ${employees[input].address.district},  ${employees[input].address.province}`;
}
console.log(showText);