var gold = 0;

var goldEarned = 0;

var goldPerSecond = 0;

var shouldSave = true;

window.setInterval(function(){
    var goldToAdd = 0;
    
    upgrades.forEach( function (arrayItem) {
        if(prestigePoints != 0)
            goldToAdd += ((arrayItem.count * arrayItem.power) * arrayItem.multiplier) * prestigePoints;
        else
            goldToAdd += ((arrayItem.count * arrayItem.power) * arrayItem.multiplier);
        
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("goldEarned").innerHTML = goldEarned;
        document.getElementById("goldPerSecond").innerHTML = goldPerSecond;
    });
    goldPerSecond = goldToAdd;
    addGold(goldToAdd);
    
    updateDisplayElements();
}, 1000);

function addGold(amount) {
    goldEarned = goldEarned + amount;
    gold = gold + amount;
}

window.addEventListener("beforeunload", function(e){
   save();
}, false);

window.addEventListener("load", function(event) {
    load();
  });

function goldClick(number){
    addGold(number);
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("goldEarned").innerHTML = goldEarned;
};

function updateDisplayElements() {
    document.getElementById("pGBP").innerHTML = calculatePointsGained();
}