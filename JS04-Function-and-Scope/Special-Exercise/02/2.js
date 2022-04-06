function method(n){

    let string = ""

    for (let i = 0 ; i < n ; i++){
        
        for(let k = 0 ; k < n ; k++){
        string += "*"
        }
        
        string +="\n";
    }

     console.log(string);
    

}

method(3);