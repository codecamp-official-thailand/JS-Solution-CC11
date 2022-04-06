function draw(n){

    let string = ""
    let a = 2

    for(let i = 1 ; i <=n ; i++){

        string += ` ${a} \n`
        a+=2;

    }

    console.log(string)

}


draw(3)