function BuildHouse(number){
    House=House+number
    MaxPopulation=MaxPopulation+10
    document.getElementById("House").innerHTML=House;
}
function BuildFarm(number){
    Farm=Farm+number
    MaxFarmer=MaxFarmer+10
    document.getElementById("Farm").innerHTML=Farm;
}
function BuildLumbercamp(){
    Lumbercamp=Lumbercamp+1
    MaxWoodcutter=MaxWoodcutter+10
    document.getElementById("Lumbercamp").innerHTML=Lumbercamp;
}
function BuildMine(){
    Mine=Mine+1
    MaxMiner=MaxMiner+10
    document.getElementById("Mine").innerHTML=Mine;
}
