let dataElemento = document.querySelector('#data');
let horaElemento = document.querySelector('#hora'); 
let dataCompleta = new Date();

function zeroEsquerda (num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

let dia = dataCompleta.getDate();
let mes = dataCompleta.getMonth() + 1;
let hora = dataCompleta.getHours();
let minuto = dataCompleta.getMinutes();
dataElemento.innerHTML = `${zeroEsquerda(dia)}/${zeroEsquerda(mes)}/${dataCompleta.getFullYear()}`;
horaElemento.innerHTML = `${zeroEsquerda(hora)}:${zeroEsquerda(minuto)}`;