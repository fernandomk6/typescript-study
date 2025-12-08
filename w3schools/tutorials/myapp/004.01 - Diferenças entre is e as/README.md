# Diferenças entre is e as 

## AS

Usado para asserções apenas.
Diz ao typescript qual o tipo da variável naquele momento.
Você diz qual o tipo ela é.
Deve ser usado apenas para variáveis do tipo unknown.

Exemplos:
```js
const data: unknown = '{ "name": "Fernando", "age": 35 }'
const person: object = JSON.parse(data as string) as { name: string, age: number }
console.log(person.name)

// Asserção não muda o valor
// Só funciona quando o tipo da match
```