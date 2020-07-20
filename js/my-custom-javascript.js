"use strict";

$(document).ready(function(){
    console.log("Ready to Roll?");

    let pinks = ['pink' , 'salmon' , 'hotpink', 'lightpink', 'deeppink', 'green']
    $('h1').click(function(){
        let randomColor = pinks[Math.floor(Math.random()*pinks.length)];
        $(this).css("background-color", randomColor);
        $(this).html("Hello <strong style='text-decoration:underline'>Hyperion</strong>")
    });


// Add jQuery code that will change the background color of an h1 element when clicked.
$('p').click(function() {
    $(this).css('background-color' , 'blue')
});
// Make all paragraphs have a font size of 18px when they are double clicked.

$('li').dblclick(function() {
    $(this).css('font-size' , '18px')
});

    $('li').dblclick(function() {
        $(this).toggle(500).delay(1000).toggle(500)
    })



// Set all li text color to red when the mouse is hovering; reset to black when it is not.
$('li').hover(
    function() {
        $(this).addClass("red");
    },
    function() {
        $(this).removeClass("red")
    }
)

    setInterval(function () {
        let randomColor = pinks[Math.floor(Math.random()*pinks.length)];
        $('h1').css("background-color", randomColor);
    }, 2000)
});


