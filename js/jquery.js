'use strict';

$(document).ready(function() {
    var keys = {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        b: 66,
        a: 65,
        enter: 13
    };

    var konamiCode = [
        keys.up,
        keys.up,
        keys.down,
        keys.down,
        keys.left,
        keys.right,
        keys.left,
        keys.right,
        keys.b,
        keys.a,
        keys.enter
    ];

    var codeIndex = 0;

    $(document).on('keyup', function(e) {
        var keyPressed = e.keyCode;
        var currentKey = konamiCode[codeIndex];

        // show what key was pressed
        $('#key-display').html(e.key);

        if (keyPressed === currentKey) {
            // correct key in the sequence, move to the next one
            codeIndex++;
        } else {
            // incorrect key press, reset where we are in the code
            codeIndex = 0;
        }

        // check if we're finished
        if (codeIndex === konamiCode.length) {
            alert('+30 lives!');
        }

    });
});