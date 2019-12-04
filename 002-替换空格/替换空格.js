function replaceSpace(str) {
    // return str.replace(/\s/g, '%20');

    let output = '';
    for(let i=0; i<str.length; i++){
        if(str[i] == ' '){
            output += '%20';
        }else{
            output += str[i];
        }
    }
    return output;
}



str = 'We Are Happy';
result = replaceSpace(str);
console.log(result);

