function solution(s){
    let answer="YES";
    let len=s.length;
    s=s.toLowerCase();
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i]!==s[len-i-1]) return "No";
    }
    return answer;
}

let str1="goooG";
console.log(solution(str1));

function solution(s){
    let answer="Yes";
    let len = s.length;
    s=s.toLowerCase()
    if(s.split("").reverse().join("")!==s)return "No" 
    return answer;
}

let str2="gooG";
console.log(solution(str2));