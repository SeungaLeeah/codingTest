function solution(s){  
    let answer="";
    for(let x of s){
        if(x===x.toLowerCase()) answer+=x.toUpperCase();
        else answer+=x.toLowerCase();
    }
    return answer;
}
console.log(solution("StuDY"));


function solution(s){  
    let answer="";
    for(let x of s){
        let num = x.charCodeAt();
        if(num>=97 && num<=122)answer+=String.fromCharCode(num-32);
        else answer+=String.fromCharCode(num+32)
    }
    return answer;
}
console.log(solution("StuDY"));

