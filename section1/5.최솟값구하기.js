function solution(arr){         
    let answer, min = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i<arr.length; i++){
        if(arr[i]<min) min= arr[i];
    }
    answer=min;
    return answer;

}

let arr=[5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
