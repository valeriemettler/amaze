var red_box_position = 0;
var stop = false;
var max_score = 100;
var score = max_score;
var box_color;
var player_number = 1;
var score_table_array = [];
var random_color_array = ["#fbb735", "#e98931", "#eb403b", "#b32E37", "#6c2a6a",
    "#5c4399", "#274389", "#1f5ea8", "#227FB0", "#2ab0c5",
    "#39c0b3","#ffcccc", "#ffe0cc", "#ffeacc", "#fff4cc", "#fffecc",
    "#effac8", "#c7f5c4", "#c4f0f4", "#c4daf4", "#c9c4f4",
    "#e1c4f4", "#f6c6e6"];
var random_color_index = 0;

var setHandlers = function() {
    $(".generate").on('click', function(event) {
        event.stopPropagation();
        display_maze();
        stop = false;
        score = max_score;
        display_score();
        random_color_generator();
    });
    $(".reset").on('click', function(event) {
        event.stopPropagation();
        score = max_score;
        display_score();
        $('#box0').addClass('red active');
        $('#box99').removeClass('red active');
        red_box_position = 0;
        stop = false;
        random_color_generator();
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

var random_color_generator = function() {
    // random_color = random_color_array[Math.floor(Math.random()*23)];
    random_color_index = random_color_index + 1;
};

var display_maze = function() {
    red_box_position = 0;
    var a = one_zero_arr_generator();
    var x = "";
    for (var i = 0; i < a.length; i++) {
        // console.log((i % 10));
        x = x + '<div class="y x' + a[i] + '" id="box' + i + '">' + i + '</div>';
    }
    $('#container').html(x);
    $('#box0').addClass('red active');
    $('#box99').addClass('green');
    random_color_generator();
};

var display_score = function() {
    $('#score').html("Score " + score);
};

var display_score_board = function() {
    score_table_array.push(score);
    var a = score_table_array;
    var score_table = "";
    for (var i = 0; i < a.length; i++) {
        score_table = score_table + '<div class="playernumber"> Player ' + (i + 1) +
            '</div><div class="playerscore ps'+ (i+1) +'">' + score_table_array[i] + '</div>';
    }
    $('#scoreboard').html(score_table);

    score_board_style();
    player_number = player_number + 1;
};

var score_board_style = function() {
 //    for (var i = 1; i <= player_number; i++) {
 //        var b = '.ps' + (i);
 //        console.log(b);
 // console.log(document.getElementsByClassName(b));
 // var m = document.getElementsByClassName(b);
 // var c = m.style;
 // c.backgroundColor = "#eee";

    // var m = document.getElementById('.ps' + (i+1)), c = m.style;
    // c.backgroundColor = random_color_array[random_color_index];
// }

     for (var i = 0; i <= player_number; i++) {
        console.log("setting the color of:");
        console.log('.ps' + (i+1));
        console.log(random_color_array[i]);
     $('.ps' + (i+1)).first().css ({
        "background-color": random_color_array[i]
    });
 }
};

var move_right = function() {
    if (stop === true) {
        return;
    }
    if ((red_box_position - 9) % 10 === 0) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position + 1;
        $('#box' + red_box_position).addClass('red active');
        $('#box' + red_box_position).css({
            "background-color": random_color_array[random_color_index]
        });
    }
    update_score();
    display_score();
    if (red_box_position == 99) {
        player_won();
    }
};

var move_left = function() {
    if (stop === true) {
        return;
    }
    if (red_box_position === 0) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position - 1;
        $('#box' + red_box_position).addClass('red active');
        $('#box' + red_box_position).css({
            "background-color": random_color_array[random_color_index]
        });
    }
    update_score();
    display_score();
    if (red_box_position == 99) {
        player_won();
    }
};

var move_down = function() {
    if (stop === true) {
        return;
    }
    if (red_box_position >= 90 && red_box_position <= 99) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position + 10;
        $('#box' + red_box_position).addClass('red active');
        $('#box' + red_box_position).css({
            "background-color": random_color_array[random_color_index]
        });
    }
    update_score();
    display_score();
    if (red_box_position === 99) {
        player_won();
    }
};

var move_up = function() {
    if (stop === true) {
        return;
    }
    if (red_box_position >= 0 && red_box_position <= 9) {
        return
    } else {
        $('#box' + red_box_position).removeClass('red active');
        red_box_position = red_box_position - 10;
        $('#box' + red_box_position).addClass('red active');
        $('#box' + red_box_position).css({
            "background-color": random_color_array[random_color_index]
        });

    }
    update_score();
    display_score();
    if (red_box_position === 99) {
        player_won();
    }
};

var player_won = function() {
    stop = true;
    display_score_board();
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