import Rx from 'rxjs/Rx';
import $ from 'jquery';
let test
function someFunction(fn){
        fn(1,23,1)
};

someFunction((a, b, c) => {
    console.log(a); // 5
    console.log(b); // 'some string'
    console.log(c); // {someProperty: 'someValue'}
})
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
const boundSomeFunction1 = Rx.Observable.bindCallback(someFunction);
boundSomeFunction1().subscribe(values => {
    console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
});
const boundSomeFunction = Rx.Observable.bindCallback($.getJSON);
boundSomeFunction("http://116.62.235.245:80/api/software").subscribe(values => {
    console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
});
// const boundSomeFunction = Rx.Observable.bindCallback(callback);
// boundSomeFunction().subscribe(values => {
//     console.log("valuse", values) // [5, 'some string', {someProperty: 'someValue'}]
// });
