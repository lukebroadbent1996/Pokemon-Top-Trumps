
class pokemon {
    constructor(name, attack, defence, special, resistance, speed){
        this.name = name;
        this.attack = attack;
        this.defence = defence;
        this.special = special;
        this.resistance = resistance;
        this.speed = speed;
    }
}

const pikachu = new pokemon ("Pikachu", 25, 30, 64, 25, 90)
const charmander = new pokemon ("Charmander", 30, 20, 50, 20, 40)
const bulbasaur = new pokemon ("Bulbasaur", 26, 26, 51, 51, 30)
const squirtle = new pokemon ("Squirtle", 29, 50, 45, 50, 35)
const charizard = new pokemon ("Charizard", 80, 70, 95, 70, 90)
const venusaur = new pokemon ("Venusaur", 65, 64, 90, 90, 70)
const blastoise = new pokemon ("Blastoise", 79, 90, 80, 95, 65)
const butterfree = new pokemon ("Butterfree", 35, 31, 90, 54, 46)
const beedrill = new pokemon ("Beedrill", 90, 30, 22, 22, 47)
const nidoking = new pokemon ("Nidoking", 85, 81, 46, 47, 71)
const nidoqueen = new pokemon ("Nidoqueen", 46, 46, 85, 81, 61)
const raichu = new pokemon ("Raichu", 55, 51, 89, 78, 95)
const ninetales = new pokemon ("Ninetales", 40, 46, 92, 56, 96)
const arcanine = new pokemon ("Arcanine", 88, 77, 80, 69, 97) 
const poliwrath = new pokemon ("Poliwrath", 84, 68, 34, 49, 40)
const alakazam = new pokemon ("Alakazam", 30, 35, 100, 77, 100)
const machamp = new pokemon ("Machamp", 90, 83, 37, 58, 32)
const golem = new pokemon ("Golem", 74, 88, 39, 45, 29)
const slowbro = new pokemon ("Slowbro", 40, 97, 83, 71, 10)
const muk = new pokemon ("Muk", 92, 53, 45, 92, 35)
const gengar = new pokemon ("Gengar", 69, 58, 96, 71, 98)
const kangaskhan = new pokemon ("Kangaskhan", 95, 84, 20, 40, 89)
const gyarados = new pokemon ("Gyarados", 98, 82, 48, 82, 69)
const lapras = new pokemon ("Lapras", 49, 62, 88, 88, 25)
const snorlax = new pokemon ("Snorlax", 89, 69, 49, 69, 5)
const dragonite = new pokemon ("Dragonite", 100, 93, 92, 93, 83)
const aerodactyl = new pokemon ("Aerodactyl", 84, 57, 53, 61, 99)
const rhydon = new pokemon ("Rhydon", 77, 90, 37, 37, 28)
const mewtwo = new pokemon ("Mewtwo", 99, 99, 99, 99, 99)
const mew = new pokemon ("Mew", 100, 100, 100, 100, 100)

let mon = [
    pikachu,
    charmander,
    bulbasaur,
    squirtle,
    charizard,
    venusaur,
    blastoise,
    butterfree, 
    beedrill,
    nidoking,
    nidoqueen,
    raichu,
    ninetales,
    arcanine,
    poliwrath,
    alakazam,
    machamp,
    golem,
    slowbro,
    muk,
    gengar,
    kangaskhan,
    gyarados,
    lapras,
    snorlax,
    dragonite,
    aerodactyl,
    rhydon,
    mewtwo,
    mew
 ];
 

// global variables
let deck = Array.from(mon)
let playerOne = []; 
let playerTwo = [];
let playerOneHand = [];
let playerTwoHand = [];

let drawHand = [];

//shuffle the deck 
let shuffle = (deck)=>{
    for (i = 0; i < 30; i++){
    let card = deck[i];
    let randomNum = Math.floor(Math.random() *30);
    deck[i] = deck[randomNum];
    deck[randomNum] = card;

    }
}

//Draw cards for player 1 and 2
let handOne = (deck)=>{
    shuffle(deck)
    for (i = 0; i < 15; i++){ 
        playerOne.push(deck[i])
        deck.splice(deck[i], 0)
        playerTwo.push(deck[i+1])
        deck.splice(deck[i], 1)
    }
}

//draw random card from deck
let drawCard = (deck)=>{
    let randomIndex = Math.floor(deck.length * Math.random());
    return deck[randomIndex]
}

let playerDraw = ()=>{
    playerOne = [drawCard(deck)];
    console.log(playerOne)
}

// gives new card to players
let newCard = ()=>{
    playerOneHand.push(playerOne[0])
    playerOne.shift()
    playerTwoHand.push(playerTwo[0])
    playerTwo.shift()
}

//start the game
let start = ()=>{
    handOne(deck)
    newCard()
    printP1Hand()
    p1Turn()

}


