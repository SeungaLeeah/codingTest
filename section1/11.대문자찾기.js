// function solution(s){         
//     let answer="";
//     for(let x of s){
//         if(x===x.toUpperCase()) answer++
//     }
//     return answer;
// }

// let str="KoreaTimeGood";
// console.log(solution(str));


function solution(s){         
    let answer="";
    for(let x of s){
        let num = x.charCodeAt();
        if(num>=65 && num<=90) answer++
    }
    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));
