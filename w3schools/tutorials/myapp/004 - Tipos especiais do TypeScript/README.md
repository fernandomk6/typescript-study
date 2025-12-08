# Tipos especiais do TypeScript

Esses tipos são usados ​​em diversos cenários para lidar com casos em que o tipo
pode não ser conhecido antecipadamente.

## Type `any`

Instrui o compilador a ignorar a verificação de tipo para uma determinada
variável.

## Tipo `unknown`

As variáveis do tipo `unknown`, antes de serem usadas, precisam de algum tipo
de verificação de tipo.

Exige verificação de tipo.

É a forma segura de dizer "isto pode ser qualquer coisa, portanto você deve
realizar algum tipo de verificação antes de usá-lo".

Diferenças entre `unknown` e `any`:
- `unknown` deve ser verificado o tipo antes do uso
- Não é possível acessar propriedades de `unknown` sem uma asserção de tipo
    - Asserção de tipo é quando você está informando o tipo, não mudando o
    valor.
- Você não pode chamar ou construir valores do tipo `unknown`

Exemplo:

```js
let w: unknown = 1;
// unknown permite alterar o valor, mas impede o uso sem verificação ou 
// asserção
w = "string"; // no error

w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void }

// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.

// Precisa da verificação
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
```

Dica para uso de asserções:
Sempre que fizer uma asserção de um tipo unknown, atribua a variável tipada
a outra variável. Lembre-se do princípio da imutabilidade.
```js
let valor: unknown = "Olá";

const texto = valor as string; // ✔️ só aqui

console.log(texto.toUpperCase());
console.log(texto.length);
```

**Aprenda a diferença entre `is` e `as` em typescript**

