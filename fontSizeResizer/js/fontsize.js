$(document).ready(function(){
    init(); // 초기 display 위해 init
    zoomBtn();
});
function init(){
    zoomVal = $('#wrap_p').css('font-size');
    $('#font_size').text(zoomVal);
    zoomVal = zoomVal.substr(0,2);
}
function zoomBtn(){
    $('#minus_btn').on('click', function(){ zoom('-')      });
    $('#plus_btn' ).on('click', function(){ zoom('+')      });
    $('#reset_btn').on('click', function(){ zoom('default')});
}

function zoom(checker){ // '-' or '+' or 'default'
    var pxVal = -1; // null값임.
    var pxDefault = 14; // 초기화시 px값
    var minPx = 10, maxPx = 48; // px 최소, 최대 범위를 정수로 지정.
    if(checker != 'default'){  // 'default' selector
        checker == '-' ? pxVal = --zoomVal : pxVal = ++zoomVal; // '-' , '+' selector
        pxVal < minPx ? pxVal = minPx : zoomVal; // 최소 px 제한 로직
        pxVal >= maxPx ? pxVal = maxPx : zoomVal;  // 최대 px 제한 로직
    }else{
        pxVal = pxDefault;
    }
    
    pxVal += 'px';  
    $('#wrap_p').css('font-size', pxVal);
    init(); // zoomVal이 브라우저 최소px인 10 미만으로 떨어져도 css('font-size')를 새로 받아오기 때문에 10px 이하로 떨어지지 않는다
}