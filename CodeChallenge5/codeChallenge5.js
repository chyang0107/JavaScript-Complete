var johnTip = {
    firstName: 'John',
    billAmounts: [124, 48, 268, 180, 42],
    tipCalculation: function(){
        this.tipArray = [];
        this.finalPaid = [];
        for (i = 0; i<this.billAmounts.length ;i++){
            var bill = this.billAmounts[i];

            if (bill < 50){
                this.tipArray[i] = Math.round((bill*0.2)*100)/100 ;
            }
            else if (50 <= bill && bill<200){
                this.tipArray[i] = Math.round((bill*0.15)*100)/100 ;
            }
            else{
                this.tipArray[i] = Math.round((bill*0.1)*100)/100 ;
            }
            this.finalPaid[i] = bill + this.tipArray[i];
        }

    }

}
console.log(johnTip.tipCalculation());
console.log(johnTip);

var markTip = {
    firstName: 'Mark',
    billAmounts: [77, 375, 110, 45],
    tipCalculation: function(){
        this.tipArray = [];
        this.finalPaid = [];
        for (i = 0; i<this.billAmounts.length ;i++){
            var bill = this.billAmounts[i];

            if (bill < 100){
                this.tipArray[i] = Math.round((bill*0.2)*100)/100 ;
            }
            else if (100 <= bill && bill<300){
                this.tipArray[i] = Math.round((bill*0.1)*100)/100 ;
            }
            else{
                this.tipArray[i] = Math.round((bill*0.25)*100)/100 ;
            }
            this.finalPaid[i] = bill + this.tipArray[i];
        }

    }

}
console.log(markTip.tipCalculation());
console.log(markTip);
console.log(markTip.tipArray);
console.log(johnTip.tipArray);
console.log("Mark pay " + tipAveCal(markTip.tipArray))
console.log("John pay " + tipAveCal(johnTip.tipArray))

function tipAveCal(tiparray){
    var sum =0
    for(i=0; i<tiparray.length;i++){
        sum += tiparray[i]
    }
    var ave = sum/tiparray.length
    return ave
}





//var billAmounts = [124, 48, 268, 180, 42] ;
//var tipArray= [];
//var finalPaid = [];
//
//for (i = 0; i<billAmounts.length ;i++) {
//    if (billAmounts[i] < 50){
//        tipArray[i] = Math.round((billAmounts[i]*0.2)*100)/100 ;
//
//    }
//    else if (50 <= billAmounts[i] <200){
//        tipArray[i] = Math.round((billAmounts[i]*0.15)*100)/100 ;
//    }
//    else{
//        tipArray[i] = Math.round((billAmounts[i]*0.1)*100)/100 ;
//    }
////    tipArray.append(tipArray[i]);
//    finalPaid.push(tipArray[i] + billAmounts[i])
//}
//
//console.log(tipArray);
//console.log(finalPaid);
