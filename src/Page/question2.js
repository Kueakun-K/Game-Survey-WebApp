import React from "react";
import {useHistory} from "react-router-dom"

const Page2 = (data) => {
    const history = useHistory()
    var data2 = data.location.state
    
    function onClick(){
        var check1 = false;
        var check2 = false;
        var q1 = document.forms[0];
        var txt1 = "";
        for (var i = 0; i < q1.length; i++) {
            if (q1[i].checked) {
            txt1 = q1[i].value;
            }
        }
        if (txt1 === ""){
            alert("...")
        }
        else{
            check1 = true
        }

        var q2 = document.forms[1];
        var txt2 = "";
        for (var j = 0; j < q2.length; j++) {
            if (q2[j].checked) {
            txt2 = q2[j].value;
            }
        }
        if (txt2 === ""){
            alert("...")
        }
        else{
            check2 = true
        }
        data2[2] = txt1
        data2[3] = txt2
        
        if ((check1 === true ) && (check2 === true)){
            console.log(data)
            // console.log(data[1])
            history.push({
                pathname: "/result",
                state: data2
            })
        }
    }   
    return(
        <div>
            <form>
                <input type="radio" id="radio1" name="1" value="1"/>
                <label for="radio1">1</label>
                <input type="radio" id="radio2" name="1" value="2"/>
                <label for="radio2">2</label>
                <input type="radio" id="radio3" name="1" value="3"/>
                <label for="radio3">3</label>
            </form>
            <form>
                <input type="radio" id="radio11" name="2" value="3"/>
                <label for="radio1">3</label>
                <input type="radio" id="radio22" name="2" value="2"/>
                <label for="radio2">2</label>
                <input type="radio" id="radio33" name="2" value="1"/>
                <label for="radio3">1</label>
                <button onClick={onClick}>Click</button>
            </form>
        </div>
    );
}
export default Page2;