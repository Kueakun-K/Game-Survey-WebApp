import React from "react";

import AdventureIMG from "../pic/adventure.jpg"
import FightingIMG from "../pic/fighting.jpg"
import MOBAIMG from "../pic/moba.jpg"
import PuzzleIMG from "../pic/puzzle.jpg"
import RPGIMG from "../pic/RPG.jpg"
import ShootingIMG from "../pic/shooting.jpg"
import SportIMG from "../pic/sport.jpg"
import SimulationIMG from "../pic/simulation.jpg"
import StrategyIMG from "../pic/stategy.jpg"
import SurvivalHorrorIMG from "../pic/horror.jpg"


const Result = (data) =>{
    var result = data.location.state
    
    var name = result.pop()
    result = result.map(Number)

    const NameTypeGame =["Adventure","Fighting","Moba","Puzzle","RPG","Shooting","Sport","Simulation","Strategy","SurvivalHorror"]

    const Adventure = [4.3333,4.4667,4.2000,4.1333,4.6667,4.6000,3.8667,3.4000,4.2667,
        4.5333,4.4667,2.8667,3.5333,4.4667,3.8667,3.3333,4.6000,4.9333]
        
    const Fighting = [4.4667,4.4000,3.7333,4.2000,3.1333,3.2000,4.8000,4.7333,3.2000,
            3.6000,3.0667,2.9333,3.0667,3.2000,4.4000,3.3333,4.4667,3.0000]

    const Moba = [3.7647,	3.9412,	3.0000,3.8824,3.2941,4.0588,4.6471,4.2353,4.6471,
        4.0588,4.3529,2.9412,3.3529,3.6471,4.5294,4.5882,4.3529,3.0588]

    const Puzzle = [2.4667,3.6667,4.7333,2.1333,4.3333,4.6667,1.7333,1.9333,4.7333,
        4.2000,4.8667,1.8000,2.1333,2.2000,3.2667,2.2667,3.9333,2.6667]

    const RPG = [4.5333,4.4000,3.8667,4.8000,4.5333,4.7333,4.7333,3.5333,3.7333,
        4.2667,3.8667,2.1333,3.0000,3.6000,4.6000,3.3333,4.6000,4.6000]

    const Shooting = [3.3158,4.7895,3.0000,4.7368,3.5263,3.8947,4.8421,4.2632,4.7368,
            4.4211,4.6316,3.4211,4.2105,4.3158,4.2632,4.7368,4.4211,3.0526]

    const Sport = [4.0000,4.2667,3.0000,1.9333,3.2667,3.6667,2.4000,2.8667,4.2000,
        3.5333,4.2000,4.5333,2.8667,1.6667,2.5333,4.3333,4.5333,2.0000]

    const Simulation = [4.4667,4.8667,2.2000,3.2000,3.8000,3.4000,2.8000,2.2000,1.7333,
            4.6000,3.8667,2.5333,2.8000,4.1333,2.6667,2.5333,4.6667,4.5333]

    const Strategy = [3.2941,4.0588,3.5882,3.6471,3.2941,3.5294,3.8824,2.9412,4.8235,
            4.5294,4.7059,2.000,2.8824,2.9412,3.4118,4.2353,4.4706,2.9412]

    const SurvivalHorror = [4.7333,4.7333,3.8000,2.2667,4.600,3.2000,1.8000,1.6000,3.6000,
                4.0667,3.2000,1.3333,5.0000,4.6000,2.5333,2.6667,4.8667,4.2000]

       
    var EuclidianValue = []
                
    function Euclidian(standard,user){
        let value = 0
        for (let i = 0 ;i < 18 ;i++){
            value += standard[i] - user[i]
        }
        value = Math.pow(value, 2)
        return Math.sqrt(value)
    }

    EuclidianValue.push(Euclidian(Adventure,result))
    EuclidianValue.push(Euclidian(Fighting,result))
    EuclidianValue.push(Euclidian(Moba,result))
    EuclidianValue.push(Euclidian(Puzzle,result))
    EuclidianValue.push(Euclidian(RPG,result))
    EuclidianValue.push(Euclidian(Shooting,result))
    EuclidianValue.push(Euclidian(Sport,result))
    EuclidianValue.push(Euclidian(Simulation,result))
    EuclidianValue.push(Euclidian(Strategy,result))
    EuclidianValue.push(Euclidian(SurvivalHorror,result))

    var temp = []
    for (let j = 0; j<10;j++){
        temp.push(EuclidianValue[j])
    }
    temp.sort()

    var count = 0
    for (let k = 0; k< 10;k++){
        if (temp[0] !== EuclidianValue[k]){
            count += 1
        }
        else{
            break
        }
    }

    const game = NameTypeGame[count]
    console.log(result)
    console.log(game)
    console.log(name)
    function show(){
        if (game === "Adventure")
            document.getElementById("Adventure").style.display = "flex";
        else if (game === "Fighting")
            document.getElementById("Fighting").style.display = "flex";
        else if (game === "MOBA")
            document.getElementById("MOBA").style.display = "flex";
        else if (game === "Puzzle")
            document.getElementById("Puzzle").style.display = "flex";
        else if (game === "RPG")
            document.getElementById("RPG").style.display = "flex";
        else if (game === "Shooting")
            document.getElementById("Shooting").style.display = "flex";
        else if (game === "Sport")
            document.getElementById("Sport").style.display = "flex";
        else if (game === "Simulation")
            document.getElementById("Simulation").style.display = "flex";
        else if (game === "Strategy")
            document.getElementById("Strategy").style.display = "flex";
        else if (game === "SurvivalHorror")
            document.getElementById("Horror").style.display = "flex";
    }  
    
return(
    <div >   
        <div class="result" id="Adventure">
            <img src={AdventureIMG} alt="Adventure"></img>
        </div>
        <div class="result" id="Fighting">
            <img src={FightingIMG} alt="Fighting"></img>
        </div>
        <div class="result" id="MOBA">
            <img src={MOBAIMG} alt="MOBA"></img>
        </div>
        <div class="result" id="Puzzle">
            <img src={PuzzleIMG} alt="Puzzle"></img>
        </div>
        <div class="result" id="RPG">
            <img src={RPGIMG} alt="RPG"></img>
        </div>
        <div class="result" id="Shooting">
            <img src={ShootingIMG} alt="Shooting"></img>
        </div>
        <div class="result" id="Sport">
            <img src={SportIMG} alt="Sport"></img>
        </div>
        <div class="result" id="Simulation">
            <img src={SimulationIMG} alt="Simulation"></img>
        </div>
        <div class="result" id="Strategy">
            <img src={StrategyIMG} alt="Strategy"></img>
        </div>
        <div class="result" id="Horror">
            <img src={SurvivalHorrorIMG} alt="Horror"></img>
        </div>
        <div style={{display: "none"}}>{setTimeout(show,10)}</div>
    </div>
);
}
export default Result
