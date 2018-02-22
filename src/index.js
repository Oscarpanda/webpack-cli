import echarts from 'echarts';
import Rx from 'rxjs/Rx';
Rx.Observable.of(1,2,3)
let arr = [];
for (let i = 0; i<300; i++ ){
    let j = Math.floor(Math.random() * 300)
    arr.push(j);
}
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

select(arr)
console.log(arr)
 // 使用刚指定的配置项和数据显示图表。

// 选择排序

function select(arr) {
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
        setTimeout(()=>{
            option.series[0].data = temparr;
            myChart.setOption(option);

        }, i * 50)
    }
}

var myObservable = Rx.Observable.create(observer => {
  observer.next('foo');
  observer.next('0');
});
myObservable
    .delay(2000)
    .subscribe(value => console.log(value));

// option.series[0].data = arr;
// myChart.setOption(option);
