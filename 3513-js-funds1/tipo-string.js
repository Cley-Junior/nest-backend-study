const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "O nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "O nosso lema é 'estudar bastante!'"`

console.log(cumprimento);
console.log(citacao);

console.log('A estudante chama '+ estudante);

// template string
console.log(`A estudante chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);
