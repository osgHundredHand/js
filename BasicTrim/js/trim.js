$(document).ready(function(){
    trimButton('#sub');
});

function trimButton(bid){
    $bid = $(bid);
    $bid.click(function(){
        var str = String($('#name').val());        
        alert( strTrim(str) );
    });
}
/*
function trimTest(){
    data = window.prompt('insert triming test data','1,"  word","  word  "... any word');
    console.log(strTrim(data));
}
*/

function strTrim(string){
    var result = rmltr(string);
    result = rmrtr(result);
    return result;
}
function rmltr(leftspaceremoveifyouwant){
    var word = leftspaceremoveifyouwant;
    for(var i=0; i < word.length; i++){
        if( word[i] != ' '){
            word = word.substr(i, word.length);
            break;
        }
    }
    return word;  // 1234
}
function rmrtr(rightspcaeremoveifyouwant){
    var word = rightspcaeremoveifyouwant;
    for(var i= word.length-1; i >= 0; i--){
        if( word[i] != ' '){
            i++;
            word = word.substr(0, i);
            break;
        }
    }
    return word;
}