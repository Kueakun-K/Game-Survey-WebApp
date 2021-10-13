import React from "react";
import {useHistory} from "react-router-dom"

const Page1 = () => {
    const history = useHistory()
    var data = []
    
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
        data[0] = txt1
        data[1] = txt2
        
        if ((check1 === true ) && (check2 === true)){
            console.log(data)
            history.push({
                pathname: "/page2",
                state: data
            })
        }
    }   
    return(
            <div class="content">
                <div class="card">
                    <span class="span">การสวมบทบาทเป็นตัวละครในเกม</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1" />
                            <span class="check">1</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <span class="check">2</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <span class="check">3</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <span class="check">4</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <span class="check">5</span>
                        </label>
                    </form>
                </div>
                <div ><hr/></div>
                <div class="card">
                    <span>การตัดสินใจการกระทำของตัวละครตัวเองได้</span>
                    <form>
                        <input type="radio" id="radio2_1" name="2" value="1"/>
                        <label for="radio2_1">1</label>
                        <input type="radio" id="radio2_2" name="2" value="2"/>
                        <label for="radio2_2">2</label>
                        <input type="radio" id="radio2_3" name="2" value="3"/>
                        <label for="radio2_3">3</label>
                        <input type="radio" id="radio2_4" name="2" value="4"/>
                        <label for="radio2_4">4</label>
                        <input type="radio" id="radio2_5" name="2" value="5"/>
                        <label for="radio2_5">5</label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>การเล่นผ่านด่านไปเรื่อยๆ</span>
                    <form>
                        <input type="radio" id="radio3_1" name="3" value="1"/>
                        <label for="radio3_1">1</label>
                        <input type="radio" id="radio3_2" name="3" value="2"/>
                        <label for="radio3_2">2</label>
                        <input type="radio" id="radio3_3" name="3" value="3"/>
                        <label for="radio3_3">3</label>
                        <input type="radio" id="radio3_4" name="3" value="4"/>
                        <label for="radio3_4">4</label>
                        <input type="radio" id="radio3_5" name="3" value="5"/>
                        <label for="radio3_5">5</label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>การใช้อาวุธต่างๆ ในการต่อสู้</span>
                    <form>
                        <input type="radio" id="radio4_1" name="4" value="1"/>
                        <label for="radio4_1">1</label>
                        <input type="radio" id="radio4_2" name="4" value="2"/>
                        <label for="radio4_2">2</label>
                        <input type="radio" id="radio4_3" name="4" value="3"/>
                        <label for="radio4_3">3</label>
                        <input type="radio" id="radio4_4" name="4" value="4"/>
                        <label for="radio4_4">4</label>
                        <input type="radio" id="radio4_5" name="4" value="5"/>
                        <label for="radio4_5">5</label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>การทำมิชชั่นหรือเก็บเควสต่างๆ</span>
                    <form>
                        <input type="radio" id="radio5_1" name="5" value="1"/>
                        <label for="radio5_1">1</label>
                        <input type="radio" id="radio5_2" name="5" value="2"/>
                        <label for="radio5_2">2</label>
                        <input type="radio" id="radio5_3" name="5" value="3"/>
                        <label for="radio5_3">3</label>
                        <input type="radio" id="radio5_4" name="5" value="4"/>
                        <label for="radio5_4">4</label>
                        <input type="radio" id="radio5_5" name="5" value="5"/>
                        <label for="radio5_5">5</label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>การเก็บเลเวลและประสบการณ์</span>
                    <form>
                        <input type="radio" id="radio6_1" name="6" value="1"/>
                        <label for="radio6_1">1</label>
                        <input type="radio" id="radio6_2" name="6" value="2"/>
                        <label for="radio6_2">2</label>
                        <input type="radio" id="radio6_3" name="6" value="3"/>
                        <label for="radio6_3">3</label>
                        <input type="radio" id="radio6_4" name="6" value="4"/>
                        <label for="radio6_4">4</label>
                        <input type="radio" id="radio6_5" name="6" value="5"/>
                        <label for="radio6_5">5</label>
                    </form>
                </div>
                <div><hr/></div>
                <button onClick={onClick}>Click</button>
            </div>
    );
}
export default Page1;