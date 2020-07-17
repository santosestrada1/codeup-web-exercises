"use strict";

window.onload = function() {
    alert( 'The page has finished loading!' );
}

$(document).ready(function() {

    alert(" Good to Go!")

});

///// Id Selectors /////

// TODO: Use jQuery to select an element by the id. Alert the contents of the element.

// var contents = $('#hello').html();
// alert(contents);

// TODO: Update the jQuery code to select and alert a different id.

// contents = $('#1').html();
// alert(contents);

// TODO: Use the same id on 2 elements. How does this change the jQuery selection?
//  Answer: // First run returned the 1st instance of "ID". Second run returned undefined and then the 1st instance of.


///// Class Selectors /////

// TODO:Update your code so that at least 3 different elements have the same class named codeup. CHECK

// TODO:Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.

$('.codeup').css({"border" : "1px solid red" });

// TODO:Remove the class from one of the elements. Refresh and test that the border has been removed. CHECK

// TODO:Give another element an id of codeup. Does this element get a border now?
// YES

///// Element Selectors /////

// Remove your custom jQuery code from previous exercises.

   // TODO:Using jQuery, set the font-size of all li elements to 20px.

$('.list-item').css({'font-size': '20px'});

    // TODO:Craft selectors that highlight all the h1, p, and li elements.

$('h1').addClass('highlighted')
$('p').addClass('highlighted')
$('li').addClass('highlighted')
alert($('h1').html());
    // TODO:Create a jQuery statement to alert the contents of your h1 element(s).

var contents = $('h1').html();
alert(contents);

///// Multiple Selectors /////

// TODO:Combine your selectors that highlight all the h1, p, and li elements.

$('h1, p, li').css({'backgroundColor' : 'yellow'})