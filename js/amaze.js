//make a global variable to hold the current state/position of the red box
//use addClass and Remove class to move the red box around
//added key bindings to move red box around
//assigned red box position to 0 on generate maze on click

//if x % 10 = 0, break (column 0 goes up by 10)
//if x - 9 % 10 = 0, break (make column 9 go up by same number)

var red_box_position = 0;

var setHandlers = function() {
    $(".btn").on('click', function(event) {
        event.stopPropagation();
        display();
    });
    $(".right").on('click', function(event) {
        event.stopPropagation();
        move_right();
    });
    $(".left").on('click', function(event) {
        event.stopPropagation();
        move_left();
    });
    $(".down").on('click', function(event) {
        event.stopPropagation();
        move_down();
    });
    $(".up").on('click', function(event) {
        event.stopPropagation();
        move_up();
    });
};

$(document).keydown(function(e) {
    switch (e.which) {
        case 37: // left
            if (red_box_position % 10 === 0) {
                return
            } else {
                $('#box' + red_box_position).removeClass('red');
                red_box_position = red_box_position - 1;
                $('#box' + red_box_position).addClass('red');
            }
            break;

        case 38: // up
            if (red_box_position >= 0 && red_box_position <= 9) {
                return
            } else {
                $('#box' + red_box_position).removeClass('red');
                red_box_position = red_box_position - 10;
                $('#box' + red_box_position).addClass('red');
            }
            break;

        case 39: // right
            if ((red_box_position - 9) % 10 === 0) {
                return
            } else {
                $('#box' + red_box_position).removeClass('red');
                red_box_position = red_box_position + 1;
                $('#box' + red_box_position).addClass('red');
            }
            break;

        case 40: // down
            if (red_box_position >= 90 && red_box_position <= 99) {
                return
            } else {
                $('#box' + red_box_position).removeClass('red');
                red_box_position = red_box_position + 10;
                $('#box' + red_box_position).addClass('red');
            }
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

var one_zero_arr_generator = function() {
    var arr = [];
    for (var i = 0; i < 100; i++) {
        arr.push((Math.floor(Math.random() * 9) % 2));
    }
    return arr;
};

var display = function() {
    red_box_position = 0;
    var a = one_zero_arr_generator();
    var x = "";
    for (var i = 0; i < a.length; i++) {
        x = x + '<div class="y x' + a[i] + '" id="box' + i + '">' + i + '</div>';
    }
    $('#container').html(x);
    $('#box0').addClass('red');
};

var move_right = function() {
    if ((red_box_position - 9) % 10 === 0) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red');
        red_box_position = red_box_position + 1;
        $('#box' + red_box_position).addClass('red');
    }
};

var move_left = function() {
    if (red_box_position === 0) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red');
        red_box_position = red_box_position - 1;
        $('#box' + red_box_position).addClass('red');
    }
};

var move_down = function() {
    if (red_box_position >= 90 && red_box_position <= 99) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red');
        red_box_position = red_box_position + 10;
        $('#box' + red_box_position).addClass('red');
    }
};

var move_up = function() {
    if (red_box_position >= 0 && red_box_position <= 9) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red');
        red_box_position = red_box_position - 10;
        $('#box' + red_box_position).addClass('red');
    }
};

$(document).ready(function() {
    display();
    setHandlers();
});