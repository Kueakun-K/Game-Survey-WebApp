import React from "react"
// import axios from "axios"
// import {useHistory} from "react-router-dom"

const Result = (data) =>{
    // const history = useHistory()
    var result = data.location.state
    
    
    // axios.post("https://backend-linear.herokuapp.com/api/data", {
    //     dataName: name,
    //     dataGame: game
    // }).then(()=>{
        // let count = 1
        // console.log("Test %d",count)
        // count += 1
        // if (typegame === "Adventure")
        //     history.push('/result/Adventure')
        // else if (typegame === "Fighting")
        //     history.push('/result/Fighting')
        // else if (typegame === "Moba")
        //     history.push('/result/Moba')
        // else if (typegame === "Puzzle")
        //     history.push('/result/Puzzle')
        // else if (typegame === "RPG")
        //     history.push('/result/RPG')
        // else if (typegame === "Shooting")
        //     history.push('/result/Shooting')
        // else if (typegame === "Sport")
        //     history.push('/result/Sport')
        // else if (typegame === "Simulation")
        //     history.push('/result/Simulation')
        // else if (typegame === "Strategy")
        //     history.push('/result/Strategy')
        // else if (typegame === "SurvivalHorror")
            // history.push('/result/Horror')
            // })
    
return(
    <div>
        <h1>{result}</h1>
    </div>
);
}
export default Result
