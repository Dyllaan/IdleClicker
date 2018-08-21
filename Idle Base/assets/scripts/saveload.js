function save(){
    if(shouldSave) {
        localStorage.setItem("gold",JSON.stringify(gold));
        localStorage.setItem("goldEarned",JSON.stringify(goldEarned));
        localStorage.setItem("prestigePoints",JSON.stringify(prestigePoints));
        
        upgrades.forEach( function (arrayItem) {
            localStorage.setItem(arrayItem.name, JSON.stringify(arrayItem.count));
            localStorage.setItem(arrayItem.name + "Multiplier", JSON.stringify(arrayItem.multiplier));
        });
    }
}  

function load(){
    try {
        callUpgrades();
        gold = JSON.parse(localStorage["gold"]);
        goldEarned = JSON.parse(localStorage["goldEarned"]);
        prestigePoints = JSON.parse(localStorage["prestigePoints"]);
        document.getElementById("prestigePoints").innerHTML = prestigePoints;
        document.getElementById('gold').innerHTML = gold;  
        upgrades.forEach( function (arrayItem) {
            arrayItem.count = JSON.parse(localStorage.getItem(arrayItem.name));
            arrayItem.cost = Math.round(arrayItem.baseCost * Math.pow(1.1, arrayItem.count));
            arrayItem.button.innerHTML = arrayItem.name + " cost: " + arrayItem.cost + " power: " + arrayItem.power + "(" + arrayItem.count +")"; 
        
            arrayItem.multiplier = JSON.parse(localStorage.getItem(arrayItem.name + "Multiplier"));
            arrayItem.multiplierCost = Math.round(arrayItem.baseMultiplierCost * Math.pow(3, arrayItem.multiplier));
            arrayItem.multiplierButton.innerHTML = arrayItem.name + " x" + arrayItem.multiplier + " cost: " + arrayItem.multiplierCost;
        });
    } catch(err) {
        console.log("No save detected.")
    }
}  

function clearSave() {
    localStorage.clear();
    console.log("Clearing save");
    console.log(shouldSave);
    shouldSave = false;
    console.log(shouldSave);
}