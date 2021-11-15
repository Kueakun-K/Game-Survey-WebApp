import React from "react"

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

    const game = result[0]
    const name = result[1]
    const gameCOV = result[2]

    console.log(result)
    
    function show(){
        if (game === "Adventure")
            document.getElementById("Adventure").style.display = "flex";
        else if (game === "Fighting")
            document.getElementById("Fighting").style.display = "flex";
        else if (game === "Moba")
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

        if (gameCOV === "Adventure")
            document.getElementById("AdventureCOV").style.display = "flex";
        else if (gameCOV === "Fighting")
            document.getElementById("FightingCOV").style.display = "flex";
        else if (gameCOV === "Moba")
            document.getElementById("MOBACOV").style.display = "flex";
        else if (gameCOV === "Puzzle")
            document.getElementById("PuzzleCOV").style.display = "flex";
        else if (gameCOV === "RPG")
            document.getElementById("RPGCOV").style.display = "flex";
        else if (gameCOV === "Shooting")
            document.getElementById("ShootingCOV").style.display = "flex";
        else if (gameCOV === "Sport")
            document.getElementById("SportCOV").style.display = "flex";
        else if (gameCOV === "Simulation")
            document.getElementById("SimulationCOV").style.display = "flex";
        else if (gameCOV === "Strategy")
            document.getElementById("StrategyCOV").style.display = "flex";
        else if (gameCOV === "SurvivalHorror")
            document.getElementById("HorrorCOV").style.display = "flex";
    } 
return( 
    <div >
        <div class="resultMess">
            <div class="resultMessH">
                <h1>{name}</h1>
            </div>
        </div>

        <div class="result">   
            <div class="resultpre" id="Adventure">
                <img src={AdventureIMG} alt="Adventure"></img>
            </div>
            <div class="resultpre" id="Fighting">
                <img src={FightingIMG} alt="Fighting"></img>
            </div>
            <div class="resultpre" id="MOBA">
                <img src={MOBAIMG} alt="MOBA"></img>
            </div>
            <div class="resultpre" id="Puzzle">
                <img src={PuzzleIMG} alt="Puzzle"></img>
            </div>
            <div class="resultpre" id="RPG">
                <img src={RPGIMG} alt="RPG"></img>
            </div>
            <div class="resultpre" id="Shooting">
                <img src={ShootingIMG} alt="Shooting"></img>
            </div>
            <div class="resultpre" id="Sport">
                <img src={SportIMG} alt="Sport"></img>
            </div>
            <div class="resultpre" id="Simulation">
                <img src={SimulationIMG} alt="Simulation"></img>
            </div>
            <div class="resultpre" id="Strategy">
                <img src={StrategyIMG} alt="Strategy"></img>
            </div>
            <div class="resultpre" id="Horror">
                <img src={SurvivalHorrorIMG} alt="Horror"></img>
            </div>

            <div class="resultpost" id="AdventureCOV">
                <img src={AdventureIMG} alt="Adventure"></img>
            </div>
            <div class="resultpost" id="FightingCOV">
                <img src={FightingIMG} alt="Fighting"></img>
            </div>
            <div class="resultpost" id="MOBACOV">
                <img src={MOBAIMG} alt="MOBA"></img>
            </div>
            <div class="resultpost" id="PuzzleCOV">
                <img src={PuzzleIMG} alt="Puzzle"></img>
            </div>
            <div class="resultpost" id="RPGCOV">
                <img src={RPGIMG} alt="RPG"></img>
            </div>
            <div class="resultpost" id="ShootingCOV">
                <img src={ShootingIMG} alt="Shooting"></img>
            </div>
            <div class="resultpost" id="SportCOV">
                <img src={SportIMG} alt="Sport"></img>
            </div>
            <div class="resultpost" id="SimulationCOV">
                <img src={SimulationIMG} alt="Simulation"></img>
            </div>
            <div class="resultpost" id="StrategyCOV">
                <img src={StrategyIMG} alt="Strategy"></img>
            </div>
            <div class="resultpost" id="HorrorCOV">
                <img src={SurvivalHorrorIMG} alt="Horror"></img>
            </div>
        </div>
        <div class="resultMess">
            <div class="resultMessP">
                <h1>Euclidian</h1>
            </div>
            <div class="resultMessP">
                <h1>Covariance</h1>
            </div>
        </div>
        <div style={{display: "none"}}>{setTimeout(show,10)}</div>
    </div>
);
}
export default Result;
