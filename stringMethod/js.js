$(document).ready(function(){
    
});

function upperCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
function checkSpam(str){
    if(typeof str != 'string') return undefined;
    str = str.toLowerCase();
    
    let result = ( ~str.indexOf('viagra') || ~str.indexOf('xxx') ) ? true : false;
    return result;
}
function truncate(str, maxlength){
    if(typeof str != 'string' || typeof maxlength != 'number') return undefined;
    if(str.length > maxlength) return str.slice(0, maxlength) + '...'; else return str;
}
function extractCurrencyValue(str){
    let i=0;
    return (str[i] == '$') ?
        str.slice(i+1) : str;
}

function arrayTest(){
    styles = [ "Jazz", "Blues"]; console.log(styles);
    styles.push('Rock-and-Roll');   console.log(styles);
    styles[parseInt(styles.length / 2)] = 'Classics';console.log(styles);
    styles.shift(); console.log(styles);
    styles.unshift('Rap', 'Reggaes');   console.log(styles);
}

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

function sumInput(){
    let count = 0, sum = 0, input = '';
    let arr = new Array();
    while(true){
        input = window.prompt(`숫자를 입력하세요 (${count+1}회 입력 중): `, 0);
        if(isNaN(Number(input)) || input === null ){
            break;
        }
        arr[count] = Number(input);
        count++;
    }
    for(let key of arr){
        sum += key;
    }
    return sum;
}

let ary = [
    {id : 126, name: 'Jona'},
    {id : 22, name: 'Eona'},
    {id : 31, name: 'Anonona'}
];

let cho = ary.find(function(item){
    if(item.id == 2){
        return true;
    }
});
let choArrow = ary.find((item) => item.id == 2);  // 화살표함수 기본 => 단항연산자 있을경우 해당 결과(true)가 반환됨
let filt = ary.filter((item) => item.name.includes('Ano'));

let sorttest = [1,2,35,-4,-1,15,4,6];
sorttest = sorttest.sort( (a,b) => b-a );

ary = ary.sort(function(a,b){return a.id-b.id;}); // 객체의 파라메터 기준으로 정렬