
function makeBubble(){
    var clutter = "";

    for( var i = 0; i <168; i++ ){
        const num = Math.floor( Math.random()*10);
        clutter += `<div class="bubble">${num}</div>`;
    }

    const pbottom = document.querySelector("#p-bottom");

    pbottom.innerHTML = clutter;
}

let timer = 60;
let score = 0;

function increaseScore() {
    score += 10;

    const scoreVal = document.querySelector("#scoreVal");

    scoreVal.innerHTML = score;
}

function runTimer(){

    var Timer = setInterval(() => {
        
        if( timer >= 0){
            const timerVal = document.querySelector("#timerVal");
            timerVal.innerText = timer;
            timer--;
        }
        else{
            clearInterval(Timer);
            document.querySelector("#p-bottom").innerHTML = `
                <div class="new">
                    <h1>Your Score : ${score}</h1>
                    <button onclick="startGame()">
                        New Bubble Game
                    </button>
                </div>
            `;
        }
    }, 1000);
}

let hitRN;

function getNewHit(){

    var hitVal = document.querySelector("#hitVal");
    hitRN = Math.floor( Math.random() *10);

    hitVal.innerText = hitRN;
}


const pbtm = document.querySelector("#p-bottom");

pbtm.addEventListener( "click", (dets) =>{

    var clickedNuber = (Number(dets.target.textContent));

    if( clickedNuber == hitRN){
        makeBubble();
        getNewHit();
        increaseScore();
    }

})



function startGame(){
    timer = 60;
    score = 0;
    const scoreVal = document.querySelector("#scoreVal");
    scoreVal.innerHTML = score;
    runTimer();
    makeBubble();
    getNewHit();
}