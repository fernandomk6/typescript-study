# TypeScript Simple Types

## Primitive types in typescript

All primitive types
- string: Texto
- number: Números
- boolean: Verdadeiro ou falso
- null: Vazio intencional
- undefined: Valor não definido
- bigint: Inteiros gigantes
- symbol: Valor único
- void: Sem retorno
- never: Nunca ocorre
- any: Desativa tipagem (Evite)
- unknown: Tipo desconhecido (seguro)

## Dica profissional

Sempre prefira:
✅ unknown ao invés de any
✅ Tipagem explícita
✅ Verificações de tipo (typeof, instanceof)
❌ Evitar any

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

4. BigInt
Representa números inteiros muito grandes
```ts
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Sintaxe alternativa
```

5. Symbols
Cria identificadores únicos
```ts
const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
}

console.log(obj[uniqueKey]); // 'This is a unique property'
```

6. Void
```ts
function logar(): void {
  console.log("Logando...");
}
```

7. Never
```ts
function erroFatal(): never {
  throw new Error("Erro");
}
```

8. Any
⚠️ Uso: deve ser evitado. Desativa o TypeScript.
```ts
let variavel: any = 10;
variavel = "texto";
variavel = true;
```

9. Unknown
⚠️ Uso: mais seguro que any. Requer verificação de tipo.
Uso: quando você não sabe o tipo ainda, mas quer segurança.
```ts
let valorDesconhecido: unknown = 10;
valorDesconhecido = "texto";
```

10. Undefined
```ts
let indefinido: undefined = undefined;
```

11. Null
```ts
let nulo: null = null;
```
