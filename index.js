let homeScore = 0;
let guestScore = 0;


function plusOneHome(){
    homeScore = homeScore + 1
    document.getElementById("home-score-val").textContent = homeScore 
}

function plusOneGuest(){
    guestScore = guestScore + 1
    document.getElementById("guest-score-val").textContent = guestScore 
}

function plusThreeHome(){
    homeScore = homeScore + 3
    document.getElementById("home-score-val").textContent = homeScore  
}

function plusThreeGuest(){
    guestScore = guestScore + 3
    document.getElementById("guest-score-val").textContent = guestScore  
}

function plusFiveHome(){
    homeScore = homeScore + 5
    document.getElementById("home-score-val").textContent = homeScore  
}

function plusFiveGuest(){
    guestScore = guestScore + 5
    document.getElementById("guest-score-val").textContent = guestScore  
}

function start(){
    document.getElementById("start-msg").textContent = "LET'S THE GAME BEGIN!!!!"
}

function reset(){
    document.getElementById("home-score-val").textContent = 0
    document.getElementById("guest-score-val").textContent = 0  
    document.getElementById("start-msg").textContent = null
}