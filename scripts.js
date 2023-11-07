let theme = 'lite';
//$('.wrapper-dark').hide();
setInterval(() => {
    if (theme == 'lite'){
        $('.theme-btn').click(function(){
            $('.theme-btn').css('background-color','#232421');
            $('section').css('background-color','#232421');
            $('#head-title').css('color','#232421');
            $('.wcc-name').css('color','#232421');
            $('footer').css('color','#d1e4e3');
            $('.theme-btn').addClass('theme-btn-dark');
            $('.theme-btn').removeClass('theme-btn');
            theme = 'dark';
        })
    }
    
    else if (theme == 'dark'){
        $('.theme-btn-dark').click(function(){
            $('.theme-btn-dark').css('background-color','#d1e4e3');
            $('section').css('background-color','#d1e4e3');
            $('#head-title').css('color','#d1e4e3');
            $('.wcc-name').css('color','#d1e4e3');
            $('footer').css('color','#232421');
            $('.theme-btn-dark').addClass('theme-btn');
            $('.theme-btn-dark').removeClass('theme-btn-dark');
            theme = 'lite';
        })
    }
    $('.wrapper-dark').css('height',(document.body.scrollHeight+'px'));
    $('.wrapper-dark').css('width',($('section').innerWidth()+'px'));
}, 1);
$(document).ready(function(){
    $('.wcc').click(function(){
      $('.wrapper-dark').show();
    });
});