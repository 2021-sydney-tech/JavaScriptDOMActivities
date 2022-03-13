// BASIC SYNTAX
// Selectors: 
let elementName = document.querySelector("#elementId")
// Functions
function functionName() {
  // do something here
 
}
// Call the event with an event listener
//elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
const btn = document.querySelector('#btnName');


// Function
function displayName(){
  document.querySelector('#myName').value = "Pary";
}

// Call the event
btn.addEventListener("click",displayName);

// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors

// Function

// Call the event

// 3. Double click button to display content
// Selectors

/* Function {
  //some code here
  //create a new img element
}*/

// Call the event

// 4. Traffic Lights
// Selectors
const btnStop = document.querySelector('#btnStop');
const btnReady = document.querySelector('#btnReady');
const btnGo = document.querySelector('#btnGo');
const stopDiv = document.querySelector('#stopDiv');
const readyDiv = document.querySelector('#readyDiv');
const goDiv = document.querySelector('#goDiv');


// Function 1
function stopFn(){
  //document.querySelector('#stopDiv').style.backgroundColor='red';
  stopDiv.style.backgroundColor='red';
  goDiv.style.backgroundColor='black';
  readyDiv.style.backgroundColor='black';



}

// Function 2
function readyFn(){
  //document.querySelector('#readyDiv').style.backgroundColor='yellow';
  stopDiv.style.backgroundColor='black';
  goDiv.style.backgroundColor='black';
  readyDiv.style.backgroundColor='yellow';
  }



// Function 3

function goFn(){
  //document.querySelector('#goDiv').style.backgroundColor='green';
  stopDiv.style.backgroundColor='black';
  goDiv.style.backgroundColor='green';
  readyDiv.style.backgroundColor='black';

}

// Call the events
btnStop.addEventListener('click',stopFn);
btnReady.addEventListener('click',readyFn);
btnGo.addEventListener('click',goFn);


// 5. Change textbox border colours
// Selectors
const firstname = document.querySelector('#firstName');
const lastname = document.querySelector('#lastName');
const btn2Name = document.querySelector('#btn2Name');



// Function
function changeColor(){
  firstname.style.backgroundColor = 'red';
  lastname.style.backgroundColor = 'green';

}


// Call the event
btn2Name.addEventListener('click',changeColor);


// 6. Validate the input [length should be more than 5 characters]
// Selectors

/*Function {
  //if statement
}*/

// Call the event

// 7.create a list of hobbies
// Selectors
const btnHobbies = document.querySelector('#btnHobbies');




/*Function {
  //for loop
}*/

function hobbyList (){
  let list = document.querySelector("#hobbies>ul")
  for (let i = 0; i<3 ; i++){
    let li = document.createElement('li');
    let hobbies = prompt("Hobbies List");
    li.innerHTML = hobbies;
    list.appendChild(li);
  }
}




// Call the event
btnHobbies.addEventListener('click',hobbyList)


// 8. Display a profile card from an object
//Object

// Selectors

/*Function {
    //for loop
      //if statement
  }*/
