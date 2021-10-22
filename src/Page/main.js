import React from "react";
// import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";

const Main = () => {
    // const history = useHistory()
    // function click(){
    //     history.push('/page1')
    // }
    return(
        <div class="content">
            <div class="card">
                <p>WHAT'S YOUR NAME ?</p>
            </div>
            <div class="card">
                <form>
                    {/* <label for="name">NAME :</label> */}
                    <input type="text" id="name" placeholder="Your name.."></input>
                </form>
            </div>
            <div class="card">
                <p>READY FOR TESTING ?</p>
            </div>
            <div class="card">
                <Link to="/page1">LET'S GO !</Link>
            </div>
        </div>
        
    );
    
}

export default Main;