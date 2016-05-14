var current_number = 1;
var n = 9;

var one_zero_arr_generator = function() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push((Math.floor(Math.random() * 9) % 2));
    }
    console.log(arr);
    return arr;
};
one_zero_arr_generator();


var display = function(current_number, n) {
    var x = "";
    for (var i = 0; i <= n; i++) {
        x = x + '<div class="x" id="' + i + '"></div>';
    }
    $('#container').html(x);
    $('.x').css({
        "border": "1px solid black",
        "height": "25px",
        "width": "25px",
        "float": "left"
    });
    if (current_number == 1) {
        $('.x').css({
            "background-color": "grey"
        });
    }
};
display(current_number, n);