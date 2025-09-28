function findNumberType(num){
    let number =num
    if(number>0 ){
        return "Given Number is Positive"
    }if(number<0){
        return"Given Number is Negative"
    }else{
        return "Given Number is Zero"
    }
}

let findNumType= findNumberType(0)
console.log(findNumType)