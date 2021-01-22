$(document).ready(function(){
    moveBox();
});
function init(){
    $box = $('#mov_box');
    $width = $('div:last-of-type').width();
    $boxLeftWidth = $($box).css('margin-left');
}
function moveBox(){
    var $back = $('#back');
    var $go = $('#go');
    
    $($back).on('click', function(){
        init();
        var px = marginLeftCal( $boxLeftWidth );

        if( px > 0){
            if(!$($box).is(':animated')){
                $($box).animate({marginLeft: '-=50px'}, 750, 'swing');
            }
        }
    });
    
    $($go).on('click', function(){
        init();
        var px = marginLeftCal( $boxLeftWidth );
        
        if( $width - 50 > px){
            if(!$($box).is(':animated')){
                $($box).animate({marginLeft: '+=50px'}, 750, 'swing');    
            }
        }
    });
}
function marginLeftCal(str){
    var box_margin_val = str;
    for(var i=0; i < box_margin_val.length; i++){
        if(box_margin_val[i] == 'p'){ // 750px
            box_margin_val = box_margin_val.substr(0,i);
            break;
        }
    }
    return box_margin_val;
}