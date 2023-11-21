function newDate(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }
    if (!date){
        date = new Date;
    }
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const hourTime = newDate();
console.log(hourTime)
} catch(e) {
    // tratar erro
} finally {
    console.log('Tenha um bom dia')
}


function hour() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
//executa código com intervalo de tempo
const inter = setInterval(function() {
    console.log(hour())
}, 1000)

setTimeout(function() {
    clearInterval(inter)
}, 10000);