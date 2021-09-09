import Dice from "./dice.js";
import Player from "./player.js";
import Board from "./board.js"

let player1 = new Player();
let player2 = new Player();
let dice = new Dice();
let board = new Board();

console.log("Juego de serpientes y escaleras");
console.log("por Felipe López Ortega Aceves");


while(player1.getPosition()<100 && player2.getPosition()<100){

    player1.move(dice.throw());
    player1.setPosition(board._board[player1.getPosition()])
    player1.game(player1.getPosition());
    player2.move(dice.throw());
    player2.setPosition(board._board[player2.getPosition()])
    player2.game(player2.getPosition());
    

}

    if(player1.getPosition()>99 && player2.getPosition()<100){

        console.log("El ganador es el Jugador 1");
        console.log(player1.getGame());
        console.log(player2.getGame());

    }else{

        console.log("El ganador es el Jugador 2");
        console.log(player1.getGame());
        console.log(player2.getGame());
    }

    



