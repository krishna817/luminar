var arr=[10,11,12,13,14,15,17,18,22,24]
var lenofarr= arr.length
console.log(`length of array is ${lenofarr}`);
//print all even number
// for(let num of arr){
//     if(num%2==0){
//         console.log(num);
//     }
// }

//odd and even array
var oddarr=[]
var evenarr=[]
for(let num of arr){
    if(num%2==0){
        evenarr.push(num);
    }
    else{
        oddarr.push(num)
    }
}
console.log(`even elemets`);
console.log(evenarr);
// for(let element of evenarr){

//     console.log(` ${element}`);
// }
console.log(`odd elements`);
console.log(oddarr);
// for(let element of oddarr){
//     console.log(` ${element}`);
// }
