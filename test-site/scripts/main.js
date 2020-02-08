let myIMG = document.querySelector('img');
myIMG.onclick = function(){
    let mySrc = myIMG.getAttribute('src');
    if(mySrc === 'images/rockclimbing.jpg'){
        myIMG.setAttribute('src','images/two.jpg');
    }else{
        myIMG.setAttribute('src','images/rockclimbing.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'She is an angel,' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'She is an angel,' + storedName;
}

myButton.onclick = function(){
    setUserName();
}