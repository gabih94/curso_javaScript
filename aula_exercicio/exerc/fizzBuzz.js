//FizzBuzz, função rece umnumero entre 0 e 100, que segue as regras de:
//se for divisivel por 3 retorna Fizz, se for divisivel por 5 retorna Buzz, se for divisivel por ambos retorna FizzBuzz, caso não seja divisivel por nenhum retornar o numero
// verificar se foi passado o tipo numero e retonar-lo, 

const validate = (number) => {
    if(typeof number !== 'number') return number
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number
}


for (let i = 0; i <= 100; i++) {
    console.log(i, validate(i))
}
console.log(validate('a'))