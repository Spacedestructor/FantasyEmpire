function TrainPopulation(){
    while(Population.Total < Population.Maximum)
    {
        Population.Total = Population.Total + 1
        console.log(Population.Total)
    }
}

function test(){
    PopulationTrainingID = setInterval(TrainPopulation, 1000);
}
