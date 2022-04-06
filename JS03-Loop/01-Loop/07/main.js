


// let str = '';
// for (let i = 2; i <= 12; i++) {
//   for (let j = 1; j <= 12; j++) {
//     str += `${i} x ${j} = ${i * j}\n`;
//   }
//   str += '\n';
// }
// console.log(str);

let i = 2
let j = 1
let result = ""
let k = 1;

while ( i < 12 && j < 12)
{
  result += `${i} x ${j} = ${i*j} : ${k}\n`

  if(j == 12)
   {
      j = 1;
      i += 1;
  }
  else if(j < 12){
    j++;
      continue
  }
}

console.log(result)
