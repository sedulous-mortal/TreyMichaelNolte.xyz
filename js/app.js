'use strict;'
//open ready function

//click handler for navbar button: first, find anything that has backgrnd img button_selected,
//and change that image to button.png
//then, change backgrnd image to button_selected.png on the clicked button that triggered handlr

//here's a function to fix the background image placement so it fits in browser window
//WITH NO CROPPING!!!
function set_body_height() { // set body height = window height
    $('body').height($(window).height());
}
$(document).ready(function () {
    $(window).bind('resize', set_body_height);
    set_body_height();
});

//close ready function
