// document.getElementsByClassName(".button-collapse")[0].sideNav();

// Be consistent on semi colons!

$(".button-collapse").sideNav();


function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
autoplay()   


$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
// $('#grid .row:nth-child(odd)').addClass('alternate');

$('.dropdown-button').dropdown();


$(document).ready(function(){
    $('.materialboxed').materialbox();
  });



// switch fullscreen and mobile views

if ($(window).width() < 600) {
    $('.fullscreen').addClass('hidden')
    $('.showMobile').removeClass('hidden')
} else if ($(window).width() > 599) {
    $('.fullscreen').removeClass('hidden')
    $('.showMobile').addClass('hidden')

}

$(window).resize(function() {
/*If browser resized, check width again */
    if ($(window).width() < 600) {
        $('.fullscreen').addClass('hidden')
        $('.showMobile').removeClass('hidden')    }
    else if ($(window).width() > 599) {
        $('.fullscreen').removeClass('hidden')
        $('.showMobile').addClass('hidden')    }
});

arr404 = ["../assets/gar/gar3.png", "../assets/gar/gar5.png", "../assets/gar/gar6.png", "../assets/gar/gar9.png", "../assets/gar/gar10.png", "../assets/gar/gar11.png", "../assets/gar/gar12.png", "../assets/gar/gar13.png", "../assets/gar/gar14.png", "../assets/gar/gar15.png"]

// 

$('.img404').css('background-image', "url('" + arr404[Math.floor(Math.random() * arr404.length)], + "')")

// jquery for materialize dropmenu


/////////

// $('.voteButton').hover(() => {
//     $(this).toggleClass('z-depth-5')
// } )

// $('#voteUp').on('click', () => {
//     var resource = $('resource.votes')
// })
var resource = $('resource.votes')
console.log(resource)
