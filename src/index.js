import Rx from 'rxjs/Rx';
import $ from 'jquery';
import AnswerResult from "./AnswerResult";
// import "pixi";
// import 'p2'
// import *  as Phaser from 'phaser-ce';
import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });
let test
function someFunction(fn){
        fn(1,23,1)
};
function preload() {

    game.load.audio('voice', './doingtime/audio/wakeup.ogg');
    game.load.audio('rocket', './doingtime/audio/rocket.ogg');
    game.load.atlas("failAnim", "./doingtime/failAnim.png", "./doingtime/failAnim.json");
    game.load.atlas("rightAnim", "./doingtime/rightAnim.png", "./doingtime/rightAnim.json");


}


function ani (Anim, callback) {
    Anim.onComplete.add(callback);
}
function voice_fn(key, callback) {
    let voice = game.add.audio(key);
    voice.onStop.add(callback)
    console.log("type", typeof voice.onStop.add)
    voice.play();
}
function check_1v1 () {

}
function create() {
    let obj = {}
    let answerResult = new AnswerResult(this.game, 290, 148);
    game.add.existing(answerResult);
    answerResult.right();
    const boundSomeFunction2 = Rx.Observable.bindCallback(voice_fn);
    boundSomeFunction2("voice").concatMap((e) => {
        console.log("map", e)
        return boundSomeFunction2('rocket');
    }).concatMap((e)=>{
        console.log("map1", e)
        return boundSomeFunction2('rocket')
    })
        .subscribe(values => {
        console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
    });
    var letters = Rx.Observable.of('a', 'b', 'c');
    // var result = letters.mergeMap(x =>{
    //         console.log("x?",x);
    //
    //         return Rx.Observable.interval(1000).map(i => x+i)
    // }
    // );
    letters.map(x => x+"1").subscribe(x => console.log("x",x));

    // const boundSomeFunction3 = Rx.Observable.bindCallback(ani);
    // boundSomeFunction3(answerResult.rightAnim).subscribe(values => {
    //     answerResult.rightsprite.visible = false;
    //     console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
    // });


    // let voice1 = game.add.audio("voice");
    // let cal = voice1.onStop.add.bind(voice1.onStop)
    // voice1.onStop.add(()=>{
    //     console.log("voice1");
    // })
    // let cal = function (callback) {
    //     voice1.onStop.add.call(voice1.onStop, callback)
    // }
    // const boundSomeFunction4 = Rx.Observable.bindCallback(cal);
    // boundSomeFunction4().subscribe(values => {
    //
    //     console.log("valuse1", values) // [5, 'some string', {someProperty: 'someValue'}]
    // });
    // voice1.play();





}
function update() {}

// someFunction((a, b, c) => {
//     console.log(a); // 5
//     console.log(b); // 'some string'
//     console.log(c); // {someProperty: 'someValue'}
// })
// let callback = a => {console.log(1)};
// function someFunction(callback){
//     callback
//
// };
// $.getJSON("http://116.62.235.245:80/api/software",(e) => {
//     console.log(e);
// })
// let callback = setTimeout(()=>{
//         // console.log(2)
//         console.log(1)
//         console.log(1)
//         console.log(1)
//         console.log(1)
//         console.log(1)
//     })
// function test (1 ,callback)) {
//     callback()
// }
// const boundSomeFunction1 = Rx.Observable.bindCallback(someFunction);
// boundSomeFunction1().subscribe(values => {
//     console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
// });
// const boundSomeFunction = Rx.Observable.bindCallback($.getJSON);
// boundSomeFunction("http://116.62.235.245:80/api/software").subscribe(values => {
//     console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
// });
// const boundSomeFunction = Rx.Observable.bindCallback(callback);
// boundSomeFunction().subscribe(values => {
//     console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
// });
