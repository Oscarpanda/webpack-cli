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
    addVideo(id, next,flag) {
        let slot = new Slot(id, next,"video",null,flag);
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
        console.log((this.PXMap), "this.PXmap")
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
    relate() {
        this.PXMap.forEach((slot) => {
            if (slot.type === "video") {
                // this.
                this.xmlreader.VideoArray.forEach((video) => {
                    if (video.id === slot.id) {
                        slot.content = video
                        // if (video.flag === flag) {
                        //     slot.flag = "first";
                        // }
                    }

                })

                console.log("d")
            }
            if (slot.type === "comp") {
                this.xmlreader.ComponentArry.forEach((comp) => {
                    if (comp.id === slot.id) {
                        slot.content = comp
                    }

                })
            }
        })

    }
    readXml() {
        this.xmlreader = new xmlReader();
        this.xmlreader.readVideo()
        setTimeout(() =>{
            console.log(this.xmlreader.ComponentArry, this.xmlreader.VideoArray)
            this.xmlreader.VideoArray.forEach((value)=>{
                this.addVideo(value.id,value.next,value.flag); 
            })
            this.xmlreader.readComponent(this)
            this.xmlreader.ComponentArry.forEach((value) => {
        
            })
            setTimeout(() => {
               this.relate();
               this.show();
        
            },1000)
        
        }, 1000)

    }

}

let pxmap = new PXMap()
pxmap.readXml()
// let Slot1 = new Slot("1");
// let Slot2 = new Slot("2");
// pxmap.insert(Slot1);
// pxmap.insert(Slot2, "1");
console.log(pxmap)