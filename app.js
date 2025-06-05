let level = 0;
let array = ["first", "second", "third", "fourth"];

let GameSequenceArray = [];
let UserEnteringSequenceArray = [];

function gameFlash(str) {
     let btn = document.querySelector(`#${str}`);
     // console.log(btn);
     
     btn.classList.add("whiteFlash");
     btn.style.backgroundColor = "transparent";

     setTimeout(function(){
          btn.classList.remove("whiteFlash");
          btn.style.backgroundColor = "";
     },400);
}

// function flashing() {
//      // function work() {
//      //      gameFlash(GameSequenceArray[i]);
//      //      i++;
//      // }

//      // let i=0;
//      // while(i<GameSequenceArray.length) {
//      //      // gameFlash(GameSequenceArray[i]);     //this contains the id
//      //      setTimeout(work,1000*i);
//      // }
// }

function levelUp() {
     level++;

     console.log("\n");
     
     console.log(`level = ${level}`);
     document.querySelector(".score").innerText = `score = ${level-1}`;
     document.querySelector("h3").innerText = `Level - ${level}`;
     document.querySelector("h3").style.color = "burlywood";     
     document.querySelector(".container").style.borderRadius = "8px";

     
     document.querySelector("#Notice").style.opacity = "0%";
     document.querySelector("#first").style.opacity = "100%"; 
     document.querySelector("#second").style.opacity = "100%"; 
     document.querySelector("#third").style.opacity = "100%"; 
     document.querySelector("#fourth").style.opacity = "100%"; 

     //generate a random button flash
     let randomNumber = Math.floor(Math.random()*4);
     GameSequenceArray.push(array[randomNumber]);
     console.log(GameSequenceArray);

     gameFlash(array[randomNumber]);

     //flashing function -> all colors in gameseq array are flashed
     // flashing();
}

function userFlash(str) {
     let btn = document.querySelector(`#${str}`);
     // console.log(btn);

     // btn.classList.add("whiteFlash");

     // setTimeout(function() {
     //      btn.classList.remove("whiteFlash");
     // },720);



     switch (str) {
          case "first":
               btn.classList.add("redFlash");

               let redAngryBirdSound = new Audio("Audio/redAngrybird.mp3");
               redAngryBirdSound.play();
               redAngryBirdSound.volume = 1; 
               redAngryBirdSound.loop = false; 

               setTimeout(function(){
                    btn.classList.remove("redFlash");
               },720);
               break;
          
          case "second":
               btn.classList.add("yellowFlash");

               let yellowAngryBirdSound = new Audio("Audio/yellowAngrybird.mp3");
               yellowAngryBirdSound.play();
               yellowAngryBirdSound.volume = 1; 
               yellowAngryBirdSound.loop = false;

               setTimeout(function(){
                    btn.classList.remove("yellowFlash");
               },720);
               break;
          
          case "third":
               btn.classList.add("greenFlash");

               let greenAngryBirdSound = new Audio("Audio/greenAngrybird.mp3");
               greenAngryBirdSound.play();
               greenAngryBirdSound.volume = 1; 
               greenAngryBirdSound.loop = false;

               setTimeout(function(){
                    btn.classList.remove("greenFlash");
               },720);
               break;

          case "fourth":
               btn.classList.add("blueFlash");

               let blueAngryBirdSound = new Audio("Audio/blueAngryBird.mp3");
               blueAngryBirdSound.play();
               blueAngryBirdSound.volume = 1; 
               blueAngryBirdSound.loop = false;           

               setTimeout(function(){
                    btn.classList.remove("blueFlash");
               },720);
               break;
          
          default:
               break;
     }

}

function check() {
     //checks all values of GameSequenceArray with User Entering Sequence

     let flag = true;

     for (let i=0; i<UserEnteringSequenceArray.length; i++) {
          if (GameSequenceArray[i] != UserEnteringSequenceArray[i]) {
               console.log("Game Over");

               GameOver();

               flag = false;
               break;
          }
     }

     if (GameSequenceArray.length == UserEnteringSequenceArray.length && flag) {
          UserEnteringSequenceArray = [];
          setTimeout(levelUp,1000);
     }
     
     //when check completed user entering sequence should be empty
}

function btnClick() {
     console.dir(this.id);
     userFlash(this.id);
     UserEnteringSequenceArray.push(this.id);
     // console.log(UserEnteringSequenceArray);

     check();
}

document.querySelector("#start").addEventListener("click", function() {
     console.log("game start");


     levelUp();


     let allbtn = document.querySelectorAll(".mainComponents");
     for (b of allbtn) {
          b.addEventListener("click", btnClick);
     }

     document.querySelector("#end").addEventListener("click",function() {
          GameOver();
     }, {once: true});
}, {once: true});

function GameOver() {

     document.querySelectorAll(".mainComponents").forEach(x => {  
          //for all x present in mainComponents class

          x.classList.add("GameEnd");

          x.disabled = true;
     });

     document.querySelector("h3").innerText = "Do a Refresh to Restart the game";
     document.querySelector("h3").style.color = "#EEEEEE";
     
     document.querySelector("#first").style.opacity = "10%"; 
     document.querySelector("#second").style.opacity = "10%"; 
     document.querySelector("#third").style.opacity = "10%"; 
     document.querySelector("#fourth").style.opacity = "10%"; 

     document.querySelector("#Notice").innerText = "GAME OVER";
     document.querySelector("#Notice").style.left = "25%";
     document.querySelector("#Notice").style.opacity = "100%";

     console.log("Game Over");
}
