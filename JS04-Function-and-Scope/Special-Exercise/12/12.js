function draw (n){

    let str = ""

for (let i = n ; i >= 1  ; i--){

    for(let j=1 ; j <= n ; j++){

        if (j==i) {

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

draw(3)