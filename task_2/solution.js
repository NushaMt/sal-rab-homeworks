function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    let shippingSum;
    
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;
    }
    else if (productsSum > 0 && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice;
    }
    
    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    let discountSum;
    productsSum >= discountMinSum ? discountSum = productsSum / 100 * discountPart : discountSum = 0
    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    let totalSum;
    
    totalSum = productsSum;
    totalSum = productsSum - discountSum;

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum = totalSum + shippingSum;
    
    let freeShipping;
    freeShipping = !shippingSum;

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
