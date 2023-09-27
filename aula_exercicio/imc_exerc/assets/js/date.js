//Metódo aluno

// const dateTitle = document.querySelector('.date');

// function getDaySem(day) {
//     let daySem;

//     switch(day) {
//         case 0:
//             return daySem = 'Domingo';
//         case 1:
//             return daySem = 'Segunda-feira';
//         case 2:
//             return daySem = 'Terça-feira';
//         case 3:
//             return daySem = 'Quarta-feira';
//         case 4:
//             return daySem = 'Quinta-feira';
//         case 5:
//             return daySem = 'Sexta-feira';
//         case 6:
//             return daySem = 'Sabádo';
//         default:
//             daySem = '';
//     }
// }

// function getDayMounth(mes) {
//     let dayMes;
//     switch(mes) {
//         case 0:
//             return dayMes = 'janeiro';
//         case 1:
//             return dayMes = 'fevereiro';
//         case 2:
//             return dayMes = 'março';
//         case 3:
//             return dayMes = 'abril';
//         case 4:
//             return dayMes = 'maio';
//         case 5:
//             return dayMes = 'junho';
//         case 6:
//             return dayMes = 'julho';
//         case 7:
//             return dayMes = 'agosto';
//         case 8:
//             return dayMes = 'setembro';
//         case 9:
//             return dayMes = 'outubro';
//         case 10:
//             return dayMes = 'novembro';
//         case 11:
//             return dayMes = 'dezembro';
//         default:
//             dayMes = '';
//     }
// }

// function createDate(data) {
//     const day = data.getDay();
//     const daySem = getDaySem(day);
//     const valueDay = data.getDate();
//     const mes = data.getMonth();
//     const dayMes = getDayMounth(mes);
//     const ano = data.getFullYear();
//     const hora = data.getHours();
//     const min = data.getMinutes();

//     // const seg = zeroAEsquerda(data.getMilliseconds());

//     return `<p>${daySem}, ${valueDay} de ${dayMes} de ${ano}</p> <p>${hora}:${min}</p>`;
// }

// const data = new Date();
// const dataBrasil = createDate(data);

// dateTitle.innerHTML += `<div>${dataBrasil}</div>`


//Resposta
const dateTitle = document.querySelector('.date');
const data = new Date();

dateTitle.innerHTML = data.toLocaleDateString('pt-br', {dateStyle: 'full'});