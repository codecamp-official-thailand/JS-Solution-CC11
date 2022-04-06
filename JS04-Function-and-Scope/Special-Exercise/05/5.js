function draw (n){
    let a = n
    let string = ""; 
    for (let i = 1 ; i <= n ; i++) {
    for (let j = 1 ; j <= n ; j++) {
    
        string += a
        
    }
    
    string += "\n";
    a--
    }
    
    console.log(string);
    }
    
    
    draw(5);