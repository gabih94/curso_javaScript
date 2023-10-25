const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const divElement = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, texto } = elements[i]
    let tagCreate = document.createElement(tag)
    tagCreate.innerText = texto;
    div.appendChild(tagCreate)
}

divElement.appendChild(div)
