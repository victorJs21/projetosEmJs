
 function altQtd(produto, acao){
    const qtd = document.getElementById('qtd_'+ produto)
    const valor = document.getElementById('valor_'+ produto)
    const total = document.getElementById('total_'+ produto)
 
    if(acao == '-' &&  qtd.innerHTML == 0) {
      
    }else{
    acao == '+' ?  qtd.innerHTML++ : qtd.innerHTML--
     const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML)
     total.innerHTML = formatarValor(valorTotal)
     soma()
    }
}

function soma(){
    
    let soma = 0
    let subtotal = document.getElementById('subtotal')

    for(let i = 1; i < 4; i++){
    soma += Number(somenteNumeros(document.getElementById('total_' + i).innerHTML))
    }
    
    subtotal.innerHTML = formatarValor(soma)

    console.log(soma.innerHTML)
}

function somenteNumeros (n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return 'R$' +  n.toLocaleString('pt-BR')
}