const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55119999998', '5511999999993'],
    // enderecos: [
    // {
    //     rua: 'Rua Joseph Climber',
    //     numero: '45',
    //     complemento: 'apto 43',
    // },
    // {
    //     rua: 'Rua Dona Clotilde',
    //     numero: '71',
    //     complemento: null,
    // }]
}

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado');
}