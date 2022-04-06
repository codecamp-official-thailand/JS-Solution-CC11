function draw(n){

    
    let row = 2*n-1   
    let str = ""
    

    for (let i = 1 ; i <= row ; i++){
        for(let j = n ; j > 0 ; j--){
        
            if(i<=n){
                j <= i ? (str += "*") : (str += "_");
            }
            else{ 
                j > row-i+1 ? (str += "_") : (str += "*");
                
            }
        
        }
        str += "\n"
    }
console.log(str);
}


draw(4)