// player 1 win
let pOneWin=()=>{
        //take card away
        playerOne.push(playerOneHand[0])
        playerOne.push(playerTwoHand[0])

        playerOneHand.shift()
        playerTwoHand.shift()
        p1Turn()
}
// player 2 win
let pTwoWin=()=>{
        playerTwo.push(playerOneHand[0])
        playerTwo.push(playerTwoHand[0])

        playerOneHand.shift()
        playerTwoHand.shift()
        p2Turn()
}
// draw
let stalemate =()=>{
    drawHand.push(playerOneHand[0])
    drawHand.push(playerTwoHand[0]) 
    playerOneHand.shift()
    playerTwoHand.shift()
}
let drawWinner1=()=>{
    
    if (drawHand.length != 0){
        playerOne.push(drawHand[0])
        playerOne.push(drawHand[1])
        drawHand.shift()
        drawHand.shift()
    }
    else{

    }
}
let drawWinner2=()=>{

    if (drawHand.length != 0){
        playerTwo.push(drawHand[0])
        playerTwo.push(drawHand[1])
        drawHand.shift()
        drawHand.shift()
    }
    else{

    }
}
// gives new cards to each player from their deck and prints the players hand
let p1Hand=()=>{
    newCard()
    printP1Hand()
    
}
let p2Hand=()=>{
    newCard()
    printP2Hand()
    
}

// Game mechanics
/////////////////////////////////PLAYER 1 TURN//////////////////////////////////
let p1Turn = () => {
    if (playerTwo.length > 0) { 
      setTimeout(() => { 
        alert("Player 1's Turn")
        const prompOne = prompt("Which stat are you using?");
        if (prompOne == "attack" && playerOneHand[0].attack > playerTwoHand[0].attack){
            console.log("")
            console.log("player 1 wins")
            loserCardp2()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "attack" && playerTwoHand[0].attack > playerOneHand[0].attack){
            console.log("")
            console.log("player 2 wins")
            winnerCardp2()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "defence" && playerOneHand[0].defence > playerTwoHand[0].defence){
            console.log("")
            console.log("player 1 wins")
            loserCardp2()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "defence" && playerTwoHand[0].defence > playerOneHand[0].defence){
            console.log("")
            console.log("player 2 wins")
            winnerCardp2()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "special" && playerOneHand[0].special > playerTwoHand[0].special){
            console.log("")
            console.log("player 1 wins")
            loserCardp2()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "special" && playerTwoHand[0].special > playerOneHand[0].special){
            console.log("")
            console.log("player 2 wins")
            winnerCardp2()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "resistance" && playerOneHand[0].resistance > playerTwoHand[0].resistance){
            console.log("")
            console.log("player 1 wins")
            loserCardp2()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "resistance" && playerTwoHand[0].resistance > playerOneHand[0].resistance){
            console.log("")
            console.log("player 2 wins")
            winnerCardp2()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "speed" && playerOneHand[0].speed > playerTwoHand[0].speed){
            console.log("")
            console.log("player 1 wins")
            loserCardp2()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "speed" && playerTwoHand[0].speed > playerOneHand[0].speed){
            console.log("")
            console.log("player 2 wins")
            winnerCardp2()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "attack" && playerOneHand[0].attack == playerTwoHand[0].attack){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p1Turn()
        }
        else if (prompOne == "defence" && playerOneHand[0].defence == playerTwoHand[0].defence){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p1Turn()
        }
        else if (prompOne == "special" && playerOneHand[0].special == playerTwoHand[0].special){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p1Turn()
        }
        else if (prompOne == "resistance" && playerOneHand[0].resistance == playerTwoHand[0].resistance){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p1Turn()
        }
        else if (prompOne == "speed" && playerOneHand[0].speed == playerTwoHand[0].speed){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p1Turn()
        }     
        else{
          p1Turn()
        }
      }, 5000);
    }
    if (playerOne.length == 0 || playerTwo.length == 0){
        console.log("")
        console.log("-------------")
        console.log("PLAYER 1 WINS")
        console.log("-------------")
        console.log("")
    }
}
/////////////////////////////////PLAYER 2 TURN//////////////////////////////////
let p2Turn = () => {
    if (playerOne.length > 0 ) { 
      setTimeout(() => { 
        alert("Player 2's Turn")
        const prompOne = prompt("Which stat are you using?");
        if (prompOne == "attack" && playerOneHand[0].attack > playerTwoHand[0].attack){
            console.log("")
            console.log("player 1 wins")
            winnerCardp1()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "attack" && playerTwoHand[0].attack > playerOneHand[0].attack){
            console.log("")
            console.log("player 2 wins")
            loserCardp1()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "defence" && playerOneHand[0].defence > playerTwoHand[0].defence){
            console.log("")
            console.log("player 1 wins")
            winnerCardp1()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "defence" && playerTwoHand[0].defence > playerOneHand[0].defence){
            console.log("")
            console.log("player 2 wins")
            loserCardp1()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "special" && playerOneHand[0].special > playerTwoHand[0].special){
            console.log("")
            console.log("player 1 wins")
            winnerCardp1()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "special" && playerTwoHand[0].special > playerOneHand[0].special){
            console.log("")
            console.log("player 2 wins")
            loserCardp1()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "resistance" && playerOneHand[0].resistance > playerTwoHand[0].resistance){
            console.log("")
            console.log("player 1 wins")
            winnerCardp1()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "resistance" && playerTwoHand[0].resistance > playerOneHand[0].resistance){
            console.log("")
            console.log("player 2 wins")
            loserCardp1()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "speed" && playerOneHand[0].speed > playerTwoHand[0].speed){
            console.log("")
            console.log("player 1 wins")
            winnerCardp1()
            pOneWin()
            p1Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner1()
        } 
        else if (prompOne == "speed" && playerTwoHand[0].speed > playerOneHand[0].speed){
            console.log("")
            console.log("player 2 wins")
            loserCardp1()
            pTwoWin()
            p2Hand()
            console.log("")
            console.log(`Player 1 deck: ${playerOne.length}`)
            console.log(`Player 2 deck: ${playerTwo.length}`)
            console.log("")
            drawWinner2()
        }
        else if (prompOne == "attack" && playerOneHand[0].attack == playerTwoHand[0].attack){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p2Turn()
        }
        else if (prompOne == "defence" && playerOneHand[0].defence == playerTwoHand[0].defence){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p2Turn()
        }
        else if (prompOne == "special" && playerOneHand[0].special == playerTwoHand[0].special){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p2Turn()
        }
        else if (prompOne == "resistance" && playerOneHand[0].resistance == playerTwoHand[0].resistance){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p2Turn()
        }
        else if (prompOne == "speed" && playerOneHand[0].speed == playerTwoHand[0].speed){
            console.log("")
            console.log("DRAW")
            console.log("")
            stalemate()
            p2Turn()
        }     
        else{
          p2Turn()
        }
      }, 5000);
    }

    if (playerOne.length == 0 || playerTwo.length == 0){
        console.log("")
        console.log("-------------")
        console.log("PLAYER 2 WINS")
        console.log("-------------")
        console.log("")
    }
}






