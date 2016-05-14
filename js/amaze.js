//make a generate maze button that calls the display function

var setHandlers = function() {
    $(".btn").on('click', function(event) {
        event.stopPropagation();
        display();
    });
}

var one_zero_arr_generator = function() {
    var arr = [];
    for (var i = 0; i < 100; i++) {
        arr.push((Math.floor(Math.random() * 9) % 2));
    }
    return arr;
};

var display = function() {
    var a = one_zero_arr_generator();
    var x = "";
    for (var i = 0; i < a.length; i++) {
        x = x + '<div class="y x' + a[i] + '" id="box' + i + '">'+ i +'</div>';
    }
    $('#container').html(x);
};

$(document).ready(function() {
    setHandlers();
});
