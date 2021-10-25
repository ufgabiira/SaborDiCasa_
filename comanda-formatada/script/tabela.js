// Variáveis Globais
var tabela = document.querySelector("#tabela-produtos");
var nomeCliente = document.querySelector('#nome');

// Funções
function criaLinha (tabela) {
    let novaLinha = tabela.insertRow();
    return novaLinha;
}

nomeCliente.innerHTML = localStorage.getItem('nomecliente');
let subtotal = 0.0;
let contador = localStorage.getItem('count');

for(let i = 0; i < contador; i++) {
    let linha = criaLinha(tabela);
    let arrItens = localStorage.getItem('item' + i).split(', ');
    
    for(let j  = 0; j < 3; j++) {
        let celula = linha.insertCell();
        if(j === 0) {
            celula.setAttribute('class', 'quantidade');
            celula.innerHTML = arrItens[1];
        } else if (j === 1) {
            celula.setAttribute('class', 'descricao');
            celula.innerHTML = arrItens[0];
        } else if (j === 2){
            for(let k = 0; k < precos.length; k++) {
                if (arrItens[0] === precos[k].item){
                    celula.setAttribute('class', 'valor');
                    celula.innerHTML = precos[k].preco.toFixed(2);
                    let valor = precos[k].preco;
                    let quant = Number.parseInt(arrItens[1]);
                    subtotal = subtotal + (valor * quant);
                }
            }
        }
    }
}
// LINHA DO SUBTOTAL
let linhaSub = tabela.insertRow();
linhaSub.insertCell();
let textSub = linhaSub.insertCell();
textSub.setAttribute('id', 'texto-sub');
textSub.innerHTML = "Subtotal:";

let valorSub = linhaSub.insertCell();
valorSub.setAttribute('id', 'valor-sub');
valorSub.innerHTML = subtotal.toFixed(2);

// LINHA DA TAXA DE ENTREGA
let taxa = Number.parseFloat(prompt("Defina uma taxa de entrega: "));
while(Number.isNaN(taxa) === true) {
    taxa = Number.parseFloat(prompt("Entrada inválida! \n Digite um valor para a taxa de entrega: "));
}
if (taxa > 0.0) {
    let linhaTaxa = tabela.insertRow();
    linhaTaxa.insertCell();
    let textTaxa = linhaTaxa.insertCell();
    textTaxa.setAttribute('id', 'texto-taxa');
    textTaxa.innerHTML = "Tx. de Entrega:";

    let valorTaxa = linhaTaxa.insertCell();
    valorTaxa.setAttribute('id', 'valor-taxa');
    valorTaxa.innerHTML = taxa.toFixed(2);
}

// LINHA DE DESCONTO
let desconto = Number.parseFloat(prompt("Defina um desconto: "));
while(Number.isNaN(desconto) === true) {
    desconto = Number.parseFloat(prompt("Entrada inválida! \n Digite um valor para o desconto: "));
}
if (desconto > 0.0) {
    let linhadesconto = tabela.insertRow();
    linhadesconto.insertCell();
    let textdesconto = linhadesconto.insertCell();
    textdesconto.setAttribute('id', 'texto-desconto');
    textdesconto.innerHTML = "Desconto:";

    let valordesconto = linhadesconto.insertCell();
    valordesconto.setAttribute('id', 'valor-desconto');
    valordesconto.innerHTML = "-" + desconto.toFixed(2);
}

// LINHA DO TOTAL
let total = (taxa + subtotal) - desconto;
let linhaTotal = tabela.insertRow();
linhaTotal.insertCell();
let textTotal = linhaTotal.insertCell();
textTotal.setAttribute('id', 'texto-total');
textTotal.innerHTML = 'TOTAL:';

let valorTotal = linhaTotal.insertCell();
valorTotal.setAttribute('id', 'valor-total');
valorTotal.innerHTML = 'R$ ' + total.toFixed(2);
