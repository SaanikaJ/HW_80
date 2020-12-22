
function right(){ 
var rightarray = []; 
for (var x=1; x < 6; x++){
    rightarray.push(document.getElementById("right_" + x).value);
}
var nocomma_right = rightarray.join(". "); 
document.getElementById("display_right").innerHTML= nocomma_right; 
}

function left(){ 
    var leftarray = [];
    for (x=1; x < 6; x++){
        leftarray.push(document.getElementById("left_" + x).value);
    }
    var nocomma_left = leftarray.join(". ");
    document.getElementById("display_left").innerHTML= nocomma_left; 
}

console.log(rightarray); 
console.log(leftarray);