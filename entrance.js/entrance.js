// entrance.js - copyright James Hunt 2018 - 2018 / Some rights reserved

// Return boolean value indicating if an element is on within the user's viewport
function isVisible(element) {
    var viewport = $(window);

    var topOfViewport = $(window).scrollTop();
    var bottomOfViewport = topOfViewport + viewport.height();

    var topOfElement = element.offset().top;
    var bottomOfElement = topOfElement + element.height();

    var ease = element.height() / 2;

    var isInsideViewport = ((topOfElement + ease >= topOfViewport) && (bottomOfElement - ease <= bottomOfViewport));

    return isInsideViewport;
}
