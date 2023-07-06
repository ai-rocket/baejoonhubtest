const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = Array(n).fill(0);
for (let i = 1; i <= m; i++) {
    const [s, e, k] = input[i].split(' ');
    for (let j = s - 1; j < e; j++) {
        arr[j] = k;
    }
}
console.log(arr.join(' '))