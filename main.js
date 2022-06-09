
// storing values from various elements in variables below
const boxes = document.querySelectorAll(".box")
const result = document.querySelector("#result")
const restart = document.querySelector("#restart")
let player = true
let count = 0




// When we click a box, the game starts and puts an event listener on each box
function startGame() {
    boxes.forEach(box => {
        box.addEventListener("click", playGame, {once:true})
    })
}

// displaying the player's choice in the box
function playGame(click) {
  
   this.innerText = player? "X" : "O"
// after each turn, the player value becomes opposite
   player = !player;
   count++;

   // storing the  value from each box in a variable
let value1 = document.querySelector("#one").innerText
let value2 = document.querySelector("#two").innerText
let value3 = document.querySelector("#three").innerText

let value4 = document.querySelector('#four').innerText
let value5 = document.querySelector('#five').innerText
let value6 = document.querySelector('#six').innerText

let value7 = document.querySelector('#seven').innerText
let value8 = document.querySelector('#eight').innerText
let value9 = document.querySelector('#nine').innerText

   

    //   row winning combos
    if (
        (value1 != "" && value1 == value2 && value2 == value3) ||
        (value4 != "" && value4 == value5 && value5 == value6) || 
        (value7 != "" && value7 == value8 && value8 == value9) ||
    //   column winning combos
        (value1 != "" && value1 == value4 && value4 == value7) ||
        (value2 != "" && value2 == value5 && value5 == value6) ||
        (value3 != "" && value3 == value6 && value6 == value9) ||
    //   diagnol winning combos
        (value1 != "" && value1 == value5 && value5 == value9) ||
        (value3 != "" && value3 == value5 && value5 == value7)
        ) 
        {

            result.innerText = player ? "0 is the winner!" : "X is the winner!"
    
        }


    // checking for tie

    if(count == 9) {
       result.innerText = "Its a tie mate!"
    }
}


// Restart button logic
// add event listener on reset button
restart.addEventListener("click", restartGame)

function restartGame() {
  
    boxes.forEach(box => {
        box.innerText = ""
    })

// after resetting the game, we want to the game to start again, remove text from the result section, default the player back to true.
    startGame()
    result.innerText = ""
    player = true
    count = 0


}



        
restartGame()
startGame()

   
  
 
  
