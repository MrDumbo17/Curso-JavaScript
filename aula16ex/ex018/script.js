var valores = []
let resp = document.querySelector('div#res')

function add() {

    let num = document.querySelector('input#num')
    let list = document.querySelector('section#tabnum')    

    if(num.length == 0) {
        window.alert('Digite um Número')
    }else{
        let valor = Number(num.value)

        if(valores.indexOf(valor) != -1 || valor < 1 || valor > 100) {

            window.alert('Valor invalido ou ja existente na lista')
        } else {
            
            valores.push(valor)
           
            let item = document.createElement('option')
            item.text = `Valor ${valor} adicionado.`
            tabnum.appendChild(item)
            

        }
        num.value = ''
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
    let tamanho = Number(valores.length)
    valores.sort()
    
    resp.innerHTML += `<p>Ao todo temos ${tamanho} numeros cadastrados.</p>`
    resp.innerHTML += `<p>O maior valor informado foi: ${valores[--tamanho]}</p>`
    resp.innerHTML += `<p>O menor valor informado foi: ${valores[0]}</p>`
    resp.innerHTML += `<p>A soma dos valores é : ${soma()}</p>`
    resp.innerHTML += `<p>A média dos valores é: ${soma()/++tamanho}</p>`
    
    
}