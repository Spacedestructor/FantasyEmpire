function IncreasePopulation(){
    if (Population < MaxPopulation){
        Population = Population + 10,
        document.getElementById("Population").innerHTML = Population;
    }
}
function IncreaseFarmer(number){
    if (Famer < MaxFamer) {
        Farmer = Farmer + number
        GrainPerSecond = GrainPerSecond + number
        document.getElementById("Farmer").innerHTML = Farmer;
    }
}
function IncreaseWoodcutter(){
    if (Woodcutter < MaxWoodcutter) {
        Woodcutter = Woodcutter + 1
        document.getElementById("Woodcutter").innerHTML = Woodcutter;
    }
}
function IncreaseMiner(){
    if (Miner < MaxMiner)
    Miner = Miner + 1
    document.getElementById("Miner").innerHTML = Miner;
}