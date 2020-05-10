/*
console.log() gives out a normal console message
console.info() gives out a info themed message
console.warn() gives out a warning themed message
console.error() gives out a error themed message
*/
var Version = "Experimental 2",
    Twitter = "https://www.twitter.com/spacedestructor",
    SessionCounter = 0,
    Space = {
        Name: 'Space',
        Total: 1000,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Grain = {
        Name: 'Grain',
        Total: 0,
        Click: 1,
        Second: 0,
        Maximum: 1000
    },
    Wood = {
        Name: 'wood',
        Total: 0,
        Click: 1,
        Second: 0,
        Maximum: 1000
    },
    Stone = {
        Name: 'Stone',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Coal = {
        Name: 'Coal',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Iron = {
        Name: 'Iron',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Gold = {
        Name: 'Gold',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Knowledge = {
        Name: 'Knowledge',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Synthe = {
        Name: 'Synthe',
        Total: 1,
        Click: 1,
        Second: 0,
        Maximum: 1000
    },
    Axe = {
        Name: 'Axe',
        Total: 1,
        Click: 1,
        Second: 0,
        Maximum: 1000
    },
    Pickaxe = {
        Name: 'Pickaxe',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Hammer = {
        Name: 'Hammer',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Sword = {
        Name: 'Sword',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Book = {
        Name: 'Book',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000,
    },
    House = {
        Name: 'House',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Farm = {
        Name: 'Farm',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Lumbercamp = {
        Name: 'Lumbercamp',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Mine = {
        Name: 'Mine',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Castle = {
        Name: 'Castle',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Barracks = {
        Name: 'Barracks',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Library = {
        Name: 'Library',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    StorageBuilding = {
        Name: 'Storage',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Population = {
        Name: 'Population',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Farmer = {
        Name: 'Farmer',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Woodcutter = {
        Name: 'Woodcutter',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Miner = {
        Name: 'Miner',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Blacksmith = {
        Name: 'Blacksmith',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Wiseman = {
        Name: 'Wiseman',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Scout = {
        Name: 'Scout',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    Knight = {
        Name: 'Knight',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    General = {
        Name: 'General',
        Total: 0,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    EmpireStorage = {
        Name: 'Empire Storage',
        Total: 1000,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
    PopulationTrainingID;

function Preset() {
    Space = {
        Name: 'Space',
        Total: 1000,
        Click: 0,
        Second: 0,
        Maximum: 1000
    },
        Grain = {
            Name: 'Grain',
            Total: 0,
            Click: 1,
            Second: 0,
            Maximum: 1000
        },
        Wood = {
            Name: 'wood',
            Total: 0,
            Click: 1,
            Second: 0,
            Maximum: 1000
        },
        Stone = {
            Name: 'Stone',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Coal = {
            Name: 'Coal',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Iron = {
            Name: 'Iron',
            Total: 0,
            Click: 0,
            Second: 0
        },
        Gold = {
            Name: 'Gold',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Knowledge = {
            Name: 'Knowledge',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Synthe = {
            Name: 'Synthe',
            Total: 1,
            Click: 1,
            Second: 0,
            Maximum: 1000
        },
        Axe = {
            Name: 'Axe',
            Total: 1,
            Click: 1,
            Second: 0,
            Maximum: 1000
        },
        Pickaxe = {
            Name: 'Pickaxe',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Hammer = {
            Name: 'Hammer',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Sword = {
            Name: 'Sword',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Book = {
            Name: 'Book',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        House = {
            Name: 'House',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Farm = {
            Name: 'Farm',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Lumbercamp = {
            Name: 'Lumbercamp',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Mine = {
            Name: 'Mine',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Castle = {
            Name: 'Castle',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Barracks = {
            Name: 'Barracks',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Library = {
            Name: 'Library',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        StorageBuilding = {
            Name: 'Storage',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Population = {
            Name: 'Population',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Farmer = {
            Name: 'Farmer',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Woodcutter = {
            Name: 'Woodcutter',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Miner = {
            Name: 'Miner',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Blacksmith = {
            Name: 'Blacksmith',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Wiseman = {
            Name: 'Wiseman',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Scout = {
            Name: 'Scout',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        Knight = {
            Name: 'Knight',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        General = {
            Name: 'General',
            Total: 0,
            Click: 0,
            Second: 0,
            Maximum: 1000
        },
        EmpireStorage = {
            Name: 'Empire Storage',
            Total: 1000,
            Click: 0,
            Second: 0,
            Maximum: 1000
        }
};

document.title = `${window.location.hrf}:${window.location.port}`;

if (!window.localStorage.getItem('SessionCounter')) {
    console.log('Looks like we dont have a Session counter, assuming this is a first load!'),
        console.log('Creating Session counter...'),
        window.localStorage.setItem('SessionCounter', 1),
        console.log('Testing Session counter...'),
        console.log(SessionCounter),
        Preset(),
        console.log("Using Preset!");
}
else if (window.localStorage.getItem('SessionCounter') == 'undefined') {
    console.log('Looks like the SessionCounter is empty, will set to 1 and assume this is a first load!'),
        SessionCounter = 1,
        window.localStorage.setItem('SessionCounter', SessionCounter),
        console.log('Setting Session Counter to:', SessionCounter);
}
else if (!isNaN(window.localStorage.getItem('SessionCounter')) && window.localStorage.getItem('SessionCounter') > 0) {
    SessionCounter = window.localStorage.getItem('SessionCounter'),
        SessionCounter = parseFloat(SessionCounter) + 1,
        window.localStorage.setItem('SessionCounter', SessionCounter),
        console.log('Welcome back, this is session number', window.localStorage.getItem('SessionCounter')),
        window.document.getElementById('sessions').innerText = window.localStorage.getItem('SessionCounter');
}
else if (isNaN(window.localStorage.getItem('SessionCounter'))) {
    console.log('Uh oh, something went wrong here. Session Counter is set to', SessionCounter),
        console.log('Resetting Session Counter...'),
        SessionCounter = 1,
        window.localStorage.setItem('SessionCounter', SessionCounter),
        window.document.getElementById('sessions').innerText = window.localStorage.getItem('SessionCounter');
}