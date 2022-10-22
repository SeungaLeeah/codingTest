function solution(s){         
    let answer= s.toUpperCase();
    return answer;
}
let str1="ItisTimeToStudy";
console.log(solution(str1));


function solution(s){
    let answer="";
    for(let x of s){
        if(x===x.toLowerCase()) answer+=x.toUpperCase();
        else answer += x;
    }
    return answer;
}
let str2="ItisTimeToStudy";
console.log(solution(str2));


function solution(s){
    let answer="";
    for(let x of s){
        let num = x.charCodeAt();
        if(num >= 97 && num <=122) answer+=String.fromCharCode(num-32);
        else answer += x;
    }
    return answer;
}

let str3="ItisTimeToStudy";
console.log(solution(str3));
 