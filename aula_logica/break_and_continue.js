const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 3, 6, 8, 0, 5, 3, 2, 3, 0];

//continue = continua para proxima interação
//break = sai do laço

for (let number of numbers) {
    if(number === 2 || number === 5) {
        continue;
    }

    if (number === 17){
        console.log('7 encontrado, saindo...')
        break;
    }
    console.log(number)
}