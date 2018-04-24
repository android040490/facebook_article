import "./styles/main.sass";
import * as jQuery from "jquery";


$(function(){

    // Toggler nav-bar
    $(".nav-bar__btn").on("click", function(){

        var context = $(this).attr( "id");

        $(".nav-bar__navbar", context).slideToggle( 400 );
    });


       //  Page navigation

    $(".article-navigation__list-navigation li").on("click","a", function (event) {

    event.preventDefault();

    var id  = $(this).attr('href');

    var topSize = $(id).offset().top;

    $('body,html').animate({scrollTop: topSize}, 500);

    });

    // Open popup window
    $(".buy-btn__btn").on('click', function(){
        $(".popup-window").slideDown( 400 );
    })
    // Close popup window
    $(".popup-window__close-btn").on("click", function(){
        $(".popup-window").slideUp( 400 );
    })
    
});

//TRADING WIDGETS
new TradingView.widget(
    {
        "width": "100%",
        "height": 400,
        "symbol": "NASDAQ:FB",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Light",
        "style": "1",
        "locale": "ru",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_84e8d"
    }
);


new TradingView.MediumWidget(
    {
        "container_id": "tv-medium-widget",
        "symbols": [
            [
                "Facebook",
                "NASDAQ:FB|max"
            ]
        ],
        "greyText": "Котировки предоставлены",
        "gridLineColor": "#e9e9ea",
        "fontColor": "#83888D",
        "underLineColor": "#dbeffb",
        "trendLineColor": "#4bafe9",
        "width": "100%",
        "height": "400px",
        "locale": "ru"
    }
);
             