//display_maze 20
// -1 for every move, -5 for moving onto grey
var red_box_position = 0;
var stop = false;
var score = 20;
var box_color;

var setHandlers = function() {
    $(".btn").on('click', function(event) {
        event.stopPropagation();
        display_maze();
        stop = false;
        score = 20;
        display_score();
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
            move_left();
            break;

        case 38: // up
            move_up();
            break;

        case 39: // right
            move_right();
            break;

        case 40: // down
            move_down();

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

var display_maze = function() {
    red_box_position = 0;
    var a = one_zero_arr_generator();
    var x = "";
    for (var i = 0; i < a.length; i++) {
        x = x + '<div class="y x' + a[i] + '" id="box' + i + '">' + i + '</div>';
    }
    $('#container').html(x);
    $('#box0').addClass('red active');
    $('#box99').addClass('green');
};

var display_score = function() {
    // if (score <= 0) {
    //     score = 0;
    //     console.log("Sorry! Try again!");
    // }
    $('#score').html(score);
};

var move_right = function() {
    player_won();
    if (stop === true) {
        return;
    }
    if ((red_box_position - 9) % 10 === 0) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position + 1;
        $('#box' + red_box_position).addClass('red active');
    }
        update_score();
        display_score();
};

var move_left = function() {
    player_won();
    if (stop === true) {
        return;
    }
    if (red_box_position === 0) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position - 1;
        $('#box' + red_box_position).addClass('red active');
    }
        update_score();
        display_score();
};

var move_down = function() {
    player_won();
    if (stop === true) {
        return;
    }
    if (red_box_position >= 90 && red_box_position <= 99) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position + 10;
        $('#box' + red_box_position).addClass('red active');
        update_score();
        display_score();
    }
};

var move_up = function() {
    player_won();
    if (stop === true) {
        return;
    }
    if (red_box_position >= 0 && red_box_position <= 9) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position - 10;
        $('#box' + red_box_position).addClass('red active');
    }

};

var player_won = function() {
    if (red_box_position === 99) {
        stop = true;
        console.log(stop);
        console.log("Congratulations!");
    }
};

var update_score = function() {
        // if the red box moves over a grey box, -5, otherwise, -1
        if ($('.active').hasClass('x1')) {
            score = score - 5;
        } else {
            score = score - 1;
        }
};


$(document).ready(function() {
    display_maze();
    display_score();
    setHandlers();
});