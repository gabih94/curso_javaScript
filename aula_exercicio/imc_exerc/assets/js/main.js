function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        console.log(peso)
        console.log(altura)

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
