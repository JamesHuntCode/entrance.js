$(document).ready(function() {

    var fadeDemoElems = [$('#test1'), $('#test2'), $('#test3')];

    $(window).scroll(function() {
        if (isVisible(fadeDemoElems[0])) {
            sideReveal("left", "right", "fade", 250, fadeDemoElems);
        }
    });

});
