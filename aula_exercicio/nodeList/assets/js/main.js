const list = document.querySelector('.paragrafos')
const paragrafo = list.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafo) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}


// p.classList.add('style background: var(--primary-color)')