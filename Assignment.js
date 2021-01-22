// https://arafatduha.github.io/jsassignment/


//master branch

//KilometerToMeter 
function kilometerToMeter(kilometer){
   // var str="Kilometer can't be Negative";
    if(kilometer<0){
        return "Kilometer can't be Negative";
    }
    else{
        return kilometer*1000;
    }
}
var meter = kilometerToMeter(12.5);
console.log(meter);

// budgetCalculator
//  50,100,500
function budgetCalculator(watch, mobile, laptop)
{
    var watchPrice=50;
    var mobilePrice=100;
    var laptopPrice=500;


    if(watch<0 || mobile<0 || laptop<0){
        return "Quantity can't be negative";
    }
    else{
        var totalCost=0;
        totalCost+=(watch*watchPrice);
        totalCost+=(mobile*mobilePrice);
        totalCost+=(laptop*laptopPrice);
        return totalCost;
    }
}


var Total= budgetCalculator(100,100,100);
console.log(Total);

// hotelCost 
//

function hotelCost(day){
    var cost=0;
    if(day<0){
        return "staying day can't be negative";
    }
    else if(day<=10){
        cost=day*100;
        return cost;
    }
    else if(day>10 && day<=20){
        cost=10*100;
        day-=10;
        cost= cost+day*80;
        return cost;
    }
    else{

        cost=10*100;
        cost+=10*80;
        day-=20;
        cost+=day*50;
        return cost;
    }
}

var totalHotelCost = hotelCost(20);
console.log(totalHotelCost); 

//megaFriend 
//

var friendsName = ['pocoX','samsu','kupa','Trump', 'Joebiden', 'whatislove'];
var result = megaFriend(friendsName);
console.log(result);


//function here 

function megaFriend(friendsName){

    var name=friendsName[0].length;
  
    for(var i=0; i<friendsName.length; i++){
      console.log(friendsName[i]);
        if(friendsName[i].length>name){
            name=friendsName[i];
           
        }
       
    }
    return name;

}
