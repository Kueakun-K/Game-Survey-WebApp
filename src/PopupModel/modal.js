import React from 'react';  
import './modalcss.css';  
 
const Modall = () =>{
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function click() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
  return(
    <div>
    <button id="myBtn" onclick={click}>Open Modal</button>
    <div  id="myModal"  class="modal">
      <div class="modal-content">
        <h1>Test modal</h1>
      </div>
    </div>
    </div>
  );
}
export default Modall; 