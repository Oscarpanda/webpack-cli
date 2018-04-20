import Rx from 'rxjs/Rx';
import $ from 'jquery';
import AnswerResult from "./AnswerResult";
import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create, update: update ,render:render});
function preload() {

    game.load.audio('voice', './doingtime/audio/wakeup.ogg');
    game.load.audio('rocket', './doingtime/audio/rocket.ogg');
    game.load.atlas("failAnim", "./doingtime/failAnim.png", "./doingtime/failAnim.json");
    game.load.atlas("rightAnim", "./doingtime/rightAnim.png", "./doingtime/rightAnim.json");
}

let graphics
let graphics1
function create() {
    graphics = game.add.graphics(0, 0);
    graphics1 = game.add.graphics(0, 0);

    graphics.beginFill(0xFF33ff);
    graphics.drawRoundedRect(20,20,400,400,30);
    let sprite = game.add.sprite(0,0,"failAnim")
    graphics1.addChild(sprite);
    // graphics.addChild(sprite);
    sprite.mask = graphics
    setTimeout(()=>{
        sprite.loadTexture("rightAnim");
    },3000)

    graphics.endFill();
}
function update() {}
function render () {


}