# Verificação de tipo de arquivos JavaScript

[doc](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)

## Validações de tipo em classes
```javascript
class C {
  constructor() {
    this.constructorOnly = 0;
    this.constructorUnknown = undefined;
  }
  method() {
    this.constructorOnly = false;
Type 'boolean' is not assignable to type 'number'.
    this.constructorUnknown = "plunkbat"; // ok, constructorUnknown is string | undefined
    this.methodOnly = "ok"; // ok, but methodOnly could also be undefined
  }
  method2() {
    this.methodOnly = true; // also, ok, methodOnly's type is string | boolean | undefined
  }
}
```

Perceba que o tipo de cada propriedade definida no construtor, precisa ser preservado.
Propriedades defindas nos métodos getters e setters, podem ter qualquer valor, visto 
que esses propriedades, por não serem iniciadas no construtor, são desconhecidas para
o objeto instancia da classe, portanto, pode ter qualquer tipo. Porém, depois
de atribuido um tipo para uma propriedade, o mesmo tipo deve ser mantido no decorrer
da execução do código.

A mesma validação de tipos também funciona para funções construtoras.
```javascript
class C {
  constructor() {
    /** @type {number | undefined} */
    this.prop = undefined;
    /** @type {number | undefined} */
    this.count;
  }
}
 
let c = new C();
c.prop = 0; // OK
c.count = "string";
Type 'string' is not assignable to type 'number'.
```

## Módulos CommonJS são suportados

Em javascript e em type script podemos usar os mesmos métodos de import e export, sem nenhum
tipo de problema.
```typescript
// same as `import module "fs"`
const fs = require("fs");
// same as `export function readFile`
module.exports.readFile = function (f) {
  return fs.readFileSync(f);
};
```

## Modificando literais de objetos
Em typescript, objetos literais não podem ter métodos ou propriedades atribuídos a ele
que não esteja na sua declaração literal.

```typescript
/** @type {{a: number}} */
var obj = { a: 1 };
obj.b = 2;
Property 'b' does not exist on type '{ a: number; }'.
```

## Vinicializadores de array nulos, indefinidos e vazios são do tipo any ou any[]
Qualquer variável inicializada com null ou undefined, terá o tipo any ou any[].
Qualquer variável inicializada com [] terá o valor any[].

## Os parâmetros da função são opcionais por padrão
Em typescript você deve passar os mesmos paramêtros que a função espera receber.
Você também pode definir algum parametro como opcional.
