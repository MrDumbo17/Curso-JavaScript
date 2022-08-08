function gerar() {
    var num = document.querySelector("input#num")
    var tab = document.querySelector("select#tab")

    if(num.value.length == 0){

        window.alert("Por favor, digite um número!")

    }else {
    
        var valor = num.value

        tab.innerHTML = ''
        for(var i = 0; i < 10; i++) {
            
            let item = document.createElement('option')
            item.text = `${valor} + ${i} = ${valor * i}`
            tab.appendChild(item)

        }

    }
    
}