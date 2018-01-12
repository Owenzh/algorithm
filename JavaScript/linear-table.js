/**
 * 利用数组Array构造顺序线性表数据结构
 * 
 */
var LinearTable = function () {
    this.linear = null;
};


/**
 * 初始线性表
 * 
 * @returns 
 */
LinearTable.prototype.initLinearTable = function () {
    this.linear = new Array();
    if (arguments.length > 0) {
        var initdata = arguments[0];
        if (initdata instanceof Array) {
            for (var i = 0; i < initdata.length; i++) {
                this.linear[i] = initdata[i];
            }
        } else {
            this.linear[0] = initdata;
        }
    }
    return this.linear;
}

/**
 * 向线性表结尾插入节点
 * 
 * @param {any} n 
 */
LinearTable.prototype.insertNodeToEnd = function (n) {
    var len = this.getLength();
    this.linear[len] = n;
}


/**
 * 在某个位置上插入节点
 * 
 * @param {any} pos 
 * @param {any} node 
 */
LinearTable.prototype.insertNodeAtPosition = function (pos, node) {
    var len = this.getLength();
    if (pos == len) {
        this.insertNodeToEnd(node);
    } else if (pos >= 1 && pos < len) {
        var posinx = pos - 1;
        for (var i = len - 1; i >= posinx; i--) {
            this.linear[i + 1] = this.linear[i];
        }
        this.linear[posinx] = node;
    }
}

/**
 * 获取线性表长度
 * 
 * @returns 
 */
LinearTable.prototype.getLength = function () {
    return this.linear ? this.linear.length : 0;
}

/**
 * 根据节点位置获取线性表的节点,否则返回null.
 * 
 * @param {any} pos 
 * @returns 
 */
LinearTable.prototype.getNodeByPosition = function (pos) {
    return (this.linear && (pos >= 1) && this.linear[pos - 1]) ? this.linear[pos - 1] : null;
}

/**
 * 根据节点值获取其位置,否则返回-1
 * 
 * @param {any} node 
 * @returns 
 */
LinearTable.prototype.getPositionByNode = function (node) {
    var inx = -1;
    var len = this.getLength();
    for (var i = 0; i < len; i++) {
        if (this.linear[i] == node) {
            inx = i + 1;
            break;
        }
    }
    return inx;
}

/**
 * 删除某个位置上的节点
 * 
 * @param {any} pos 
 * @returns 
 */
LinearTable.prototype.deleteNodeByPosition = function (pos) {
    var len = this.getLength();
    if (pos > len || pos < 1) {
        return false;
    }
    if (pos == len) {
        this.linear.length = pos - 1;
        return true;
    }
    for (var i = pos - 1; i < len - 1; i++) {
        this.linear[i] = this.linear[i + 1];
    }
    this.linear.length--;
    return true;
}