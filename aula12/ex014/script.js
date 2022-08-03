function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){

        img.src = 'manha.png'
        msg.innerHTML += `<p><strong>Bom dia</strong></p>`
        document.body.style.background = '#e8dcd0'

    }else if (hora >= 12 && hora < 18){
        
        img.src = 'tarde.png'
        msg.innerHTML += `<p><strong>Boa Tarde</strong></p>`
        document.body.style.background = '#ee924d'

    }else{

        img.src = 'noite.png'
        msg.innerHTML += `<p><strong>Boa Noite</strong></p>`
        document.body.style.background = '#3a4b5a'

    }

}
