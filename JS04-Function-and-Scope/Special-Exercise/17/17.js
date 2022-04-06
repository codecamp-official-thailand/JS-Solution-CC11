function draw(n){

    let str = ""

    for (i = n ; i > 0 ; i--){
        for (j = 1 ; j <= n ; j++){
        
        j >= i ? (str += "*") : (str += "_");

        }
        str += "\n"
    }

    console.log(str)
}

draw(4);