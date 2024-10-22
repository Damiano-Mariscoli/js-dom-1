const lampOff =  document.getElementById('lamp-off');
const button = document.getElementById('button');
const lampOn = document.getElementById('lamp-on')



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

//creare una funzione che pone la seguente condizione
//se (la src di lampOff contiene al suo interno "white_lamp")
//allora cambia la src di lampOff con quella di "yello_lamp"
const lamp = document.getElementById('lamp')
const secondButton = document.getElementById('second-button')

secondButton.addEventListener('click' ,  function(){
    console.log('ho cliccato sul secondo bottone')
    if(lamp.src.includes('white_lamp')){
        console.log('debug')
        lamp.src = "./img/yellow_lamp.png"
    }
})