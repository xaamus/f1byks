let theme = 'lite';
setInterval(() => {
    if (theme == 'lite'){
        $('.theme-btn').click(function(){
            $('.theme-btn').css('background-color','#232421');
            $('section').css('background-color','#232421');
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
        $('section').after('<div class="top-card col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4">')
        $('.top-card').append('<div id="card-image">')
        $('.top-card').append('<div id="card-title">')
        $('.top-card').append('<div id="card-desc">')
        $(this).addClass('active-card')
        $('.active-card').find('.wcc-name').addClass('active-title')
        $('.active-card').find('img').addClass('active-img')
        $('#card-title').html($('.active-title').text())
        $('#card-image').css('background-image','url('+$('.active-img').attr('src')+')')
        let team = $('.active-title').text().slice(0,4).toLowerCase();
        let driver1, driver2, pts;
        switch(team){
            case "red ":
                driver1 = 'Max Verstappen';
                driver2 = 'Sergio Perez';
                pts = '782';
                break;
            case "merc":
                driver1 = 'Lewis Hamilton';
                driver2 = 'George Russell';
                pts = '382';
                break;
            case "scud":
                driver1 = 'Charles Leclerc';
                driver2 = 'Carlos Sainz';
                pts = '362';
                break;
            case "mcla":
                driver1 = 'Lando Norris';
                driver2 = 'Oscar Piastri';
                pts = '282';
                break;
            case "asto":
                driver1 = 'Fernando Alonso';
                driver2 = 'Lance Stroll';
                pts = '261';
                break;
            case "alpi":
                driver1 = 'Esteban Ocon';
                driver2 = 'Pierre Gasly';
                pts = '108';
                break;
            case "will":
                driver1 = 'Alex Albon';
                driver2 = 'Logan Sargeant';
                pts = '28';
                break;
            case "alph":
                driver1 = 'Yuki Tsunoda';
                driver2 = 'Daniel Ricciardo';
                pts = '21';
                break;
            case "alfa":
                driver1 = 'Valtterri Bottas';
                driver2 = 'Zhou Guanyu';
                pts = '16';
                break;
            case "haas":
                driver1 = 'Nico Hulkenberg';
                driver2 = 'Kevin Magnussen';
                pts = '12';
                break;
            
        }
        $('#card-desc').html('<span>Kierowca 1: <b>'+driver1+'</b></span><br><span>Kierowca 2: <b>'+driver2+'</b></span><br><span>Punkty: <b>'+pts+'</b></span>')
    });
});
setInterval(()=>{
    if (theme == 'dark'){
        $('#card-desc').css('background-color','#232421');
        $('#card-desc').css('color','#d1e4e3');
        $('.wrapper-dark').css('background-color','#d1e4e344');
        $('#card-image').css('filter','brightness(0.85)')
    }
    
    else if (theme == 'lite'){
        $('#card-desc').css('background-color','#d1e4e3');
        $('#card-desc').css('color','#232421');
        $('.wrapper-dark').css('background-color','#23242167');
        $('#card-image').css('filter','brightness(1)')
    }
})