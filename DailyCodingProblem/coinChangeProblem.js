function returnChange(den = [], change = 0) {
    if(den.length === 0 || change === 0) {
        return []
    }

    //Creating another array that will hold the denomination and its number
    let rep = Array.from(den);
    rep = rep.fill(0);

    let coin = 0;
    for(let i = den.length - 1; i > -1; i--) {
        coin = den[i];

        while (coin <= change) {
            rep[i] = rep[i] + 1;
            change = change - coin;
        }
    }
    return rep;
}
exports.returnChange = returnChange;