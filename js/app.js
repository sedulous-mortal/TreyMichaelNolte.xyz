/*insert ready function*/
/*global $*/
/*node browser: true*/

(function () {
    "use strict";
    // this function is strict! :D
}());
//I'd love to hear some context for why this definition is still creating missing use strict errors in JSLint on other lines
//-- isn't it a global "use strict" definition here?

//here's a function to fix the background image placement so it fits in browser window
function set_body_height() {
    // set body height = window height
    "use strict";
    // this function is strict! :D
    $('body').height($(window).height());
}
//open ready function
$(document).ready(function () {
    "use strict";
    // this function is strict! :D
    $(window).bind('resize', set_body_height);
    set_body_height();
});

//handler for onclick "Home"
$('#Home').click(function () {
    "use strict";
    // this function is strict! :D
    //overwrite the "display" div
    $('#display').empty();
    $('#display').append("<h2>Homepage Display</h2><img src=\"imgs/treyprofile1.jpg\"><p>Hi, I'm Trey! </p><p>I am a <span class=\"wow\">creative game designer</span> and artist, passionate about <span class=\"wow\">high quality work</span> and the <span class=\"wow\">structural integrity</span> of shared filesystems. I have been working in this field for over a year, and am looking for my next great challenge. If you are seeking an artist, please <a href=\"mailto:denm_blackfire@yahoo.com\">contact me</a> at denm_blackfire@yahoo.com.</p>");
});

//handler for onclick "Portfolio"
$('#Portfolio').click(function () {
    "use strict";
    // this function is strict! :D
    //overwrite the "display" div
    $('#display').empty();
    $('#display').append("<p>Welcome to my Portfolio section! You can scroll through my work using the arrows below.</p><img id=\"arrowLeft\" src=\"../Gui_portfolio_final/Menu_Assembly/arrow_left.png\"><img id=\"arrowRight\" src=\"../Gui_portfolio_final/Menu_Assembly/arrow_right.png\">");
    $('#display').append("<h2>Click here for samples!</h2>");
});

//TODO: onclick handler for right and left arrow buttons
//display.empty
//display.append(samples[i])

//samples object array
/*const img1 = "<img src=\"Gui_portfolio_final/Art_Tab/Full_Images/Dragon_Spire.jpg\"\>";
var samples = [img1, img2, img3, img4, img5];
$('#arrowRight').click(function () {
        for (let i = 0; i < 5; i++) {
        $('#display').empty();
        $('#display').append(samples[i]);
    }
});*/


$('#arrowLeft').click(function () {
    for (var i = i.val; i > 0; i++) {
        "use strict";
        $('#display').empty();
        $('#display').append(samples[i]);
    };
});

//handler for onclick "Goals"
$('#Goals').click(function () {
    //overwrite the "display" div
    $('#display').empty();
    $('#display').append("<p>Welcome to my Goals section! I have many important goals.</p>");
});

//handler for onclick "References"
$("#Refs").click(function () {
    $('#display').empty();
    $('#display').append("<p>You're in the References section! This will be full of quotes + signatures (with email addresses attached).</p>");
});

//handler for onclick "Store"
$("#Store").click(function () {
    $('#display').empty();
    $('#display').append("<p>You're in the Store section! I look forward to providing images and files for sale.</p>");
});

//TODO: click handler for navbar p tags: first, find anything that has backgrnd img button_selected,
//and change that image to button.png
//then, change backgrnd image to button_selected.png on the clicked button that triggered handler
