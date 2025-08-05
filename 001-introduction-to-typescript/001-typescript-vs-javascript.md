# TypeScript for the New Programmer

[doc](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html#learning-javascript-and-typescript)

- Typescript verifica erros no código antes de executa-la, isso se chama verificação estática de tipos.
- A síntaxe javascript é válida para typescript
- Você pode configurar as regras de validação do typescript
- O typescript mantem o mesmo comportamento do javascript quando se trata de exceções em tempo de execução

## Antes de executar o código
- Quando o compilador typescript termina de verificar o código, ele apaga os tipos e então produz o código 
compilado. Isso significa que, depois de compilado, o código javascript resultante, não possui informações
de tipo.

- O sistema de tipos não tem **nenhuma** influência durante a execução do seu código.
Todas as verificações são feitas durante o tempo de compilação.

- O javascript é uma linguagem interpretada, ou seja, não tem compilação, cada linha é lida diretamente
em tempo de execução.

- O typescript é uma linguagem compilada, ou seja, antes de executar, o código é 
compilado. Durante o tempo de compilação, são feitas todas as verificações de tipos,
bugs e otimizações. Depois de compilado, o código typescript se torna javascript.

- Antes de executar o código, o javascript tem uma análise sintática, para verificar
se existe erros de sintaxe no código. Esses erros de sintaxe são identificados antes
do código ser executado.

- 