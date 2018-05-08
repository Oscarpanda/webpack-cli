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
    graphics = game.add.graphics(400, 400);
    let group = this.add.group();
    // graphics1 = game.add.graphics(0, 0);

    graphics.beginFill(0xFF33ff);
    graphics.drawRoundedRect(-200,-200,400,400,30);
    // group.body =  Phaser.Physics.P2.Body
    console.log(graphics.body)
    let sprite = game.add.sprite(100,100,"failAnim")
    sprite.alignIn(graphics, Phaser.CENTER)
    // group.add(graphics);
    // group.add(sprite);
    // let sprite1 = game.add.sprite(0,0,graphics)
    // sprite.anchor.set(0.5, 0.5)
    let animTween = this.game.add.tween(graphics.scale);
    // let animTween1 = this.game.add.tween(graphics);
    console.log(graphics.y)
    graphics.scale.set(0, 0);
    animTween.to({y: 1, x: 1}, 3000, Phaser.Easing.Bounce.Out, true, 0);
    // animTween1.to({y: graphics.y - 200  , x: graphics.x - 200}, 3000, Phaser.Easing.Bounce.Out, true, 0);

    // graphics1.addChild(sprite);
    // graphics.addChild(sprite);
    // sprite.mask = graphics
    // setTimeout(()=>{
        // animTween.onComplete.add(() => {
        //     sprite.x = 10;
        //     sprite.y = 101;
        // });
    // },500)

    // animTween.to({y: 200, x: 200}, 1000, Phaser.Easing.Linear.None, true, 0);
    // animTween.onComplete.add(() => {
    //     sprite.x = 100;
    //     sprite.y = 10;
    // });

    // graphics.endFill();
}
function update() {}
function render () {


}