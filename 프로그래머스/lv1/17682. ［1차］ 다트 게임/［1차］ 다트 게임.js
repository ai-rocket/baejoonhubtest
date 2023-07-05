const double = (num) => num ** 2;
const triple = (num) => num ** 3;
const star = (num) => num * 2;
const acha = (num) => num * -1;
function solution(dartResult) {
    let mode = 'num'; // 'num' | 'bonus' | 'option'
    let currentRound = 0;
    const roundScores = [0, 0, 0];
    for (let i = 0; i < dartResult.length; i++) {
        switch(mode) {
            case 'num':
                if (dartResult[i] === '1' && i !== dartResult.length - 1 && dartResult[i + 1] === '0') {
                    roundScores[currentRound] = 10;
                    i++;
                } else {
                    roundScores[currentRound] = Number(dartResult[i])   
                }
                mode = 'bonus';
                break;
            case 'bonus':
                if (dartResult[i] === 'D') {
                    roundScores[currentRound] = double(roundScores[currentRound]);
                } else if (dartResult[i] === 'T') {
                    roundScores[currentRound] = triple(roundScores[currentRound])
                }
                mode = 'option';
                break;
            case 'option':
                if (dartResult[i] === '*') {
                    roundScores[currentRound] = star(roundScores[currentRound]);
                    if (currentRound !== 0) {
                        roundScores[currentRound - 1] = star(roundScores[currentRound - 1]);
                    }
                } else if (dartResult[i] === '#') {
                    roundScores[currentRound] = acha(roundScores[currentRound]);
                } else {
                    i--;
                }
                currentRound += 1;
                mode = 'num';
                break;
        }
    }
    return roundScores[0] + roundScores[1] + roundScores[2];
}