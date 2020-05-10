function TrainPopulation(){
    while(Population.Total < Population.Maximum)
    {
        Population.Total = Population.Total + Population.Second
        console.log("Population: " + Population.Total)
    }
}

function test(){
    PopulationTrainingID = setInterval(TrainPopulation, 1000);
}
