const notaFinal = 6;
const faltas = 5;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
    console.log('Reprovado, boas festas.')
} else {
    console.log('Não foi reprovado por falta.');
}

if (faltas >= 2 && !advertencias) {
    console.log('Recebeu bônus.')
} else {
    console.log('Não recebeu bônus.');
}