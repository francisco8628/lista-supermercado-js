var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click',function(){
   // alert('clicado')
   var nomeProduto = document.querySelector('input[name=nome-produto]').value

   var valorProduto = document.querySelector('input[name=valor-produto]').value

   //alert(nomeProduto)
   //alert(valorProduto)

itens.push({
    nome: nomeProduto,
    valor: valorProduto
})   
//alert(itens[0].nome) 

/*
        <div class="lista-produto-single">
             <h3>Red bull</h3>
             <h3 class="price-protutos">R$ 2,00</h3>
        </div> <!-- lista-produto-single --> 
*/
let listaProdutos = document.querySelector('.lista-produtos')
listaProdutos.innerHTML="";
let soma = 0;
itens.map(function(val){
    soma += parseFloat(val.valor);
    listaProdutos.innerHTML+=`
    <div class="lista-produto-single">
    <span>`+val.nome+`</span>
    <span class="price-protutos">`+val.valor+`</span>
    </div>    
    `
})
soma = soma.toFixed(2);
nomeProduto.value = ""
valorProduto.value = ""

let somaProdutos = document.querySelector('.soma-produtos h3');

somaProdutos.innerHTML = 'R$ '+soma

})

document.querySelector('button[name=limpar]')
.addEventListener('click',function(){
    //alert('limpando')
    itens = [];
    document.querySelector('.lista-produtos').innerHTML=""
    document.querySelector('.soma-produtos h3').innerHTML="Total: R$ 0"
})