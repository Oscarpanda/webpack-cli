import myVue from "./myVue";
let app = new myVue({
    el: "#app",
    data: {
        number: 0
    },
    methods: {
        increment: function () {
            this.number ++;

            console.log(this.number, this);
            console.log("onclick");
        }
    }
});

// app.data.number = 3;
console.log(app.data.number);
