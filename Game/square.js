export default class Square {
    constructor(game) {
        this.game = game;
        this.gameWidth = game.width;
        this.gameHeight = game.height;
        this.state = {
            jump: false,
        }
        this.size = {
            w: 30,
            h: 30
        }
        this.position = {
            x: 100,
            y: 0
        };
        this.oldPos = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.acceleration = {
            x: 0,
            y: game.gravity
        };
        this.color = '#ff4545';
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
        this.velocity.y += this.acceleration.y;

        this.velocity.x += this.acceleration.x;
        this.velocity.x = 0;


        // Collision with floor
        if (this.position.y + this.size.h > this.gameHeight) {
            this.position.y = this.gameHeight - this.size.h;
            this.velocity.y = 0;
            this.state.jump = false;
        }
        // Collision with wall
        if(this.position.x <= 0){
            this.position.x = 0;
        }
        if(this.position.x + this.size.w >= this.gameWidth){
            this.position.x = this.gameWidth - this.size.w;
        }
    }

    moveLeft() {
        this.velocity.x -= 5;
    }
    moveRight() {
        this.velocity.x += 5;
    }
    jump() {
        if (!this.state.jump) {
            this.velocity.y = -12;
            this.state.jump = true;
        }
    }
}