export default class InputController {
    constructor(game) {
        this.game = game;
        this.left = new ButtonInput();
        this.right = new ButtonInput();
        this.up = new ButtonInput();

        this.inputListener = function (event) {
            let key_state = (event.type == 'keydown') ? true : false;
            switch (event.keyCode) {
                case 37:
                    this.left.getInput(key_state);
                    break;
                case 39:
                    this.right.getInput(key_state);
                    break;
                case 38:
                    this.up.getInput(key_state);
            }

        };
    }
}
class ButtonInput {
    constructor() {
        this.active = this.key_state = false;
    }
    getInput(key_state) {
        if (this.key_state != key_state) this.active = key_state;
        this.key_state = key_state;
    }
}