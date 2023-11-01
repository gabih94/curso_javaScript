//função que identifica se o tamanho de imagem recebido esta em paisagem

const min = 360;
const max = 1920

const random = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const x = random(min, max);
const y = random(min, max);

const ePaisagem = (x, y) => x > y ? true : false;

const result = ePaisagem(x, y);
console.log(`${x} x ${y}, ${result}`)
