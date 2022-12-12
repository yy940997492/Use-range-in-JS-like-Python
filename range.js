/*
 * @Date: 2022-12-12 20:42:07
 * @LastEditTime: 2022-12-12 20:42:19
 */
function _Range(from, to) {
    this.from = from
    this.to = to

    this[Symbol.iterator] = function () {
        this.current = this.from;
        return this;
    }

    this.next = function () {
        if (this.current < this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

function range(from,to ){
    return new _Range(from,to)
}

// 现在它可以运行了！
for (num of range(1, 5)) {
    console.log(num); // 1, 然后是 2, 3, 4, 4
}