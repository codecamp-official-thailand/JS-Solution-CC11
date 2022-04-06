function draw (n){

    let str = ""

for (let i = 1 ; i <= n ; i++){

    for(let j=1 ; j <= n ; j++){

        if (i==j) {

            str += "_"
        }

        else {
            str += "*"
        }

    }

    str += "\n"

}

console.log(str);

}

draw(2)