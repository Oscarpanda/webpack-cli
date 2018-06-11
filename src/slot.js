class Slot {
    constructor(id, next) {
        this.id = id; // 自身id
        if (next) {
            this.next = next;// 下个节点
        }
        this.type = ""
    }
}
export default Slot; 