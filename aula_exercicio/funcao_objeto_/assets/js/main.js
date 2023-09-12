function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoa = [];
    const number = 0;

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `<h4>Cliente</h4>` + `<p>Nome: ${nome.value} ${sobrenome.value} </p> ` + `<p>Peso: ${peso.value} </p> ` + `<p> Altura: ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
