const myName: unknown = 'Fernando';
const myNameAssertion = myName as number;

// console.log(myNameAssertion.toUppercase()); // Property 'toUppercase' does not exist on type 'number'.

// Não gera erro por que você pediu para o typescript confiar em você, que a variável seria do tipo
// 'number', então, ele confia e não gera erro
console.log(myNameAssertion.toFixed(2));