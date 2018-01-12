/**

Given a sorted array, remove the duplicates in place such that each element appear only once 
and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
For example, Given input array A = [1,1,2] ,
Your function should return length = 2, and A is now [1,2] .

*/

function solution(A) {
    var len = A.length;
    for (var i = 0; i < len; i++) {
        if (A[i + 1] && (A[i] == A[i + 1])) {
            len--;
        }
    }
    return len;
}



function test() {
    var data = [1,1,2,2,2];
    var len = solution(data);

    var linear_A = new LinearTable();
    var a = linear_A.initLinearTable([0,12,39]);
    console.log(a);
    linear_A.insertNodeToEnd(2);
    linear_A.insertNodeToEnd(21);
    linear_A.insertNodeToEnd(1);
    linear_A.insertNodeToEnd(9);

    console.log(a);
    linear_A.insertNodeAtPosition(2,80);
    console.log(a);
    //[3, 2, 33, 21, 1, 9]
    linear_A.deleteNodeByPosition(5);
    console.log(a);
}

test();