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

// Method to hide a group of elements stored in an array
function hideArray(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].hide();
    }
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
        let fromLeft = (direction == "left");

        let interval = 0;
        let animationDuration = 750;

        // Reveal Elements from direction specified
        if (fromLeft) {
            for (let i = 0; i < elements.length; i++) {
                // Fade elements
                if (style == "fade") { elements[i].delay(interval).delay(interval).fadeIn(animationDuration); }
                // Drop down elements
                else if (style == "drop") { elements[i].delay(interval).delay(interval).slideDown(animationDuration); }
                interval += offset;
            }
        } else {
            for (let i = elements.length - 1; i >= 0; i--) {
                // Fade elements
                if (style == "fade") { elements[i].delay(interval).delay(interval).fadeIn(animationDuration); }
                // Drop down elements
                else if (style == "drop") { elements[i].delay(interval).delay(interval).slideDown(animationDuration); }
                interval += offset;
            }
        }
        return false;
    }

    // Working out which direction the elements will be revealed from
    if (revealFrom === "left") {
        revealElements("left", revealStyle, revealOffset, elementsToReveal);
    } else if (revealFrom == "right") {
        revealElements("right", revealStyle, revealOffset, elementsToReveal);
    }
}
