$(document).ready(function(){
    $('.imgDiv').draggable();
    cookieCheck();
    
});


function cookieCheck(){
    if( $.cookie('popup') == null ){
        $('.imgDiv').show();
    }
    if( $.cookie('popup') == ':checked' ){
        $('.imgDiv').hide();
    }

    $('#cls_btn').on('click', closePopUp);
    
}
function closePopUp(){
    if( $('#ano').is(':checked') ){
        $.cookie('popup',':checked', {expires: 3, path: '/'});
    }
    $('.imgDiv').fadeOut('slow');
}