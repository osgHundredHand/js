$(document).ready(function(){

});

function Calculator(){
    // new 생성 시 this = {};
    this.value1 = -1;
    this.value2 = -1;
    this.read = () => {
        this.value1 = Number(window.prompt('계산할 첫 번째 수 : ', ''));
        this.value2 = Number(window.prompt('계산할 두 번째 수 : ', ''));
    },
    this.sum = () => {
        return this.value1 + this.value2;
    },
    this.mul = () => {
        return this.value1 * this.value2;
    }
    
    //return this;
};
let calculator = new Calculator();

function Accumulator(startingNumb){
    this.value = startingNumb;
    this.read = () =>{
        let val = +prompt('누산할 값 입력 : ', '');
        this.value += val;
    }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함