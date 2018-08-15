class Slot {
    constructor(id, next,type,start,flag) {
        this.id = id; // 自身id
        this.content="";
        if (next) {
            this.next = next;// 下个节点
        }
        this.type = type 
        if (this.type === "comp") {
            this.start = start
        }
        if (flag === "first") {
            this.flag = "first";
        }

    }
}
export default Slot; 