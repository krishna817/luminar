var num1=2
var num2=50
// if(num1==2){
//     console.log(`${num1} is prime`);
// }

for(let i=num1;i<=num2;i++){
    var flag=0
    for(let j=2;j<i;j++){

        if(i%j==0){
            flag=1
            break
        }

    }
    if(flag==0){
        console.log(i);
    }
}
