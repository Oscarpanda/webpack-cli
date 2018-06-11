import Slot from "./slot";
import xmlReader from "./xmlReader";
import $ from 'jquery';
class PXMap {
    constructor() {
        this.PXMap = [];
        this.slot = new Slot();
        console.log("3")
        console.log(this.slot.id);
    }
    addVideo(id, next) {
        let slot = new Slot(id, next,"video");
        this.PXMap.push(slot);
    }
    addComp(id,start,next) {
        let slot = new Slot(id, next,"comp",start);
        this.PXMap.push(slot);
    }
    insert(slot,after) {// 添加节点
        if (after) {
            this.PXMap.forEach((slot) => {
                if (slot.id === after) {
                    let beforeSlot = this.find(after)
                    console.log(beforeSlot)
                    beforeSlot.next = slot.id;
                }
            })
        }
        this.PXMap.push(slot);
    }
    show() {
        console.log(this.PXMap, "this.PXmap")
    }
    find(id){
        let finded; 
        this.PXMap.some((value) => {
            if (value.id === id) {
                finded = value
                return true;
            }
        })
        return finded;
    }
}

let pxmap = new PXMap()
let Slot1 = new Slot("1");
let Slot2 = new Slot("2");
pxmap.insert(Slot1);
pxmap.insert(Slot2, "1");
console.log(pxmap)
let xmlreader = new xmlReader();
xmlreader.readVideo()
setTimeout(() =>{
    console.log(xmlreader.ComponentArry, xmlreader.VideoArray)
    xmlreader.VideoArray.forEach((value)=>{
        pxmap.addVideo(value.id,value.next); 
    })
    xmlreader.readComponent(pxmap)
    xmlreader.ComponentArry.forEach((value) => {

    })
    pxmap.show();

}, 1000)