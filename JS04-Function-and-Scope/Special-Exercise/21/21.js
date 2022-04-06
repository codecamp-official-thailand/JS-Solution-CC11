function draw(n){

    let str = ""
    let col = 2*n-1
  

    for(let i = 1 ; i <= n ; i++){

    let  lowerLimit = n-i+1 
    let  HigherLimit = n+i-1  
        
    for( let j = 1 ; j <= col ; j++){
        ((j >= lowerLimit) && (j <= HigherLimit)) ? (str += "*") : (str += "_");

        }
    str += "\n"
    }
    console.log(str);
}

draw(10);