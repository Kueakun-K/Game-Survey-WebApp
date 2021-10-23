import React from "react";
// import {useHistory} from "react-router-dom"

const Result = (data) =>{
    // const history = useHistory()
    var result = data.location.state
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
    console.log(EuclidianValue)
    console.log(temp)
    console.log(NameTypeGame[count])
    
return(
    <div>
        <span style={{color: "white"}}>{game}</span>
    </div>
);
}
export default Result
