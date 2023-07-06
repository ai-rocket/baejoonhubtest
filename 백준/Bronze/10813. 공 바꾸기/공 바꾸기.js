const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(i + 1);
}
for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const t = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = t;
}
console.log(arr.join(' '))