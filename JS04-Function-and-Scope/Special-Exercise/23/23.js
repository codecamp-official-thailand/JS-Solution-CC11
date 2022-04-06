function draw(n){

    let str = ""
    let col = 2*n-1
    let row = 2*n-1

    for(let i = 1 ; i <= row ; i++){

        if(i<=n){
            let  lowerLimit = n-i+1 
            let  HigherLimit = n+i-1  
        
            for( let j = 1 ; j <= col ; j++){
            ((j >= lowerLimit) && (j <= HigherLimit)) ? (str += "*") : (str += "_");
            }
            
            str += "\n"
        }

        else{
            let  lowerLimit = i-n+1 
            let  HigherLimit = (3*n)-i-1  
                
            for( let j = 1 ; j <= col ; j++){
                ((j >= lowerLimit) && (j <= HigherLimit)) ? (str += "*") : (str += "_");
        
                }
            str += "\n"
            }
        }

    console.log(str)
    }
  




draw(5);