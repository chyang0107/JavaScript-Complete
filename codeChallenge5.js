var billAmounts = [124, 48, 268, 180, 42] ;
var tipArray= [];
var finalPaid = [];

for (i = 0; i<billAmounts.length ;i++) {
    if (billAmounts[i] < 50){
        tipArray[i] = Math.round((billAmounts[i]*0.2)*100)/100 ;

    }
    else if (50 <= billAmounts[i] <200){
        tipArray[i] = Math.round((billAmounts[i]*0.15)*100)/100 ;
    }
    else{
        tipArray[i] = Math.round((billAmounts[i]*0.1)*100)/100 ;
    }
//    tipArray.append(tipArray[i]);
    finalPaid.push(tipArray[i] + billAmounts[i])
}

console.log(tipArray);
console.log(finalPaid);
