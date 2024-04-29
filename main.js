function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador < listaDeTeclas.length; contador ++ ){
    const tecla = listaDeTeclas[contador]; // crea una constante y realiza una lista de conteo.
    const instrumento = tecla.classList[1]; //accede a las clases de un elemento a traves del atributo class list
    

    const idAudio = `#sonido_${instrumento}`;
        
    // Crea una función anónima.
    tecla.onclick = function (){ 
         playSonido(idAudio);
    };
    tecla.onkeydowm = function(evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');    
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('activa');
    }
}


