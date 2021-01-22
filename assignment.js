//


//1st Function
function kilometerToMeter(kilo) {
    if (kilo < 0) {                                 //checking the input is negative or not 
        return "Distance can not be negative.";  
    }

    var meter = kilo*1000;                          // converts kilometer to meter
    return meter;
}



//2nd Function
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if(watch < 0 || phone < 0 || laptop < 0) {
        return "Items can not be Negative";                                             //checking the inputs positive or negative

    } else if ( watch%1 !== 0 || phone%1 !== 0 || laptop%1 !== 0  )                    //checking the inputs have floating value or not
        {
        return "Items can not be floating number.";
    }

    var budget = watchPrice*watch + phonePrice*phone + laptopPrice*laptop;      //calculating total budget
    return budget;
}



//3rd Function
function hotelCost(day) {
    var cost = 0;
    if (day < 0 || day%1 !== 0) {
        return "Days must be integer";                      //checks the given value integer or not
    } else if (day <= 10) {
        cost = 100*day;                                     //Cost for 10 or less than 10 days 
    } else if (day <=20) {
        const firstTenCost = 10*100;
        var secondTenCost = 80 * (day-10);
        cost = firstTenCost + secondTenCost;                //Cost for 11 to 20 days
    } else{
        const firstCost = 10*100;
        const secondCost = 10*80;
        var thirdCost = 50* (day-20);
        cost = firstCost + secondCost + thirdCost;          // Cost for 20 more days
    }
    return cost;
}



//4th Function
function megaFriend(friendArray) {
    if(friendArray.length === 0){
        return "Array is Empty";                        //Chacking Array is empty or not
    }

    var mega = friendArray[0];                          //Initially setting the first element large
    for (var i = 0; i < friendArray.length; i++) {
        var single = friendArray[i];
        if (single.length > mega.length) {
            mega = single;                              // checking all the single strings and setting the large string
        }
    }
    return mega;
}








