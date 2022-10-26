// function solution(str){
//     let answer="";
// 		for(let x of str){
// 			if(!isNaN(x))answer+=x;
// 		};
    
//     return parseInt(answer);
// }

// let str1="g0en2T0s8eSoft";
// console.log(solution(str1));


function solution(str){
    let answer=0;
    for(let x of str){
			if(!isNaN(x)) answer=answer*10+Number(x);
		}
    return answer;
}

let str2="g0en2T0s8eSoft";
console.log(solution(str2));