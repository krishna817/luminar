function cube(num1){
    var cube=num1*num1*num1
    return cube
}
function add(n1,n2){
    var sum=n1+n2
    return sum
}
function mul(n1,n2){
    var mul=n1*n2
    return mul
}
function divi(n1,n2){
    var divi=n1/n2
    return divi
}

CubeRes= cube(3)
AddRes=add(10,20)
MulRes=mul(10,20)
DivRes=divi(4,2)
console.log(`${CubeRes} cube` );
console.log(`${AddRes} Sum`);
console.log(`${MulRes} MULTIPLY FRESULT`);
console.log(`${DivRes} DIVISION RESULT`);