// Log the hands in console
let printP1Hand=()=>{
    console.log("")
    console.log("Player 1 - CARD")
    console.log(`Name: ${playerOneHand[0].name}`)
    console.log(`attack: ${playerOneHand[0].attack}`)
    console.log(`defence: ${playerOneHand[0].defence}`)
    console.log(`special: ${playerOneHand[0].special}`)
    console.log(`resistance: ${playerOneHand[0].resistance}`)
    console.log(`speed: ${playerOneHand[0].speed}`)
    
}
let printP2Hand=()=>{
    console.log("")
    console.log("Player 2 - CARD")
    console.log(`Name: ${playerTwoHand[0].name}`)
    console.log(`attack: ${playerTwoHand[0].attack}`)
    console.log(`defence: ${playerTwoHand[0].defence}`)
    console.log(`special: ${playerTwoHand[0].special}`)
    console.log(`resistance: ${playerTwoHand[0].resistance}`)
    console.log(`speed: ${playerTwoHand[0].speed}`)
    
}
//log loser card
let loserCardp1=()=>{
    console.log("--------------")
    console.log("LOSER CARD from PLAYER 1")
    console.log(`Name: ${playerOneHand[0].name}`)
    console.log(`attack: ${playerOneHand[0].attack}`)
    console.log(`defence: ${playerOneHand[0].defence}`)
    console.log(`special: ${playerOneHand[0].special}`)
    console.log(`resistance: ${playerOneHand[0].resistance}`)
    console.log(`speed: ${playerOneHand[0].speed}`)
}
let loserCardp2=()=>{
    console.log("--------------")
    console.log("LOSER CARD from PLAYER 2")
    console.log(`Name: ${playerTwoHand[0].name}`)
    console.log(`attack: ${playerTwoHand[0].attack}`)
    console.log(`defence: ${playerTwoHand[0].defence}`)
    console.log(`special: ${playerTwoHand[0].special}`)
    console.log(`resistance: ${playerTwoHand[0].resistance}`)
    console.log(`speed: ${playerTwoHand[0].speed}`)
}
//log winner card 
let winnerCardp1=()=>{
    console.log("--------------")
    console.log("WINNING CARD from PLAYER 1")
    console.log(`Name: ${playerOneHand[0].name}`)
    console.log(`attack: ${playerOneHand[0].attack}`)
    console.log(`defence: ${playerOneHand[0].defence}`)
    console.log(`special: ${playerOneHand[0].special}`)
    console.log(`resistance: ${playerOneHand[0].resistance}`)
    console.log(`speed: ${playerOneHand[0].speed}`)
}
let winnerCardp2=()=>{
    console.log("--------------")
    console.log("WINING CARD from PLAYER 2")
    console.log(`Name: ${playerTwoHand[0].name}`)
    console.log(`attack: ${playerTwoHand[0].attack}`)
    console.log(`defence: ${playerTwoHand[0].defence}`)
    console.log(`special: ${playerTwoHand[0].special}`)
    console.log(`resistance: ${playerTwoHand[0].resistance}`)
    console.log(`speed: ${playerTwoHand[0].speed}`)
}

//original start with prompt
let begin = ()=>{
    let gameStart = prompt("Do you wish to start?")
        if (gameStart == "yes" || gameStart == "Yes"){
            start()
        }
    }
begin()

