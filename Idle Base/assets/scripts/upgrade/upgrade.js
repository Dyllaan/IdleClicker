function Upgrade(name, cost, multiplierCost,power) {
    this.name = name;
    this.cost = cost;
    this.baseCost = cost;
    this.power = power;
    this.count = 0;
    this.button;
    this.multiplier = 1;
    this.multiplierCost = multiplierCost;
    this.baseMultiplierCost = multiplierCost;
    this.multiplierButton;
}

var upgrades = [];

var goldMine = new Upgrade("Gold Mine", 10, 100,1);

var largeGoldMine = new Upgrade("Large Gold Mine", 30, 300,5);

var goldCountry = new Upgrade("Country of Gold", 100, 1000, 15);

function callUpgrades() {
    upgrades.push(goldMine);
    upgrades.push(largeGoldMine);
    upgrades.push(goldCountry);
    upgrades.forEach( function (arrayItem) {
        drawUpgrades(arrayItem);
    });
}

function buyUpgrade(arrayItem){  
    
    if(gold >= arrayItem.cost){                                   
        arrayItem.count++;                                   
    	gold -= arrayItem.cost;                        
        document.getElementById('gold').innerHTML = gold;  
        arrayItem.cost = Math.round(arrayItem.baseCost * Math.pow(1.1, arrayItem.count));
    } else {
        jQuery(".consoleText").show().delay( 800 ).fadeOut( 400 );
    }
    arrayItem.button.innerHTML = arrayItem.name + " cost: " + arrayItem.cost + " power: " + arrayItem.power + "(" + arrayItem.count +")"; 
}

function buyMultiplier(arrayItem){  
    if(gold >= arrayItem.multiplierCost){                                   
        arrayItem.multiplier++;                                   
    	gold -= arrayItem.multiplierCost;                        
        document.getElementById('gold').innerHTML = gold;  
        arrayItem.multiplierCost = Math.round(arrayItem.baseMultiplierCost * Math.pow(3, arrayItem.multiplier));
    } else {
        jQuery(".consoleText").show().delay( 800 ).fadeOut( 400 );
    }
    arrayItem.multiplierButton.innerHTML = arrayItem.name + " x" + arrayItem.multiplier + " cost: " + arrayItem.multiplierCost;
}


function drawUpgrades(arrayItem) {
    var button = document.createElement("button");
    button.innerHTML = arrayItem.name + " cost: " + arrayItem.cost + " power: " + arrayItem.power + "(" + arrayItem.count +")";
    console.log(button.id);
    document.getElementById("upgrades").appendChild(button);
    arrayItem.button = button;
    
    button.addEventListener ("click", function() {
        buyUpgrade(arrayItem);
    });    
    drawMultipliers(arrayItem);
}

function drawMultipliers(arrayItem) {
    var button = document.createElement("button");
    button.innerHTML = arrayItem.name + " x" + arrayItem.multiplier + " cost: " + arrayItem.multiplierCost;
    document.getElementById("multipliers").appendChild(button);
    arrayItem.multiplierButton = button;
    
    button.addEventListener ("click", function() {
        buyMultiplier(arrayItem);
    });    
}