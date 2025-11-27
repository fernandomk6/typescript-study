# TypeScript Simple Types

## Primitive types in typescript

All primitive types
- Boolean
- Number
- String
- Null
- Undefined

---
### Exemples

1. Boolean

Representa valores verdadeiros ou falsos
```ts
const isActive: boolean = true;
const hasPermission: boolean = false;
```

2. Numbers
```ts
const decimal: number = 2.5;
const hexadecimal: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const float: number = 3.14;
```

3. Strings

Valores de texto
```ts
const myName: string = 'Fernando';
const myCarColor = "Blue";
const message = `Hi! My name is ${myName} and i have a ${myCarColor} car!`
```

3. BigInt
Representa números inteiros muito grandes
```ts
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Sintaxe alternativa
```

4. Symbols
Cria identificadores únicos
```ts
const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
}

console.log(obj[uniqueKey]); // 'This is a unique property'
```