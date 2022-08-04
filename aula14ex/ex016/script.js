function contar() {

    
    var inicio = document.querySelector('input#ini')
    var f = document.querySelector('input#fim')
    var passo = document.querySelector('input#pas')
    var resp = document.querySelector('div#res')

    var inicial = Number(inicio.value)
    var final = Number(f.value)
    var cont = Number(passo.value)

    
    if(inicio.value.length == 0){

        window.alert('Insira o Valor inicial!')

    }else if(f.value.length == 0){

        f.style.color = 'red'
        window.alert('Insira o Valor final!')

    }else if(cont == 0 || passo.value.length == 0){

        

        resp.innerHTML = `<p>Contando: ${inicial} ${final} ${cont} </p>`
        if(inicial > final)
        {
            window.alert('Contador inválido, considerando Contador = -1')
            cont = -1
            for(var i = inicial; i >= final; i+=cont) {
                resp.innerHTML += `${i}&#x1F449;` 
            }
        }else{

            window.alert('Contador inválido, considerando Contador = 1')
            cont = 1
            for(var i = inicial; i <= final; i+=cont) {
                resp.innerHTML += `${i}&#x1F449;` 
            }
        }
        resp.innerHTML += `&#x1F3F3;`
        

    }else if((inicial > final && cont > 0) || (inicial < final && cont < 0) ){

        resp.innerHTML = "Impossível contar"


    }else{
        resp.innerHTML = `<p>Contando: ${inicial} ${final} ${cont} </p>`
        if(cont < 0)
        {
            for(var i = inicial; i >= final; i+=cont) {
                resp.innerHTML += `${i}&#x1F449;` 
            }
        }else{
            for(var i = inicial; i <= final; i+=cont) {
                resp.innerHTML += `${i}&#x1F449;` 
            }
        }
        resp.innerHTML += `&#x1F3F3;`
        
    }
        
   

}