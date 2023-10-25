const verdadeira = true;

let nome = 'Gabi'; //LET tem escopo de bloco
var nome2 = 'Andrew'; // Redeclara a variavel, tem escopo de função


if(verdadeira) {
    let nome = 'Otavio';
    var nome2 = 'João';
    console.log(nome, nome2);
}

function falaOi() {
    var nome = 'Luiz';
    console.log(`${nome} Oi`);
}

falaOi()