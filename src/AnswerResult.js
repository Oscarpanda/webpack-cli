"use strict";

import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

class AnswerResult extends Phaser.Sprite {

    constructor(game, x, y) {
        super(game, x, y);
        this.showimagetime = 0;
    }



    right() {
        this.rightsprite = this.game.make.sprite(0, 8, "rightAnim");
        this.rightAnim = this.rightsprite.animations.add("ranim");
        this.rightAnim.play(15, false);
        this.addChild(this.rightsprite);
        this.scale.set(0.93);
        this.music = this.game.add.audio("answer_right");
        this.music.play();

    }

    wrong() {
        let wrongsprite = this.game.make.sprite(-20, -10, "failAnim");
        let wrongAnim = wrongsprite.animations.add("ranim");
        wrongAnim.play(15, false);
        this.addChild(wrongsprite);
        this.scale.set(0.90);
        this.music = this.game.add.audio("answer_wrong");
        this.music.play();
        wrongAnim.onComplete.add(() => {
            wrongsprite.visible = false;
            this.finishfn();
        });

    }
    finish(fn) {
        this.finishfn = fn;
    }
    getName (fn) {
        this.content = fn;
    }
}

export default AnswerResult;
