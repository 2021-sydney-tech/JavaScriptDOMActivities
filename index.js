// alert("hi")
let inpName = document.querySelector("#myName");
let btnEl = document.querySelector("#btnName");

btnEl.addEventListener("click", function(){
    inpName.value = "Sophanna Ly";
});

// Light on, light off -----------------------------
let lightOnEl = document.querySelector("#imageOff");
let turnOn = "images/lighton.png";
let turnOff = "images/lightoff.png";


lightOnEl.addEventListener("mouseover", function(){
    document.querySelector("#imageOff").src = turnOn;
    
});
// console.log(lightOnEl)

lightOnEl.addEventListener("mouseout", function(){
    document.querySelector("#imageOff").src = turnOff;
    
});
// console.log(lightOnEl)



// when double click ------------------------------ 
let dbClickEl = document.querySelector("#btndbName");
let paraEl = document.querySelector("#displayPara");
let imageEl = document.querySelector("#image");

dbClickEl.addEventListener("dblclick", function(){
    paraEl.textContent = "You double clicked me!";
    imageEl.src = "images/smileyface.png";
})

/*
const showResult = () => {
    paraEl.textContent = "You double clicked me!";
    imageEl.src = "images/smileyface.png";

}
dbClickEl.addEventListener("dblclick", showResult);
*/

// Three buttons: Red, Orange, Yellow ----------------------------------
let btnRedEl = document.querySelector("#btnStop");
let btnOrangeEl = document.querySelector("#btnReady");
let btnGreenEl = document.querySelector("#btnGo");

btnRedEl.addEventListener("click", function(){
    lightBlack();
    document.querySelector("#stopDiv").style.backgroundColor = "red";
});

btnOrangeEl.addEventListener("click", function(){
    lightBlack();
    document.querySelector("#readyDiv").style.backgroundColor = "orange";
});

btnGreenEl.addEventListener("click", function(){
    lightBlack();
    document.querySelector("#goDiv").style.backgroundColor = "green";
});

function lightBlack() {
    document.querySelector("#goDiv").style.backgroundColor = "black";
    document.querySelector("#readyDiv").style.backgroundColor = "black";
    document.querySelector("#stopDiv").style.backgroundColor = "black";
}



//Change the border color-------------------------------------------
let boxEl = document.getElementById("btn2Name");

boxEl.addEventListener("click", function(){
    document.querySelector("#firstName").style.borderColor = "red";
    document.querySelector("#lastName").style.borderColor = "green";
});


//enter 8 characters
let inputEl = document.querySelector("#myName2");
let submitEl = document.querySelector("#btnSub2");

function showInputValue() {
    
    if (inputEl.value.length < 8) {
        document.querySelector("#errMsg").innerHTML = "Less than 8";
    } else {
        document.querySelector("#errMsg").innerHTML = "";
    }
}
submitEl.addEventListener("click", showInputValue);




// List of hobbies ---------------------------------
let hobbiesEl = document.querySelector("#btnHobbies");
let ulHobbiesEl = document.querySelector("#ul-el");

function showMsg (){
    
    for ( let i = 0; i< 3 ; i++){

        promptBox = prompt("What are your three hobbies?")
        let liList = document.createElement('li');
        liList.innerHTML = promptBox;
        ulHobbiesEl.appendChild(liList);

        // console.log(promptBox)
    }      
}
hobbiesEl.addEventListener("click", showMsg);


// My work ID card ------------------------------
let displayButtonEl = document.querySelector("#btnProfile");
let displayEl = document.querySelector("#displayCard");

displayButtonEl.addEventListener("click", showMyProfile);


function showMyProfile() {
    
    const object = 
    
    {
        userPic: "images/face.jpg",
        userName: "Sophanna",
        userJob: "Developer",
        userHobbies: "listening to music"
    }
    
    // let picture = document.createElement("img");
    // picture.src = profile.userPic;
    // displayEl.append(picture)
    // // console.log(picture)
    
    // let name = document.createElement('h1');
    // name.innerHTML = profile.userName;
    // displayEl.append(name);

    // let job = document.createElement('p');
    // job.innerHTML = profile.userJob;
    // displayEl.append(job);

    // let hobbies = document.createElement('p');
    // hobbies.innerHTML = profile.userHobbies;
    // displayEl.append(hobbies);

    const profile =
    `
    
        <img src="${object.userPic}">
        <h1>${object.userName}</h1>
        <p>${object.userJob}</p>
        <p>${object.userHobbies}</p>

    
    `
    const element = document.createElement('div');
    element.innerHTML = profile;
    displayCard.append(element);    
}