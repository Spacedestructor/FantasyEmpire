var Version = "TBA";
var Twitter = "https://www.twitter.com/spacedestructor";
var Mega = "https://mega.nz/#F!StxWBKLI!gl8h8d8vzIEyu1qHU1zrXQ";
var Space = {
    Name:'Space',
    Total:1000,
    Click:0,
    Second:0
},
Grain = {
    Name:'Grain',
    Total:0,
    Click:1,
    Second:0
},
Wood = {
    Name:'wood',
    Total:0,
    Click:1,
    Second:0
},
Stone = {
    Name:'Stone',
    Total:0,
    Click:0,
    Second:0
},
Coal = {
    Name:'Coal',
    Total:0,
    Click:0,
    Second:0
},
Iron = {
    Name:'Iron',
    Total:0,
    Click:0,
    Second:0
},
Gold = {
    Name:'Gold',
    Total:0,
    Click:0,
    Second:0
},
Knowledge = {
    Name:'Knowledge',
    Total:0,
    Click:0,
    Second:0
},
Synthe = {
    Name:'Synthe',
    Total:1,
    Click:1,
    Second:0
},
Axe = {
    Name:'Axe',
    Total:1,
    Click:1,
    Second:0
},
Pickaxe = {
    Name:'Pickaxe',
    Total:0,
    Click:0,
    Second:0
},
Hammer = {
    Name:'Hammer',
    Total:0,
    Click:0,
    Second:0
},
Sword = {
    Name:'Sword',
    Total:0,
    Click:0,
    Second:0
},
Book = {
    Name:'Book',
    Total:0,
    Click:0,
    Second:0
},
House = {
    Name:'House',
    Total:0,
    Click:0,
    Second:0
},
Farm = {
    Name:'Farm',
    Total:0,
    Click:0,
    Second:0
},
Lumbercamp = {
    Name:'Lumbercamp',
    Total:0,
    Click:0,
    Second:0
},
Mine = {
    Name:'Mine',
    Total:0,
    Click:0,
    Second:0
},
Castle = {
    Name:'Castle',
    Total:0,
    Click:0,
    Second:0
},
Barracks = {
    Name:'Barracks',
    Total:0,
    Click:0,
    Second:0,
},
Library = {
    Name:'Library',
    Total:0,
    Click:0,
    Second:0
},
StorageBuilding = {
    Name:'Storage',
    Total:0,
    Click:0,
    Second:0
},
Population = {
    Name:'Population',
    Total:0,
    Click:0,
    Second:0
},
Farmer = {
    Name:'Farmer',
    Total:0,
    Click:0,
    Second:0
},
Woodcutter = {
    Name:'Woodcutter',
    Total:0,
    Click:0,
    Second:0
},
Miner = {
    Name:'Miner',
    Total:0,
    Click:0,
    Second:0
},
Blacksmith = {
    Name:'Blacksmith',
    Total:0,
    Click:0,
    Second:0
},
Wiseman = {
    Name:'Wiseman',
    Total:0,
    Click:0,
    Second:0
},
Scout = {
    Name:'Scout',
    Total:0,
    Click:0,
    Second:0
},
Knight = {
    Name:'Knight',
    Total:0,
    Click:0,
    Second:0
},
General = {
    Name:'General',
    Total:0,
    Click:0,
    Second:0
},
EmpireStorage = {
    Name:'Empire Storage',
    Total:1000,
    Click:0,
    Second:0
},
SessionCounter,
Category = 'Overview',
Saved = {
    SaveRessurces,
    SaveUpgrades,
    SaveBuildings,
    SavePopulation
},
SaveRessurces = {
    Space,
    Grain,
    Wood,
    Stone,
    Coal,
    Iron,
    Gold,
    Knowledge
},
SaveUpgrades = {
    Synthe,
    Axe,
    Pickaxe,
    Hammer,
    Sword,
    Book
},
SaveBuildings = {
    House,
    Farm,
    Lumbercamp,
    Mine,
    Castle,
    Barracks,
    Library,
    StorageBuilding
},
SavePopulation = {
    Population,
    Farmer,
    Woodcutter,
    Miner,
    Blacksmith,
    Wiseman,
    Scout,
    Knight,
    General
};

function counter() {
    localStorage.getItem('SessionCounter', SessionCounter)
    if (SessionCounter = 0) {
        SessionCounter = SessionCounter + 1
        document.getElementById("sessions").innerHTML = SessionCounter,
        localStorage.setItem('SessionCounter', SessionCounter);
    } else {
        if (SessionCounter > 0) {
            
        } else {
            SessionCounter = 0,
            localStorage.setItem('SessionCounter', SessionCounter),
            counter();
        }
    }
}

