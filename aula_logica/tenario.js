// (condição) ? 'valor para verdadeiro' : 'valor para falso'
const pontoUsuario = 500;

const verificarUsuario = pontoUsuario >= 10000 ? 'Usuário Vip' : 'Usuário Normal';

const corUser = null;
const corPadrao = corUser || 'Preta';

console.log(verificarUsuario)