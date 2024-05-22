let input = document.getElementById('input')
let preInput = document.getElementById('prev-input')

let Calculation = ""

function getTileId(id){
    console.log(id.innerText);
    Calculation = Calculation + id.innerText
    input.innerText = Calculation
}

function getEquals(){
    input.innerText = eval(Calculation)
    preInput.innerText = Calculation
    
}

function clearCal(){
    
    preInput.innerText = Calculation + "=" + input.innerText
    input.innerText = 0
}













