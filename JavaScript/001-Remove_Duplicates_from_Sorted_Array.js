/**

Given a sorted array, remove the duplicates in place such that each element appear only once 
and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
For example, Given input array A = [1,1,2] ,
Your function should return length = 2, and A is now [1,2] .

*/

function solution(A) {
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

function test() {
    console.log(solution([1, 1, 1, 1, 2, 2, 3, 3, 3, 5, 5]));
    console.log(solution([1, 3, 3, 5]));
}

test();