function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;
}

document.getElementById('btn-generator').addEventListener('click',function(){
    const pin = getPin();
    const pinDisplayElement = document.getElementById('pin-field');
    pinDisplayElement.value = pin;
})

