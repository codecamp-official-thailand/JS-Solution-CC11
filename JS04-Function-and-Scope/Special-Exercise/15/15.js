function draw(n){
let str = ""
after = n-1

for (let i = 1 ; i <= (2*n - 1) ; i++){
if (i < n ){
    for(let j = 1 ; j <= n ; j++){
        if(j<=i){
            str+= "*"
        }
        else {
            str += "_"
        }        
    }
str += "\n"

}
else if (i == n) {

    for(let j = 1 ; j<=n ;j++){
        str += "*"
    }

str += "\n"

}
else if (i > n ){
    for(let j = 1 ; j <= n ; j++){
        if(j <= after){
            str += "*"
        }
        else {
            str += "_"
        }
    }
    after -- 
    str +="\n"
}
}
console.log(str)
}

draw(4)