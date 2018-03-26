$(document).ready(function() {

    var fadeDemoElems = [$('#test1'), $('#test2'), $('#test3')];
    hideArray(fadeDemoElems);

    $(window).scroll(function() {
        if (isVisible(fadeDemoElems[0])) {
            sideReveal("left", "right", "drop", 150, fadeDemoElems);
        }
    });

});
