import Game from './game.js';
import InputController from './input.js';
let canvas, c, height, width;
height = 500;
width = 500;
canvas = document.querySelector('canvas');
canvas.height = height;
canvas.width = width;
c = canvas.getContext('2d');



let game = new Game(width, height);
let controller = new InputController(game);

function keyDownUp(event){
    controller.inputListener(event);
}

function draw(){
    if(controller.left.active) {game.square.moveLeft();}
    if(controller.right.active) {game.square.moveRight();}
    if(controller.up.active) {game.square.jump(); controller.up.active = false;}


    game.draw(c);
}

function update(dTime){
    game.update(dTime);

}



let lastTime = 0;
function gameLoop(deltaTime){
    let prev = deltaTime - lastTime;
    c.clearRect(0, 0, width, height);

    draw();
    update(deltaTime);
    
    
    lastTime = prev;
    requestAnimationFrame(gameLoop);
}
window.addEventListener('keydown',keyDownUp);
window.addEventListener('keyup',keyDownUp);
requestAnimationFrame(gameLoop);