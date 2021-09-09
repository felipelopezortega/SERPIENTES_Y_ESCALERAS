export default class Board{

    constructor(){

        this._board = new Array();

        for(let i=0;i<=105;i++){

            this._board[i] = i;
        }

        this.snakesAndStairs();
        this.restriction();
    }

    getPosition(position){

        return this._board[position];

    }

    snakesAndStairs(){

        this._board[11]=this._board[39];
        this._board[17]=this._board[67];
        this._board[18]=this._board[6];
        this._board[19]=this._board[45];
        this._board[21]=this._board[56];
        this._board[26]=this._board[50];
        this._board[36]=this._board[20];
        this._board[43]=this._board[84];
        this._board[52]=this._board[76];
        this._board[62]=this._board[14];
        this._board[70]=this._board[92];
        this._board[74]=this._board[100];
        this._board[75]=this._board[30];
        this._board[76]=this._board[49];
        this._board[83]=this._board[8];
        this._board[93]=this._board[40];
        this._board[95]=this._board[69];


    }

    restriction(){

        this._board[101]= this._board[100];
        this._board[102]= this._board[100];
        this._board[103]= this._board[100];
        this._board[104]= this._board[100];
        this._board[105]= this._board[100];

    }

}

