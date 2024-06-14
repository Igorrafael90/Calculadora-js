function insert(num){
    let numero = window.document.querySelector('p.resultado').innerHTML//Aqui você pega todo mundo que foi digitado no p.resultado, e sem pegar você só escreveria o que clicasse nada mais
    window.document.querySelector('p.resultado').innerHTML = numero+num//aqui você junta o numero digitado e junta com o que é passado pelo parametro
}   

function clean(){
    window.document.querySelector('p.resultado').innerHTML = ""//Aqui você substitui tudo que você escreveu por nada ou string vazia ou uma variavel vazia
}

function back(){
    let resultado = window.document.querySelector('p.resultado').innerHTML
    window.document.querySelector('p.resultado').innerHTML = resultado.substring(0, resultado.length -1)//Aqui você apaga de um por um tudo que foi digitado, lendo primeiro oq foi escrito e dps apagando de um em um
}

function equal(){
    let resultado = window.document.querySelector('p.resultado').innerHTML
    if(resultado){
        let resultado2 = window.document.querySelector('p.resultado').innerHTML = eval(resultado)
        window.document.querySelector('p.resultado').innerHTML = resultado2.toFixed(1)
    }else{
        window.document.querySelector('p.resultado').innerHTML = 'Nada para calcular'
    }
}