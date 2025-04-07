const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// Primeira expressão: Executada apenas uma vez
// Segunda expressão: Condição de execução
// Terceira expressão: Executada sempre ao final do bloco

for (let i = 0; i < notas.length; i++) {
    console.log(`${i} é o índice e ${notas[i]} é a nota`);
}