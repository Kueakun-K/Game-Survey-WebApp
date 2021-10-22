import React from "react";
// import {useHistory} from "react-router-dom"

const Result = (data) =>{
    // const history = useHistory()
    var result = data.location.state
    
return(
    <div>
        <span style={{color: "white"}}>{result}</span>
    </div>
);
}
export default Result
