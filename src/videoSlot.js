class videoSlot {
    constructor(id, next,flag) {
        this.id = id; // 自身id
        this.next = next;// 下个节点
        if (flag === "first") {
            this.flag = "first";
        }
    }
}
export default videoSlot; 