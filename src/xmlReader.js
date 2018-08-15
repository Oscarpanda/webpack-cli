import $ from 'jquery';
import videoSlot from './videoSlot';
import compoentSlot from './componentSlot';
class xmlReader {
    constructor() {
        this.VideoArray = []
        this.ComponentArry= []
    }
    readVideo() {
        $.ajax({
            type: "get",
            url: "./courseVideo_0001.xml",
            datatype:"xml",
            success: (data) => {
                console.log(data);
                let videoarry = $(data).find("video");
                console.log(videoarry)
                videoarry.each((index, value) => {
                    let id = $(value).attr("key");
                    let next = $(value).attr("next");
                    let flag = $(value).attr("flag");
                    console.log(flag);
                    let singleVideoSlot = new videoSlot(id,next,flag);
                    this.VideoArray.push(singleVideoSlot);
                    
                })
                console.log(this.VideoArray)
        
            }
        })

    }
    readComponent(PXmap) {
        $.ajax({
            type: "get",
            url: "./courseComponent_0001.xml",
            datatype:"xml",
            success: (data) => {
                console.log(data);
                let componentarry = $(data).find("component");
                console.log(componentarry)
                componentarry.each((index, value) => {
                    let id = $(value).attr("cid");
                    let componentid= $(value).attr("videoID");
                    let name = $(value).attr("name");
                    let next= $(value).attr("nextId");
                    let singleComponentSlot = new compoentSlot(id,componentid,name,next,PXmap);
                    this.ComponentArry.push(singleComponentSlot);
                    
                })
        
            }
        })

    }
}
export default xmlReader; 