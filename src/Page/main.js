import React from "react";
import {useHistory} from "react-router-dom"

const Main = () => {
    const history = useHistory()
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    function click(){
        history.push({pathname: "/page1"})
    }
    return(
        <div>
        <div class="contentmain">
            <div class="card">
                <p>WHAT'S YOUR NAME ?</p>
            </div>
            <div class="card">
                <form>
                    <input type="text" id="name" placeholder="YOUR NAME"></input>
                </form>
            </div>
            <div class="card">
                <p>READY FOR TESTING ?</p>                  
            </div>
            </div>
            <div class="card">
                <button onClick={click} class="btn">LET'S GO !</button>
            </div>
            {/* <div class="card">
                <div class="ad"></div>
                <div class="ad1"></div>
                <div class="ad2"></div>
            </div> */}
        </div>
    );
    
}

export default Main;