function Save() {
localStorage.setItem('SavedRessurces', SaveRessurces)
}

function Preset(){
    Space = {
        Name:'Space',
        Total:1000,
        Click:0,
        Second:0
    },
    Grain = {
        Name:'Grain',
        Total:0,
        Click:1,
        Second:0
    },
    Wood = {
        Name:'wood',
        Total:0,
        Click:1,
        Second:0
    },
    Stone = {
        Name:'Stone',
        Total:0,
        Click:0,
        Second:0
    },
    Coal = {
        Name:'Coal',
        Total:0,
        Click:0,
        Second:0
    },
    Iron = {
        Name:'Iron',
        Total:0,
        Click:0,
        Second:0
    },
    Gold = {
        Name:'Gold',
        Total:0,
        Click:0,
        Second:0
    },
    Knowledge = {
        Name:'Knowledge',
        Total:0,
        Click:0,
        Second:0
    },
    Synthe = {
        Name:'Synthe',
        Total:1,
        Click:1,
        Second:0
    },
    Axe = {
        Name:'Axe',
        Total:1,
        Click:1,
        Second:0
    },
    Pickaxe = {
        Name:'Pickaxe',
        Total:0,
        Click:0,
        Second:0
    },
    Hammer = {
        Name:'Hammer',
        Total:0,
        Click:0,
        Second:0
    },
    Sword = {
        Name:'Sword',
        Total:0,
        Click:0,
        Second:0
    },
    Book = {
        Name:'Book',
        Total:0,
        Click:0,
        Second:0
    },
    House = {
        Name:'House',
        Total:0,
        Click:0,
        Second:0
    },
    Farm = {
        Name:'Farm',
        Total:0,
        Click:0,
        Second:0
    },
    Lumbercamp = {
        Name:'Lumbercamp',
        Total:0,
        Click:0,
        Second:0
    },
    Mine = {
        Name:'Mine',
        Total:0,
        Click:0,
        Second:0
    },
    Castle = {
        Name:'Castle',
        Total:0,
        Click:0,
        Second:0
    },
    Barracks = {
        Name:'Barracks',
        Total:0,
        Click:0,
        Second:0,
    },
    Library = {
        Name:'Library',
        Total:0,
        Click:0,
        Second:0
    },
    StorageBuilding = {
        Name:'Storage',
        Total:0,
        Click:0,
        Second:0
    },
    Population = {
        Name:'Population',
        Total:0,
        Click:0,
        Second:0
    },
    Farmer = {
        Name:'Farmer',
        Total:0,
        Click:0,
        Second:0
    },
    Woodcutter = {
        Name:'Woodcutter',
        Total:0,
        Click:0,
        Second:0
    },
    Miner = {
        Name:'Miner',
        Total:0,
        Click:0,
        Second:0
    },
    Blacksmith = {
        Name:'Blacksmith',
        Total:0,
        Click:0,
        Second:0
    },
    Wiseman = {
        Name:'Wiseman',
        Total:0,
        Click:0,
        Second:0
    },
    Scout = {
        Name:'Scout',
        Total:0,
        Click:0,
        Second:0
    },
    Knight = {
        Name:'Knight',
        Total:0,
        Click:0,
        Second:0
    },
    General = {
        Name:'General',
        Total:0,
        Click:0,
        Second:0
    },
    EmpireStorage = {
        Name:'Empire Storage',
        Total:1000,
        Click:0,
        Second:0
    },
    SessionCounter,
    CategoryResurces = true
};

function SelectCategory(Category){
    if (Category == 'Overview') {
        document.getElementById('Buttons').innerHTML = {

        }
    }
    if (Category == 'Ressurces') {

    }
    if ( Category == 'Upgrades') {

    }
    if (Category == 'Buildings') {

    }
    if (Category == 'Population') {

    }
}

function HarvestGrain(){
    if (Grain.Total + Synthe.Total < Grain.Max){
        Grain.Total = Grain.Total + Synthe.Total
        document.getElementById("Grain").innerHTML = Grain.Total;
    } else {
        var count = 0,
        while (Grain.Total < Grain.Max && count < Synthe.Total) {
        Grain.Total = Grain.Total + 1,
        count = count + 1;
        }
    }
}

function CollectWood(){
    if (Wood.Total + Axe.Click < Wood.Max){
        Wood.Total = Wood.Total + Axe.Click
        document.getElementById("Wood").innerHTML = Wood.Total;
    } else {
        var count = 0,
        while (Wood.Total < Wood.Max && count < Axe.Total) {
            Wood.Total = Wood.Total + 1,
            count = count + 1;
        }
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

onload: (this.window), counter();