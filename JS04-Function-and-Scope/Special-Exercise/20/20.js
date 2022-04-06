function draw(n){

    let str = ""
    let col = n
    let row = 2*n-1
    let count = 1 

    for(let i = 1 ; i <= row ; i++){
        for(let j = col ; j > 0 ; j--){
        
            if(i<=n){
                j <= i ? (str += count,count++)  : (str += "_");
            }
            else{ 
                j > row-i+1 ? (str += "_") : (str += count,count++);
                
            }
        
        }
        
        str += "\n"
    }
    console.log(str)
}

draw(4)