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

// Method to reveal an array of elements from either side
function sideReveal(from, to, style, offset, arrayOfElements) {
    // Required variables for this method
    var revealFrom, revealTo, revealStyle, revealOffset, arrayOfElements;

    revealFrom = from; // Which side the side reveal will start from
    revealTo = to; // Which side the side reveal will end at
    revealStyle = style; // Style of the reveal (fade, drop etc)
    revealOffset = offset; // Amount of time between each element being revealed
    elementsToReveal = arrayOfElements; // Elements the user wants to reveal

    // Method behind revealing the elements from a specified direction
    function revealElements(direction, stle, offset, elements) {
        let numOfElements = elements.length;

        // Reveal Elements from direction specified
        if (direction == "left") {
            console.log("revealing from left - test");
        } else if (direction == "right") {
            console.log("revealing from right - test");
        }
    }

    // Working out which direction the elements will be revealed from
    if (revealFrom === "left") {
        revealElements("left", revealStyle, revealOffset, elementsToReveal);
    } else if (revealFrom == "right") {
        revealElements("right", revealStyle, revealOffset, elementsToReveal);
    }
}
