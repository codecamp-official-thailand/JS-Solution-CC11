function draw(n) {

let str = "" 

for(let i=1 ; i <= n ; i++){
for (let j=1 ; j <=n ; j++){
    
    if( j <= i ){

        str += "*"
    }

    else {
        
        str += "_"
    }

}

str += "\n"

}
console.log(str)

}

draw(4)