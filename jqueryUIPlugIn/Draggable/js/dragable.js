$(document).ready(function(){
    
    $('#drag1 li').eq(0).draggable();
    $('#drag1 li').eq(1).draggable();
    $('#drag1 li').eq(2).draggable();
    $('#drag1 li').eq(3).draggable();
    $('#drag1 li').eq(4).draggable();

    $('#dragable img').eq(0).draggable({ axis: 'x'});
    $('#dragable img').eq(1).draggable({ axis: 'y'});

    $('#wrap img').draggable({containment: '#wrap', scroll: false});
    
    var count=0;
    $('#container span').draggable({containment: '#container', scroll: false,
        start : function(){   //시작 시 1회 Callback
            $('#pos').text('start');
        },
        drag : function(){  //드래그 중이면 반복하여 Callback
            count++;
            $('#pos').text(count);
        },
        stop : function(){  //정지 시 1회 Callback
            $('#pos').text('end');
        }
    });
});