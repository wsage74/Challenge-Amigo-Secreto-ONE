let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let nombreDeAmigos = document.getElementById('amigo').value;

    if (nombreDeAmigos === '') {
        alert('Ingrese un nombre');
    } else{
        amigos.push(nombreDeAmigos);
        document.getElementById('amigo').value = '';
    }

    let listaAmigosHTML = document.getElementById('listaAmigos');
    listaAmigosHTML.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigosHTML.append(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Lista de amigos vacía');
    } else{
        let indiceSorteado = Math.floor(Math.random()*amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[indiceSorteado];
    }
}