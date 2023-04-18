console.log("Hello");
const casual = require('casual'); // importuoja sita faila/folderi
console.log(casual.city); //grazina random miesto pavadinima

console.log(casual.integer((from =1), (to =10)));

const name = `${casual.name_prefix} ${casual.first_name} ${casual.last_name}`;
console.log(name);