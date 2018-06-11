import videoSlot from "./videoSlot"
class componentSlot{
    constructor(id, videoID,name,nextid, PXMap){
        this.id = id; // 自身id
        this.videoID= videoID;// 包含的videoID
        this.name = name;
        this.endId = ""
        this.start = videoID.split(",")[0]
        this.nextid = nextid
        this.structure = [];
        switch (name) {
            case "maintainorderbefore": {
                this.maintainorderBefore(PXMap)
            }
        }
    }
    maintainorderBefore(PXMapClass) {
        let videolist = this.videoID.split(",") 
        videolist.forEach((value) => {

            PXMapClass.PXMap.forEach((slot,index) =>{
                if (slot.id === value) {
                    PXMapClass.PXMap.splice(index, 1)
                }
            })
            console.log(PXMapClass.PXMap)

        })
        let first = new videoSlot(this.start,videolist[1]+  "," + this.nextid)
        let second = new videoSlot(videolist[1],videolist[1]+ "," + this.nextid);
        let three = new videoSlot(videolist[2],this.nextid)
        this.structure.push(first)
        this.structure.push(second)
        this.structure.push(three)
        PXMapClass.addComp(this.id,this.start,this.nextid)

        console.log(this.structure,this.videoID,PXMapClass.PXMap,this,'11',videolist);

    }
}
export default componentSlot; 