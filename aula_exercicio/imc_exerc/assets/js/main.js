const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inptPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inptPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido!', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const valueImc = getValueImc(imc);
    console.log(imc);
    const msg = `Seu IMC é ${imc} (${valueImc})`

    setResultado(msg, true);
});

function getValueImc(imc) {
    const value = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
    console.log(value[3])
    if (imc >= 39.9) return value[5];
    if (imc >= 34.9) return value[4];
    if (imc >= 29.9) return value[3];
    if (imc >= 24.9) return value[2];
    if (imc >= 18.5) return value[1];
    if (imc < 18.5) return value[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function criarP() {
    const p = document.createElement('p');
    return p;
};

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criarP();

    if(isValid){
        p.classList.add('paragrafo_valid');
    }else{
        p.classList.add('paragrafo_invalid');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};

/*
codigo aluno
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        imc = peso.value / (altura.value * altura.value);
        console.log(imc);

        if(imc < 18.5){
           resultado.innerHTML = `<p class="cond1"> Seu IMC é: ${imc.toFixed(2)} <strong> Abaixo do peso </strong> </p> `
        } else if(imc >= 18.5 && imc <= 24.9){
           resultado.innerHTML = `<p class="cond2"> Seu IMC é: ${imc.toFixed(2)} <strong> Peso Normal </strong> </p> `
        } else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `<p class="cond3"> Seu IMC é: ${imc.toFixed(2)} <strong> Sobrepeso </strong> </p> `
        } else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `<p class="cond4"> Seu IMC é: ${imc.toFixed(2)} <strong> Obesidade Grau 1 </strong> </p> `
        } else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `<p class="cond4"> Seu IMC é: ${imc.toFixed(2)} <strong> Obesidade Grau 2 </strong> </p> `
        } else {
            resultado.innerHTML = `<p class="cond4"> Seu IMC é: ${imc.toFixed(2)} <strong> Obesidade Grau 3 </strong> </p> `
        };
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
*/
