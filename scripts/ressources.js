function MineStone() {
    Stone.Total = Stone.Total + Pickaxe.Total,
    document.getElementById("Stone").innerHTML = Stone.Total;
}
function MineIron() {
    Iron.Total = Iron.Total + Pickaxe.Total,
    document.getElementById("Iron").innerHTML = Iron.Total;
}
function MineGold() {
    Gold.Total = Gold.Total + Pickaxe.Total,
    document.getElementById("Gold").innerHTML = Gold.Total;
}
function MineCoal() {
    Coal.Total = Coal.Total + Pickaxe.Total,
    document.getElementById("Gold").innerHTML = Coal.Total;
}
function HarvestGrain() {
    if (Grain.Max > Grain.Total + Synthe.Total) {
        Grain.Total = Grain.Total + Synthe.Total,
        document.getElementById("Grain").innerHTML = Grain.Total;
    } else {
        Console.log('You dont have enough Storage for that Grain!');
    }
}
function CollectWood() {
    if (Wood.Total + Axe.Click < Wood.Max) {
        Wood.Total = Wood.Total + Axe.Click,
        document.getElementById("Wood").innerHTML = Wood.Total;
    } else {
        Console.log('You dont have enough Storage for that Wood!');
    }
}