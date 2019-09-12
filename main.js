var Version = "TBA";
var Twitter = "https://www.twitter.com/spacedestructor";
var Mega = "https://mega.nz/#F!StxWBKLI!gl8h8d8vzIEyu1qHU1zrXQ";
var Space = {
    Total:1000,
    Click:1000,
    Second:0,
    Max:1000
},
Grain = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Wood = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Stone = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Coal = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Iron = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Gold = {
    Total:0,
    Click:1,
    Second:0,
    Max:100
},
Knowledge = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Synthe = {
    Total:1,
    Click:1,
    Second:0,
    Max:1000,
},
Axe = {
    Total:1,
    Click:1,
    Second:0,
    Max:1000,
},
Pickaxe = {
    Total:1,
    Click:1,
    Second:0,
    Max:1000
},
Hammer = {
    Total:1,
    Click:1,
    Second:0,
    Max:1000
},
Sword = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Book = {
    Total:0,
    Click:1,
    Second:0,
    Max:1000
},
Population = {
    Total:0,
    Click:0,
    Second:0,
    Max:1000
},
House = {
    Total:0,
    Click:1,
    Second:0
},
Farm = {
    Total:0,
    Click:1,
    Second:0
},
Lumbercamp = {
    Total:0,
    Click:1,
    Second:0
},
Mine = {
    Total:0,
    Click:1,
    Second:0
},
Castle = {
    Total:0,
    Click:1,
    Second:0
},
Barracks = {
    Total:0,
    Click:1,
    Second:0,
},
Library = {
    Total:0,
    Click:1,
    Second:0
},
Farmer = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
Woodcutter = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
Miner = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
Blacksmith = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
Wiseman = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
Scout = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
Knight = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
General = {
    Total:0,
    Click:1,
    Second:0,
    Max:0
},
EmpireStorage = {
    Total:1000,
    Click:1000,
    Second:0
},
browserdoeslocalstorage,
SessionCounter,
CategoryResurces = true;

if (typeof(window.localStorage) !== "undefined") {
    browserdoeslocalstorage == "Great, your Browser does support games save function!",
    document.getElementById("savefunction").innerHTML = browserdoeslocalstorage;
} else {
    browserdoeslocalstorage == "Oh nno, your Browser does not support games save function!",
    document.getElementById("savefunction").innerHTML = browserdoeslocalstorage;
}
CountSession();
    counter();

function counter() {
    if (SessionCounter >= 0) {
        SessionCounter = SessionCounter + 1;
        document.getElementById("sessions").innerHTML = SessionCounter;
    }
    else {
        SessionCounter = 0,
            CountSession();
    }
}

function Preset(){
    Space = {
        Total:1000,
        Click:1000,
        Second:0,
        Max:1000
    },
    Grain = {
        Total:0,
        Click:1,
        Second:0,
        Max:1000
    },
    Wood = {
        Total:0,
        Click:1,
        Second:0,
        Max:1000
    },
    Stone,
    Coal,
    Iron,
    Gold,
    Knowledge,
    Synthe,
    Axe,
    Pickaxe,
    Hammer,
    Sword,
    Book,
    Population,
    House,
    Farm,
    Lumbercamp,
    Mine,
    Castle,
    Barracks,
    Library,
    Farmer,
    Woodcutter,
    Miner,
    Blacksmith,
    Wiseman,
    Scout,
    Knight,
    General
}

function SwitchCategory(){
}

function HarvestGrain(){
    if (Grain.Total + Synthe.Total < Grain.Max){
        Grain.Total = Grain.Total + Synthe.Total
        document.getElementById("Grain").innerHTML = Grain.Total;
    }
}

function CollectWood(){
    if (Wood.Total + Axe.Click < Wood.Max){
        Wood.Total = Wood.Total + Axe.Click
        document.getElementById("Wood").innerHTML = Wood.Total;
    }
}

function Mining(){
    Stone.Total = Stone.Total + Pickaxe.Total
    document.getElementById("Stone").innerHTML = Stone.Total;
    Iron.Total = Iron.Total + Pickaxe.Total
    document.getElementById("Iron").innerHTML = Iron.Total;
    Gold = Gold.Total + number
    document.getElementById("Gold").innerHTML = Gold.Total;
}

function IncreasePopulation(number){
    if (Population < MaxPopulation){
        Population = Population + number
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

function BuildHouse(number){
    House = House + number
    MaxPopulation = MaxPopulation + 10
    document.getElementById("House").innerHTML = House;
}

function BuildFarm(number){
    Farm = Farm + number
    MaxFarmer = MaxFarmer + 10
    document.getElementById("Farm").innerHTML = Farm * " Farm";
}

function BuildLumbercamp(){
    Lumbercamp = Lumbercamp + 1
    MaxWoodcutter = MaxWoodcutter + 10
    document.getElementById("Lumbercamp").innerHTML = Lumbercamp;
}

function BuildMine(){
    Mine = Mine + 1
    MaxMiner = MaxMiner + 10
    document.getElementById("Mine").innerHTML = Mine;
}
