function draw(n){

    let string = ""; 

    for(let i = 1 ; i <= n ; i++){
    for (let j = 1 ; j <= n ; j++){

        string += j ;
    }
    
    string += "\n";
}

console.log(string);
}

draw(3);