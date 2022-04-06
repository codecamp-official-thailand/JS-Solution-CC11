function draw (n){

    let string = " "

    for (i = 1 ; i <=n  ; i++){

    a = i
    b = i     
        for (j=1 ; j <= n ; j++){

            string += a
            a += b

        }

    string += "\n"
    }

    console.log(string)
}
 

draw(3)