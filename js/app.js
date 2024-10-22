//1)

//definisco un toggle che lavora prima su lamp-off e poi su lamp-on in base al click del bottone
//definire la condizione per cambiare il testo del bottone in base alla presenza o meno della classe "on-off"


const lampOff =  document.getElementById('lamp-off');
const button = document.getElementById('button');
const lampOn = document.getElementById('lamp-on')

button.innerText = 'Accendi'
button.addEventListener('click',  function(){
    console.log('ho cliccato sul primo bottone');

    lampOff.classList.toggle('on-off');
    lampOn.classList.toggle('on-off');

    if (lampOn.classList.contains('on-off')) {
        
        button.innerText = 'Accendi'
    } else {

        button.innerText = 'Spegni'
    }
    
})

//2)

//creare una funzione che pone la seguente condizione
//se (la src di lampOff contiene al suo interno "white_lamp")
//allora cambia la src di lampOff con quella di "yello_lamp"
//altrimenti inserisci la src di "white_lamp"


const lamp = document.getElementById('lamp')
const secondButton = document.getElementById('second-button')

secondButton.innerText = 'Accendi'
secondButton.addEventListener('click' ,  function(){
    console.log('ho cliccato sul secondo bottone')

    if(lamp.src.includes('white_lamp')){
        
        lamp.src = "./img/yellow_lamp.png"
    }else {
        
        lamp.src = "./img/white_lamp.png"
    }
})