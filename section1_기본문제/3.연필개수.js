function solution(n){
    let extra =(n%12)/12;
    let answer =(n/12)- extra;
    console.log(extra);
    answer += extra > 0 ? 1 : 0;
    return answer;
   
}
console.log(solution(178));

// 내장함수를 사용
function solution(n){
    let answer=Math.ceil(n/12);
    return answer;
}

console.log(solution(178));


