const nome = 'Geovana Silva';
const sobrenome = 'dos Santos';
const idade = 24;
const peso = 62;
const altura = 1.67;

let indiceMassaCorporal; //peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg`);
console.log(`possui ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);