function stringChop(str, size) {
	let result = [];
    let newStr = "";
    for(let i=0;i<str.length;i++){
        newStr = newStr + str[i];
        if(newStr.length ===size){
            result.push(newStr);
            newStr = "";
        }
    }
    if(newStr.length>0){
        result.push(newStr);
    }
    return result;
}

// Do not change the code below
const str = prompt("Hello, world!");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
