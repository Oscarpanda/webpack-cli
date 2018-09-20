

let a  = function  () {
    console.log(1)
}

function hasPrototypeProperty(obj, name) {
    return !obj.hasOwnProperty(name) && name in obj

}
let b = {c:1};
let A = new a();
console.log("Function", Function)
console.log("Object", Object)
console.log("A.prototype",A.prototype);
console.log("a.prototype",a.prototype);
console.log("A.__proto__",A.__proto__);
console.log("a.__proto__",a.__proto__, a.__proto__ === Function.prototype);
console.log(A.__proto__,A.prototype,a.prototype,a.__proto__);
console.log(b.__proto__)
console.log(hasPrototypeProperty(b,'toString'))

console.log("Object.prototype",Object.prototype)
console.log("Function.prototype", Function.prototype)
console.log("Function.__proto__", Function.__proto__)
console.log("Object.prototype.__proto__",Object.prototype.__proto__)
console.log("Object.__proto__",Object.__proto__, Object.__proto__ === Function.__proto__)
console.log("Function.__proto__.__proto__", Function.__proto__.__proto__)
console.log("Function.prototype.__proto__", Function.prototype.__proto__)

