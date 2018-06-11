import videoSlot from "./videoSlot"
class componentSlot{
    constructor(id, videoID,name) {
        this.id = id; // 自身id
        this.videoID= videoID;// 包含的videoID
        this.name = name;
        this.structure = [];
        switch (name) {
            case "maintainorderbefore": {
                this.maintainorderBefore()
            }
        }
    }
    maintainorderBefore() {
        let first = new videoSlot(this.videoID, "轻度,正常")
        let second = new videoSlot("轻度","重度, 正常");
        let three = new videoSlot("重度","正常")
        this.structure.push(first)
        this.structure.push(second)
        this.structure.push(three)
        this.structure.concat(first, second, three)

        console.log(this.structure)

    }
}
export default componentSlot; 