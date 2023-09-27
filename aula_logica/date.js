//para fazer conta de horas//
// const thesHoras = 6 * 60 * 3 * 1000; // 60 correspondem a 1h, (3) éo valor de horas para se mutiplicar e 1000 é por conta do vsCode trabalhar com milisegundos

// const date = new Date(0); = será igual o marco 0 que é 01/01/1970, menos 3h por conta do GMT que estamos
// const date = new Date(2023, 08, 21, 15, 30, 10);

// const date = new Date('2023-09-21T15:30:45.100');
// console.log(date.toString());
// console.log('Dia', date.getDate());
// console.log('Mês', date.getMonth());
// console.log('Ano', date.getFullYear());
// console.log('Horas', date.getHours());
// console.log('Min', date.getMinutes());
// console.log('Sec', date.getSeconds());
// console.log('MS', date.getMilliseconds());
// console.log('Dia da semana', date.getDay());
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getMinutes());
    const min = zeroAEsquerda(data.getSeconds());
    // const seg = zeroAEsquerda(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);