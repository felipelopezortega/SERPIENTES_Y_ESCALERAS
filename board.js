import Dice from "./dice.js";
import Player from "./player.js";

let player1 = new Player();
let player2 = new Player();
let dice = new Dice();

while(player1.getPosition()<100 && player2.getPosition()<100){

    player1.move(dice.throw());
    player2.move(dice.throw());

    if(player1.getPosition()>99 && player2.getPosition()<100){

        console.log("El ganador es el Jugador 1");

    }else if(player2.getPosition()>99 && player1.getPosition()<100){

        console.log("El ganador es el Jugador 2");

    }
    
}


console.log("Juego de serpientes y escaleras");
console.log("por Felipe López Ortega Aceves");

