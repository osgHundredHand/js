$(document).ready(function(){
    scrollXYPos();
    focusBasic();
    mouseoverFocus();
    selectedValExport();
    keyMapping();
    colorChanger();
    groupOnTest();
});
function scrollXYPos(){
    //====================================
    //  브라우저 window의 scroll event를 실시간 감지하여 scrollBar의 pos를 가져오는 함수.
    //====================================
    $(window).on('scroll', function(){
        var scTop = $(this).scrollTop();
        var scLeft = $(this).scrollLeft();
        $('#sc_top > span').text(scTop);
        $('#sc_left > span').text(scLeft);
    });
}
function focusBasic(){
    //====================================
    //  button 단일 개체 focus 이동, form 객체에 focusin,out을 걸어 하위 모든 객체의 focus 이동이 감지되면 form을 제어함.
    //====================================
    $('#id1, #id2').on({
        'focus' : function(){
            $(this).css('background-color', 'pink');
        },
        'blur' : function(){
            $(this).css('background-color', '#fff')
        }
    });

    $('#form1').on({
        'focusin' : function(){
            $(this).css('background-color', 'pink');
        },
        'focusout' : function(){
            $(this).css('background-color', 'white');
        }
    });
}
function mouseoverFocus(){
    //====================================
    //  on 이벤트를 이용한 2개 이상의 이벤트 메소드 그룹핑.
    //====================================
    $('#btn2').on({
        'mouseover focus' : function(){
            $('#btn2').next().hide('slow', function(){
                alert('숨겨집니다');
            });
        },
        'mouseout blur' : function(){
            $('#btn2').next().css('display', 'block');
        }
    });
}
function selectedValExport(){
    //====================================
    //  select box을 사용, 선택한 option이 갖고 있는 value attr을 export하는 함수.
    //====================================
    $('#rel_sel').on('change', function(){
        $('#setup').text($(this).val());
    });
}
function keyMapping(){
    //====================================
    //  keydown event. 브라우저의 임의의 모든 키보드 입력(펑션키 포함)이 감지 시, kdown()으로 이관.
    //====================================
    $(window).on('keydown', kdown);
}
function kdown(e){
    //====================================
    //  keydown event에서 발생한 키보드 입력값(키입력 각각에 매칭하는 ASCII KeyCode)가 이벤트 핸들러 변수 e에 담겨있음~~
    //====================================
    var direct = '';
    
    switch(e.keyCode){
        case 37 :
            direct = 'left';
            break;
        case 38 :
            direct = 'top';
            break;
        case 39 :
            direct = 'right';
            break;
        case 40 :
            direct = 'bottom';
            break;
    }
    $('#test').val(direct);
}
function colorChanger(){
    //====================================
    //  모든 ul li a 들 중 click event가 발생한 a 자체만을 (this) 선택해 핸들링하는 함수.
    //====================================
    $('ul > li > a').on({
        'click' : function(){
            var sel = $('ul > li > a').index(this); // 해당 index(this) 메서드는 클릭이 발생한 a 하나의 인덱스값을 return함. (index : 0~3)
            switch(sel){
                case 0 :
                    $('body').css('background-color', 'red');
                    $(this).css('font-size', '20px');
                    break;
                case 1 :
                    $('body').css('background-color', 'blue');
                    $(this).css('font-size', '20px');
                    break;
                case 2 :
                    $('body').css('background-color', 'green');
                    $(this).css('font-size', '20px');
                    break;
                case 3 :
                    $('body').css('background-color', 'yellow');
                    $(this).css('font-size', '20px');
                    break;
            }
        },
        'blur' : function(){
            $(this).css('font-size', '16px');
        }
    });
   
}
function groupOnTest(){
    /*
    //단독 이벤트 등록 방식
    $('#btn0').addClass('on');
    $('#btn0.on').on('mouseover focus', function(){
        alert('hello grup!');
    });
    */

   //live event 등록방식
    $(document).on('mouseover focus', '#btn0.on', function(){
        alert('hello grup!');
    });
    
    $(document).one('mouseover focus', '#btn_once.on', function(){ //각각의 이벤트(over, focus 각각 독립적으로 1회)에 1회성의 이벤트 핸들러 설정.
        alert('hello group!(once)');
    });
  
    $('#Offbtn0').on('click', function(){
        $(document).off('mouseover focus', '#btn0.on');  // document에 on을 걸었으므로 off도 document로 지정해야함!!!!!
    });
    $('#Offbtn_once').on('click', function(){
        $(document).off('mouseover focus', '#btn_once.on')
    });

    $('#btn0').addClass('on'); // 상위의 mouseover, focus 이벤트가 등록 된 이후 생성된 임의의 동적 요소; 순서에 상관없이 동작함!
    $('#btn_once').addClass('on'); // 상위의 mouseover, focus 이벤트가 등록 된 이후 생성된 임의의 동적 요소; 순서에 상관없이 동작함!
}