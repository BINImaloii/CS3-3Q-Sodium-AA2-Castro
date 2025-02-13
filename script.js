function finalPop() {
    let firstInputInitialPop = prompt("Give the value for initial population: ");
    let secondInputGrowthRate = prompt("Give the value for the rate of growth: ");
    let thirdInputTime = prompt("Give the value of Time in hours: ");

    let finalPopulation = Math.round(parseFloat(firstInputInitialPop) * Math.exp(parseFloat(secondInputGrowthRate) * parseFloat(thirdInputTime)));

    let locationMonster = prompt("Where is the location of the monster?: ");
    let nameOfMonster = prompt("What is the name of the monster?: ");
    
    let combination = locationMonster.toUpperCase() + " " + nameOfMonster.toUpperCase();

    document.getElementById("result").innerHTML = "After " + thirdInputTime + " hours, the population of " + combination + " has risen to " + finalPopulation;
}