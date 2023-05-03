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

document.getElementById('calculator').addEventListener('click',function(event){
    const typedPin = event.target.innerText;
    const typednumberfield = document.getElementById('number-field');
    const previousTypedPin = typednumberfield.value;
    if (isNaN(typedPin)) {
        if (typedPin === 'C') {
            typednumberfield.value = '';
        }
        else if(typedPin === '<'){
            const digits = previousTypedPin.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typednumberfield.value = remainingDigits;

        }
    }else{
        const newTypedNumebr = previousTypedPin + typedPin;
        typednumberfield.value = newTypedNumebr;
    }

})

document.getElementById('btn-submit').addEventListener('click',function(){
    const pinDisplayElement = document.getElementById('pin-field');
    const generatedPin = pinDisplayElement.value;

    const typednumberfield = document.getElementById('number-field');
    const typedPin = typednumberfield.value;
    const getSuccessSms = document.getElementById('success-message');
    const failSms = document.getElementById('failed-message');
    if (generatedPin === typedPin) {
        
        getSuccessSms.style.display = 'block';
        failSms.style.display = 'none';
    }else{
        
        failSms.style.display = 'block';
        getSuccessSms.style.display = 'none';
    }
})