var valores = []
let resp = document.querySelector('div#res')
let num = document.querySelector('input#num')
let list = document.querySelector('section#tabnum')   

function add() { 

    if(num.length == 0) {
        window.alert('Digite um Número')
    }else{
        let valor = Number(num.value)

        if(valores.indexOf(valor) != -1 || valor < 1 || valor > 101) {

            window.alert('Valor invalido ou ja existente na lista')
        } else {
            
            valores.push(Number(valor))
           
            let item = document.createElement('option')
            item.text = `Valor ${valor} adicionado.`
            tabnum.appendChild(item)
            

        }
        num.value = ''
        num.focus()
        resp.innerHTML = ''
    }


}
function soma() {

    let soma = 0
    for(let i in valores) {

        soma += Number(valores[i])

    }

    return soma
}
function fim() { /* quantidade , o maior numero, o menor, soma , media */
    let tamanho = valores.length
    if(tamanho == 0){

        window.alert('Adicione Valores!')
        num.focus()

    }else {
        
        var menor = valores[0]
        var maior = valores[0]

        for(var i in valores){

            if(valores[i] < menor)
                menor = valores[i]
            else if(valores[i] > maior)
                maior = valores[i]
        }
    
       resp.innerHTML += `<p>Ao todo temos ${tamanho} numeros cadastrados.</p>`
       resp.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
       resp.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
       resp.innerHTML += `<p>A soma dos valores é : ${soma()}</p>`
       resp.innerHTML += `<p>A média dos valores é: ${soma()/tamanho}</p>`
    
    }
    
}