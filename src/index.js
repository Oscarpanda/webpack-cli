import echarts from 'echarts';
import Rx from 'rxjs/Rx';
import $ from 'jquery';
Rx.Observable.of(1,2,3)
let arr = numberCreator();
var myChart = echarts.init(document.getElementById('main'));
 // 指定图表的配置项和数据
var option = {
    title: {
        text: '排序算法'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '',
        type: 'bar',
        data: [] 
    }]
};
function numberCreator() {
    let arr = [];
    for (let i = 0; i<300; i++ ){
        let j = Math.floor(Math.random() * 300)
        arr.push(j);
    }
    return arr
}
 // 使用刚指定的配置项和数据显示图表。

// 选择排序

function select(x, observer) {
    let arr = x[0];
    let timer = x[1].timer;
    for (let i = 0 ; i < arr.length; i++ ){
        let index = i;
        let min = arr[index]
        for (let j = i; j< arr.length;j++){
            if ( min > arr[j]){
                min = arr[j];
                index = j;
            }
            
        }
        let temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
        let temparr = arr.slice(0, arr.length-1);
        let obj = {};
        obj.temparr = temparr;
        timer++;
        obj.timer = timer

        observer.next(obj);
    }
}

const createNumber$ = Rx.Observable.fromEvent($('#numberCreater'), 'click')
    .map(e => {
        console.log("map");
        return numberCreator()
    })
    .do(nums => {
        option.series[0].data = nums;
        myChart.setOption(option);

       // console.log(nums);
    });
createNumber$.subscribe(x => {
    console.log('click');
    console.log(x)
})
let currentType
const select$ = Rx.Observable.fromEvent($('.sortTypes'), 'change')
    .map(e => e.target)
    .map(x => x.options[x.selectedIndex].value)
    .map(type => {
        return {
            type,
            timer: 1
        }
    })
    .do(x =>{
        currentType = x.type
    });
const combine$ = Rx.Observable.combineLatest(createNumber$, select$)
var te1 = combine$
    .flatMap(x=>{
        return Rx.Observable.create((observer) => {
            select(x, observer);
        });
    });
te1.subscribe(x => {
        console.log("CONBIME")
        console.log("x", x);
        setTimeout(()=>{
            option.series[0].data = x.temparr;
            myChart.setOption(option);

        }, x.timer * 50)

    });
select$.subscribe(x => {
    console.log(x)
})
