// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let resObj = {};
    if (currency <= 0){
    } else if (currency > 10000 ){
        resObj.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
        let nominal = {H: 50, Q: 25, D: 10, N:5, P:1}
        actualCurrency = currency;
         
        for(let key in nominal){
            let coins = actualCurrency / nominal[key];
            if (coins >= 1){
                resObj[key] = Math.floor(coins);
                actualCurrency -= resObj[key] * nominal[key];
            }
            if (actualCurrency == 0){
                break;
            }
        }
    } 
    return resObj;
}
