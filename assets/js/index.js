
$(document).ready(function () {

    AOS.init();


    /** Initialzie smooth mousewheel scrolling */


    /** Parallax effect */

    /** Scroll Magic */
    var controller = new ScrollMagic.Controller();

    var lineSlide = document.getElementsByClassName("dv-hero-keylines");
    for (var i = 0; i < lineSlide.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: lineSlide[i], // y value not modified, so we can use element as trigger as well
            offset: -150, // start a little later
            triggerHook: 0.9,
            duration: "150%"

        })
            .setClassToggle(lineSlide[i], "animation-go") // add class toggle
            .addTo(controller);
    }

    var lineSlide = document.getElementsByClassName("dv-hero-headline");
    for (var i = 0; i < lineSlide.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: lineSlide[i], // y value not modified, so we can use element as trigger as well
            offset: -0, // start a little later
            triggerHook: 0.9,
            duration: "100%"

        })
            .setClassToggle(lineSlide[i], "animation-go") // add class toggle
            .addTo(controller);
    }



    var lineSlide = document.getElementsByClassName("dv-block-line");
    for (var i = 0; i < lineSlide.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: lineSlide[i], // y value not modified, so we can use element as trigger as well
            offset: -150, // start a little later
            triggerHook: 0.9,
            duration: "150%"

        })
            .setClassToggle(lineSlide[i], "visible") // add class toggle
            .addTo(controller);
    }

    var revealBlocks = document.getElementsByClassName("dv-clr-block__wrapper");
    for (var i = 0; i < revealBlocks.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealBlocks[i], // y value not modified, so we can use element as trigger as well
            offset: -200, // start a little later
            triggerHook: 0.9,
        })
            .setClassToggle(revealBlocks[i], "reveal") // add class toggle
            .addTo(controller);
    }

    (function ($) {

        // scroll functions
        var divs = $('div[id^="pos-content-"]').hide(),
            i = 0;
        var lastdiv = divs.last();

        (function cycle() {
            divs.eq(i).fadeIn(400)
                .css({ position: 'relative' })
                .css({
                    transition: 'opacity 2s ease-in-out'
                })
                .delay(1200)
                .fadeOut(400, cycle)
                .css({ "animation": "keylinesCycle 2s 1 forwards" })
                .css({ "animation - iteration - count": "2" })
                ;
            i = ++i % divs.length;
        })();
    })(jQuery);


});
