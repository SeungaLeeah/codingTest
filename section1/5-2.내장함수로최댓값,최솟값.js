// function solution(arr){
//     let answer=Math.min(...arr);
//     console.log(Math.max(...arr));
    
//     return answer;
// }


// let arr=[5, 3, 7, 11, 2, 15, 17];
// console.log(solution(arr));


function solution(arr){
    let answer=Math.min.apply(null, arr);
    console.log(Math.max.apply(null, arr));
    
    return answer;
}


let arr=[5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));