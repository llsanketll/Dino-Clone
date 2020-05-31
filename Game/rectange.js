export default class Rect {
    constructor(game,x, y, width, height, color) {
        this.game = game;
        this.gameHeight = game.height;
        this.gameWidth = game.width ;
        this.size = {
            w: width,
            h: height
        }
        this.position = {
            x: x,
            y: y
        };
        this.oldPos = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: -3,
            y: 0
        };
        this.acceleration = {
            x: 0,
            y: game.gravity
        };
        this.color = color;
    }
    draw(c) {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
        c.fill();
        c.closePath();
    }
    update(dTime) {

        this.oldPos.x = this.position.x;
        this.oldPos.y = this.position.y;

        // Update Positions
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Gravity
        // this.velocity.y += this.acceleration.y;



        // Collision with floor
        if (this.position.y + this.size.h > this.gameHeight) {
            this.position.y = this.gameHeight - this.size.h;
            this.velocity.y = 0;
        }
        // // Collision with wall
        // if(this.position.x <= 0){
        //     this.position.x = 0;
        // }
        // if(this.position.x + this.size.w >= this.gameWidth){
        //     this.position.x = this.gameWidth - this.size.w;
        // }
    }
}