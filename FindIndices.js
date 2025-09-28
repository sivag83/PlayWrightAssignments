function findIndice(){
    const indArr = [2, 4, 7, 8, 11, 14];
    const target = 18;
    let indices=[]
    for(let i=0; i<indArr.length; i++){

        for(let j=i+1; j<indArr.length; j++){
        if(indArr[i]+indArr[j]===18){
         indices.push([indArr[i], indArr[j]])
              
        }
        
        }
       
    }  
    return indices
    
}

console.log(findIndice())