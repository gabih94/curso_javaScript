const frutas = ['maça', 'pera', 'banana', 'laranja']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
    const par = i % 2 ===0 ? 'par' : 'impar';
    console.log(i, par);
}
