$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}


var typed =new Typed('#typed',{
    strings: [
        'I love programming,',
        'Check out my page'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true
});

var typed_2 =new Typed('#typed_2',{
    strings: [
        'I\'m a Web Developer,',
        'and a Meme lover'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true
});

var typed_3 =new Typed('#typed_3',{
    strings: [
        'Here are some of the programming languages and frameworks I am familiar with',

    ],
    typeSpeed: 20,
    backSpeed:20,
    loop:true
});

var typed_4 =new Typed('#typed_4',{
    strings: [
        'My progress so far',

    ],
    typeSpeed: 50,
    backSpeed: 20,
    loop:true
});

var typed_5 =new Typed('#typed_5',{
    strings: [
        'Just random pictures really',

    ],
    typeSpeed: 50,
    backSpeed: 20,
    loop:true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
    