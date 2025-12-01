# Anotações de tipo e inferência

O typescript ofereçe duas maneiras de trabalhar com tipos:

1. **Tipagem explícita**: Você declara explicitamente o tipo
de uma variável
2. **Enferência de tipo**: O typescript determina automaticamente
o tipo com base no valor atribuído

## Quando usar cada abordagem?
- Use **Tipos explícitos** para:
    - Parêmetros de função e tipos de retorno
    - Literais de objeto
    - Quando o valor inicial pode não ser o tipo final
- Use a **inferência de tipo** para:
    - Declarações de variáveis simples com atribuição imediata
    - Quando o tipo é óbvio pelo contexto

## Anotações de tipo explícitas
A tipagem explícita significa que você determina ao Typescript
exatamente qual deve ser o tipo de uma variável

Tipos explícitos básicos:
```ts
// String
const greeting: string = "Hello, Typescript!";

// Number
const userCount: number = 42;

// Boolean
const isLoading: boolean = true;

// Array of numbers
const scrores: number[] = [100, 95, 98]
```

Use tipos explícitos para:
- Parâmetros de função
- Tipos de retorno 

Assim você vai tornar seu código mais fácil de manter
e autoexplicativo.

## Exemplo de funções com tipos explícitos
```ts
const greet(name: string): string {
    return `Hello, ${name}!`;
}

greet('alice'); // OK
greet(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'
```

# Inferência de tipo
O Typescript pode determinar (inferir) automaticamente o tipo de
uma variável com base em seu valor inicial:

## Inferência básica
```ts
// Infers 'string'
const username = 'Alice';

// Infers 'number'
const score = 100;

// Infers 'boolean[]'
const flags = [true, false, true];

// Infers return type as 'number'
function add (a: number, b: number) {
    return a + b;
}
```

**Observação:** A inferência de tipos funciona melhor quando
as variáveis são iniciadas na declaração.

Exemplo:
```ts
// Iniciada na declaração
let username = 'Fernando';

// Não iniciada na declaração (por padrão recebe o type any)
let age;
```

Por padrão variáveis não iniciadas têm o tipo 'any', a menos
que você configure em seu tsconfig.json usando strictNullchecks.

## Quando a inferência brilha
Inferência de literal de objeto
```ts
// infers the shape of the object
const user = {
    name: 'Alice',
    age: 30,
    isAdmin: true
};

// Typescript knows these properties exist
console.log(user.name); // OK
console.log(user.email); // Error: Property 'email' does not exist
```

**Atenção:** Embora a inferência de tipos seja conveniente, ser 
explícito com os tipos ode tornar seu código mais fácil de manter,
especialmente em bases de código maiores ou APIs públicas.

## Segurança de digitação em ação
uma das principais vantagens do typescript é a detecção de erros
relacionados a tipos durante o desenvolvimento.

Vamos analisar como o typescript ajuda a evitar erros comuns.

## Erros de incompatibilidade de tipo

