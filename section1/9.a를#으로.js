function solution(s){
    let answer="";
    for(let x of s){
        if(x==="A") answer+="#"
        else answer += x;
    }

    return answer;
}

let str1="BANANA";
console.log(solution(str1));



function solution(s){
    let answer=s;
    answer=answer.replaceAll("A","#");
    return answer;
}

let str2="BANANA";
console.log(solution(str2));
