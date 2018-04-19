class myVue {
    constructor(options){
        this.options = options;
        this.el = document.querySelector(options.el);
        this.data = options.data;
        this.methods = options.methods;
        this.binding = {};
        this.obverse(this.data);
        this.complie(this.el);
    }
    complie(root) {
        let nodes = root.children;
        for (let i = 0; i< nodes.length; i++){
            let node = nodes[i];
            if (node.children.length) {
                this.complie(node);
            }

            if (node.hasAttribute("v-click")) {
                node.onclick = () =>{

                    let fn = this.methods[node.getAttribute("v-click")];
                    let bindfn = fn.bind(this.data);

                    return bindfn();
                };

            }
            if (node.hasAttribute("v-bind")) {
                this.binding[node.getAttribute("v-bind")].directives.push(
                    new Watcher("text", node, this, node.getAttribute("v-bind"), "innerHTML")
                );
            }
            if (node.hasAttribute("v-model") && (node.tagName === "INPUT" || node.tagName === "TEXTAREA" )) {
                node.addEventListener("input", (e) => {
                    let attrVal = node.getAttribute("v-model");
                    this.binding[attrVal].directives.push(
                        new Watcher("input", node, this, node.getAttribute("v-model"), "value")
                    );
                    console.log(e);
                    let fn = () =>{
                        this.data[attrVal] = node.value;
                    }
                    return  fn();
                });

            }
        }
    }
    obverse (obj) {
        let value;
        for ( let key in obj) {

            // console.log(obj,key)
            value = obj[key];
            this.binding[key] = {
                directives:[]
            };
            if(typeof value === "object") {

                this.obverse(value);
            }
            let binding = this.binding[key];
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get: () => {
                    console.log(`获取到${JSON.stringify(value)}`);
                    return value;
                },
                set: (newVal) => {
                    console.log(`更新${newVal}`) ;
                    if (value !== newVal){
                        value = newVal;
                        binding.directives.forEach((value) => {
                            value.update();
                        });
                    }

                }
            });
        }
    }
}

class Watcher {
    /**
     * @param {string} name
     * @param {array} el
     * @param {myVue} vm
     * @param {string} exp
     * @param {string} attr
     */
    constructor(name, el, vm, exp, attr) {
        this.name = name;
        this.el = el;
        this.vm = vm;
        this.exp = exp;
        this.attr = attr;
    }
    update(){
        this.el[this.attr] = this.vm.data[this.exp];
    }
}
export default myVue;