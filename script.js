nome = window.prompt('Qual o seu nome?')
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var msg2 = document.getElementById('msg2');
    var Data = new Date();
    var hora = Data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.png';
        document.body.style.background = '#e2cd9f';
        msg2.innerHTML = `Bom dia, ${nome}!`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png';
        document.body.style.background = '#b9846f';
        msg2.innerHTML = `Boa tarde, ${nome}!`
    } else {
        img.src = 'noite.png';
        document.body.style.background = '#515154';
        msg2.innerHTML = `Boa noite, ${nome}!`
    }
}
