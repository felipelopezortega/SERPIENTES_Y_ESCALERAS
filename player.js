export default class Player{

    constructor(){

        this._position = 0;

    };

    move(dice){

      this._position = this._position + dice;

      switch(this._position){

        case 11:
            this._position = 39;
            break;
        
        case 17:
            this._position = 67;
            break;
        
        case 18:
            this._position = 6;
            break;
        
        case 19:
            this._position = 45;
            break;
        
        case 21:
            this._position = 56;
            break;
        
        case 26:
            this._position = 50;
            break;

        case 36:
            this._position = 20;
            break;
        
        case 43:
            this._position = 84;
            break;
        
        case 52:
            this._position = 76;
            break;

        case 62:
            this._position = 14;
            break;
        
        case 70:
            this._position = 92;
            break;

        case 74:
            this._position = 100;
            break;

        case 75:
            this._position = 30;
            break;

        case 76:
            this._position = 49;
            break;
        
        case 83:
            this._position = 8;
            break;

        case 93:
            this._position = 40;
            break;

        case 95:
            this._position = 69;
            break;

        default:
            break;
      }


    };

    getPosition(){

        return this._position;
    };




};