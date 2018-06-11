class Slot {
    constructor(id, next,type,start) {
        this.id = id; // 自身id
        if (next) {
            this.next = next;// 下个节点
        }
        this.type = type 
        if (this.type === "comp") {
            this.start = start
        }
    }
}
export default Slot; 