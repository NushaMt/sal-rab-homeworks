function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    let message;
    message = `${productName} за ${productPrice} теперь в корзине!`;
    console.log(message);
    
    return message;
}

function addInCartCountChange(value) {

    let oldValue = value;

    let newValue;
    newValue = oldValue + 1;
    
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    let newSum;
    newSum = oldSum + difference;
    let newSumText;
    newSumText = `${newSum} ₽`;
    
    return newSumText;
}

