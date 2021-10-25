/* 
Usei o plugin Better Comments no VS Code para mudar as cores dos comentários. 
? Apenas para melhor visualização.
*/

// NodeList com todas as checkboxes, que são as opções no cardápio.
var nodeListItems = document.querySelectorAll('input[type=checkbox]'); 

// NodeList com todas as inputs do tipo number, correspondentes à escolha de quantidade para cada opção do cardápio.
var nodeListQuant = document.querySelectorAll('input[type=number]'); 

// ! Note que um objeto da nodeListQuant e um objeto da nodeListItems 
// ! de mesmos índices correspondem ao par item/quantidade desejados.

// Nome do cliente
var nome = document.querySelector('input#text-area');
console.log(nome);

// Node do botão 'Confirmar', que deve salvar os itens da comanda na localStorage
// e redirecionar para a página da comanda, já formatada para impressão.
var save = document.querySelector('#save');

var item, quant = {};

function addEventListenerToList (list, event) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener(event, function (){

            if(this.getAttribute('type') === 'checkbox') {
                if(this.checked) {
                    nodeListQuant[i].value = 1;
                } else {
                    nodeListQuant[i].value = 0;
                }

            } else if (this.getAttribute('type') === 'number') {
                if (this.value > 0) {
                    nodeListItems[i].checked = true;
                } else {
                    nodeListItems[i].checked = false;
                }
            }
        });
    }
}

addEventListenerToList(nodeListItems, 'change');
addEventListenerToList(nodeListQuant, 'change');

save.addEventListener('click', function (){

    localStorage.clear(); // É preciso limpar a localStorage antes de gravar algo.
    localStorage.nomecliente = nome.value;

    let count = 0;
    for(var i = 0; i < nodeListItems.length; i++) {

        // Atribuí uma variável à cada elemento da comanda 
        // para facilitar a compreensão do código.
        item = nodeListItems[i];
        quant = nodeListQuant[i];

        if(item.checked && quant.value > 0) {

            localStorage.setItem(`item${count}`, `${item.value}, ${quant.value}`);
            count++;
        }
    }
    localStorage.count = count

    window.location.assign("comanda-formatada/index.html");
});

