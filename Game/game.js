import Square from './square.js';
import Rect from './rectange.js';
import { collide } from './collision.js';
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randFloat(min, max) {
    return (Math.random() * (max - min + 1) + min);
}
export default class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.gravity = 1;
        this.square = new Square(this);
        this.blocks = [];
        this.GameObjects = [];
        this.startTime = new Date().getSeconds();
    }
    draw(c) {

        this.GameObjects.forEach(e => {
            e.draw(c);
        })


    }
    update(dTime) {


        // Collision with other blocks
        this.GameObjects.forEach(e => {
            e.update(dTime);
        })


        let currTime = new Date().getSeconds();
        let diff = currTime - this.startTime;
        console.log(diff);
        if (diff == 1) {
            let y = randFloat(this.width, 400);
            this.blocks.push(new Rect(this, this.width, y, 30, 30, 'black'));
        }
        this.startTime = new Date().getSeconds();

        this.GameObjects = [this.square, ...this.blocks];
        this.blocks.forEach(e => {
            if (e.position.x + e.size.w <= 0)
                this.blocks.splice(0, 1);
            if (collide(this.square, e).test())
                collide(this.square, e).react();
        })
    }
}