export default class Player{

    constructor(){

        this._position = 0;
        this._game = new Array();

    };

    move(dice){

      this._position = this._position + dice;

    };
    
    getPosition(){

        return this._position;
    };

    setPosition(value){

        this._position = value;
    }

    game(position){

        this._game.push(position);
    };

    getGame(){

        return this._game;
    };




};