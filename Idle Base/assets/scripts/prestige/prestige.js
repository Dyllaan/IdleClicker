var prestigeLvl = 0;
var prestigePoints = 0;
var pointPerTotal = 2000000;

function prestige() {
    if(calculatePointsGained() > 1) {
        prestigePoints = prestigePoints + calculatePointsGained();
        document.getElementById("pGBP").innerHTML = prestigePoints;
        gold = 0;
        goldEarned = 0;
        upgrades.forEach( function (arrayItem) {
            arrayItem.count = 0;
            arrayItem.cost = arrayItem.baseCost;
            arrayItem.button.innerHTML = arrayItem.name + " cost: " + arrayItem.cost + " power: " + arrayItem.power + "(" + arrayItem.count +")"; 
        
            arrayItem.multiplier = 1;
            arrayItem.multiplierCost = arrayItem.baseMultiplierCost;
            arrayItem.multiplierButton.innerHTML = arrayItem.name + " x" + arrayItem.multiplier + " cost: " + arrayItem.multiplierCost;
        });
    } else{
        console.log("Cannot perform this action at this time.")
    }
}


function calculatePointsGained() {
    return Math.floor(goldEarned / pointPerTotal);
}