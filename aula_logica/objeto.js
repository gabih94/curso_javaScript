const pessoa = {
    nome: 'Frida',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320,
    }
};
//atribuição via desestruturação
const { nome: n = '', sobrenome, idade } = pessoa
// if(nome == '' || undefined) {
//     console.log('erro')
// }
console.log(n, sobrenome, idade)

const { endereco: { rua: r = '', numero: num = ''}} = pessoa
console.log(r, num)

const { nome, ...resto } = pessoa
console.log(resto)