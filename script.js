
const controleGastos = {
    orcamento: 0,
    despesa: 0,
    saldo: 0,
}




const campoEntradaOrcamento = document.querySelector('.formularioEntradaOrcamento input');
const buttonOrcamento = document.querySelector('.formularioEntradaOrcamento button')

buttonOrcamento.addEventListener('click', capturaValorOrcamento)

function capturaValorOrcamento() {
  const valorOrcamento =Number(campoEntradaOrcamento.value);
  
  controleGastos.orcamento =  valorOrcamento
  controleGastos.saldo = valorOrcamento
  
  atualizarInterface();
 
}

const campoNomeDespesa = document.querySelector('.formularioEntradaDespesa_nome');
const campoValorDespesa = document.querySelector('.formularioEntradaDespesa_valor');
const buttonDespesa = document.querySelector('.formularioEntradaDespesa button');

buttonDespesa.addEventListener('click', capturarValoresDespesa)

function capturarValoresDespesa() {
    const nomeDespesa = campoNomeDespesa.value;
    const valorDespesa = Number(campoValorDespesa.value)
    
    controleGastos.despesa += valorDespesa;
    controleGastos.saldo -= valorDespesa;

    atualizarInterface();
    
    adicionarDespesaInterface(nomeDespesa, valorDespesa)

}

const orcamento = document.querySelector('.secaoImpressaoResultados_Orçamento p')
const despesa = document.querySelector('.secaoImpressaoResultados_Despesas p')
const saldo = document.querySelector('.secaoImpressaoResultado_Saldo p')


function atualizarInterface(){
    orcamento.innerText = ` + R$ ${controleGastos.orcamento}`;
    despesa.innerText = ` - R$ ${ controleGastos.despesa}`;
    saldo.innerText = ` R$ ${controleGastos.saldo}`;
    
}

const listaDespesa = document.querySelector('.containerdespesasa_lista')

function adicionarDespesaInterface(nomeDespesa, valorDespesa) {
    
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

  h3.innerText = nomeDespesa;
  p.innerText = `R$ ${valorDespesa}`;

  img.src = './Nova pasta/kisspng-rubbish-bins-waste-paper-baskets-computer-icons-delete-table-icon-5bed75a2acdaf3.618116271542288802708.png';
  img.alt = 'icone lixeira';
  
  img.addEventListener('click', removerDespesa)
   li.dataset.valor = valorDespesa;
   li.appendChild(h3);
   li.appendChild(p);
   li.appendChild(img);

   listaDespesa.appendChild(li);

}
function removerDespesa(evento){
    const despesaClicada = evento.target.parentNode;
    const valorDespesaClicada = Number(despesaClicada.dataset.valor);
   
    controleGastos.despesa -=  valorDespesaClicada;
    controleGastos.saldo += valorDespesaClicada ;
  
    atualizarInterface()
    despesaClicada.remove();
}
