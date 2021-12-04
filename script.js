
const checkAge = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

const heyKiddo = function (age) {
    legalAge = checkAge(age)
    if (legalAge) {
        console.log("Hello there")
    } else if (!legalAge) {
        console.log("Hey kiddo")
    }
}

heyKiddo(17)
heyKiddo(18)
heyKiddo(19)

const doVATCalculation = function (price, VAT) {
    let sellPrice = price * (1 + VAT);
    return sellPrice;
}

const Taxes = function (price, VAT) {
    let sellPrice = doVATCalculation(price, VAT);
    console.log(sellPrice)
}

Taxes(5, 0.21)
Taxes(10, 0.21)
Taxes(21, 0.21)

const removeTaxes = function (sellPrice, Vat) {
    let price = sellPrice / (1 + Vat);
    let vatPrice = sellPrice - price;
    return [price, vatPrice];
}

const printRemoveTaxes = function (sellPrice, Vat) {
    let result = removeTaxes(sellPrice, Vat);
    console.log("the orignal price was: ", result[0])
    console.log("the VAT price is: ", result[1])
}

printRemoveTaxes(1210, 0.21)