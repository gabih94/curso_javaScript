function gatDaySem(day) {
    let daySem;

    switch(day) {
        case 0:
            return daySem = 'Domingo';
        case 1:
            return daySem = 'Segunda';
        case 2:
            return daySem = 'Terça';
        case 3:
            return daySem = 'Quarta';
        case 4:
            return daySem = 'Quinta';
        case 5:
            return daySem = 'Sexta';
        case 6:
            return daySem = 'Sabádo';
        default:
            daySem = '';
    }
}


const data = new Date('2023-11-02 12:45:36');
const day = data.getDay();
const daySem = gatDaySem(day);


console.log(day, daySem);