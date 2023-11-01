const nome= ['Frida', 'Buuh', 'Andrew', 'Gabriela'];

for (let valor of nome) {
    console.log(valor)
}


nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});

// for classico - com interavéis (array ou string)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retornar o valor em si (iteraveis, arrays ou strings)