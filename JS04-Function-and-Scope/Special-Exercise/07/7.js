function draw(n){

    let string = ""
    let a = n*n

    for( let i = 1 ; i <=n ; i++){
    for( let j = 1 ; j <=n ; j++){

        string += a 
        a--
    }

    string += "\n";
}


console.log(string)

}

draw(5);