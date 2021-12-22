let arr = [1, 2, 3, 5]; 
function summation(arr){
    let sum=0; 
    for(let i=0; i<arr.length;i++) {
        sum+=arr[i];
    }
    return sum;
}
console.log(product(arr)); 

function product(arr){
    let prod=1; 
    for(let i=0; i<arr.length;i++) {
        prod*=arr[i];
    }
    return prod;
}


export {
    summation, product
}; 
