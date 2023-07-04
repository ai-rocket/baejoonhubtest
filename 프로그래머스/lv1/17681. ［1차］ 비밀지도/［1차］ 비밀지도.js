function numToArr(num, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const rest = num % 2;
        arr.push(rest)
        num = (num - rest) / 2;
    }
    return arr.reverse();
}
function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        const n1 = numToArr(arr1[i], n)
        const n2 = numToArr(arr2[i], n)
        const n3 = [];
        for (let j = 0; j < n; j++) {
            n3.push(n1[j] || n2[j] ? 1 : 0);
        }
        answer.push(n3);
    }
    
    return answer.map((n) => n.map(a => a ? "#" : ' ').join(''));
}