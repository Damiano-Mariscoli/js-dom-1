const lampOff =  document.getElementById('lamp-off');
const button = document.getElementById('button');
const lampOn = document.getElementById('lamp-on')





button.addEventListener('click',  function(){
    console.log('ho cliccato sul bottone');

    lampOff.classList.toggle('on-off');
    
    lampOn.classList.toggle('on-off');

    if (lampOn.classList.contains('on-off')) {
        button.innerText = 'Accendi'
    } else {
        button.innerText = 'Spegni'
    }
    
})

