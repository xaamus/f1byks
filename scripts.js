let theme = 'lite';
setInterval(() => {
    if (theme == 'lite'){
        $('.theme-btn').click(function(){
            $('.theme-btn').css('background-color','#232421');
            $('section').css('background-color','#232421');
            $('#head-title').css('color','#232421');
            $('.wcc-name').css('color','#232421');
            $('footer').css('color','#d1e4e3');
            $('.wcc').find('img').css('filter','brightness(0.85)')
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
            $('.wcc').find('img').css('filter','brightness(1)')
            $('.theme-btn-dark').addClass('theme-btn');
            $('.theme-btn-dark').removeClass('theme-btn-dark');
            theme = 'lite';
        })
    }
    
    $('.wrapper-dark').css('height',(document.body.scrollHeight+'px'));

    $('.wrapper-dark').click(function(){
        $('.top-card').remove();
        $('.wrapper-dark').remove();
        $('.active-card').find('.wcc-name').removeClass('active-title')
        $('.active-card').find('img').removeClass('active-img')
        $('.active-card').removeClass('active-card')
    })
}, 1);

$(document).ready(function(){
    $('.wcc').click(function(){   
        $('section').after('<div class="wrapper-dark col-12">') 
        $('.wrapper-dark').show();
        $('section').after('<div class="top-card col-11 col-sm-9 col-md-7 col-lg-5 col-xl-3">')
        $('.top-card').append('<div id="card-image">')
        $('.top-card').append('<div id="card-title">')
        $('.top-card').append('<div id="card-desc">')
        $(this).addClass('active-card')
        $('.active-card').find('.wcc-name').addClass('active-title')
        $('.active-card').find('img').addClass('active-img')
        $('#card-title').html($('.active-title').text())
        $('#card-image').css('background-image','url('+$('.active-img').attr('src')+')')
        let team = $('.active-title').text().slice(0,3).toLowerCase()
        $('#card-desc').html('<span>Kierowca 1: <b>Lando Norris</b></span><br><span>Kierowca 2: <b>Oscar Piastri</b></span><br><span>Punkty: <b>420</b></span>')
    });
});
setInterval(()=>{
    if (theme == 'dark'){
        $('#card-title').css('color','#232421');
        $('#card-desc').css('background-color','#232421');
        $('#card-desc').css('color','#d1e4e3');
        $('.wrapper-dark').css('background-color','#d1e4e333');
    }
    
    else if (theme == 'lite'){
        $('#card-title').css('color','#d1e4e3');
        $('#card-desc').css('background-color','#d1e4e3');
        $('#card-desc').css('color','#232421');
        $('.wrapper-dark').css('background-color','#23242167');
    }
})