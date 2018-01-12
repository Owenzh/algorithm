/**

Given a sorted array, remove the duplicates in place such that each element appear only once 
and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
For example, Given input array A = [1,1,2] ,
Your function should return length = 2, and A is now [1,2] .

*/

function solution1(A) {
    var linear_A = new LinearTable();
    var a = linear_A.initLinearTable(A);
    for (var i = 0; i < linear_A.getLength() - 1; i++) {
        if (a[i] == a[i + 1]) {
            linear_A.deleteNodeByPosition(i + 1);
            i = i - 1;
        }
    }
    return linear_A.toObject();
}

function solution2(A) {
    if (A.length == 0) return 0;

    var inx = 1;
    var len = A.length;
    for (var i = 1; i < len; i++) {
        if (A[i] != A[inx - 1]) {
            A[inx] = A[i];
            inx++;
        }
    }
    A.length = inx;
    return {
        values: A,
        length: inx
    };
}

function test() {
    var times = 99;

    console.time('s1');
    // for (var i = 0; i < times; i++)
        console.log(solution1([1, 1, 1, 1, 2, 2, 3, 3, 3, 5, 5]));
        
    console.timeEnd('s1')

    console.time('s2');
    // for (var j = 0; j < times; j++)
        console.log(solution2([1, 1, 1, 1, 2, 2, 3, 3, 3, 5, 5]));
        
    console.timeEnd('s2')
}

test();