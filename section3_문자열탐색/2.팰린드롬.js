// function solution(s){
//     let answer="YES";
//     let len=s.length;
//     s=s.toLowerCase().replace(/[^a-z]/g,'');

//     for(let i=0; i<Math.floor(len/2); i++){
//         if(s[i]!==s[len-i-1]) return "No";
//     }
//     return answer;
// }
// let str1="found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str1));

function solution(s){
    let answer="Yes";
    let len = s.length;
    s=s.toLowerCase().replace(/[^a-z]/g,'');

    if(s.split("").reverse().join("")!==s)return "No";
    return answer;
}

let str2="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str2));