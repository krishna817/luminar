// for(let i=10;i>=0;i--){
//     console.log(i);
// }

var num=109
var flag=0
for(let i=2;i<num;i++){
    if(num%i==0){
        // console.log(`${num} is not prime`);
        flag++;
        break;
    
    }
    // else{
    //     continue;
    // }
    // console.log(`${num} is prime`);
}
if(flag!=0){
    console.log(`${num} is not prime`);

}
else{
    console.log(`${num} is  prime`);

}