/*Animation - Header/Landing/Hero */

var keylines = document.querySelector(".dv-hero-keylines");
keylines.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function(keylines) {
        // remove the class
        keylines.classList.remove("animation-go");

        // force reflow
        void keylines.offsetWidth;

        // re-add the animated cl
        keylines.classList.add("animation-go");
    }

});


/*Animation - About - Mission */

var headline = document.querySelector(".dv-hero-headline");
headline.setAttribute('data-scroll', '');

ScrollOut({
    onShown: function(headline) {
        // remove the class
        headline.classList.remove("animation-go");

        // force reflow
        void headline.offsetWidth;

        // re-add the animated cl
        headline.classList.add("animation-go");
    }

});