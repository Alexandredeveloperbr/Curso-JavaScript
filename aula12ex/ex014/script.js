function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 15
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#aac2f7dc'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#cc5031dc'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#181044c5'
    }
}