// current_number = 7;
var n = 9;

var one_zero_arr_generator = function() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push((Math.floor(Math.random() * 9) % 2));
    }
    console.log(arr);
    return arr;
};

var display = function(n) {
    var a = one_zero_arr_generator();
    var x = "";
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
        x = x + '<div class="y x' + a[i] + '" id="box' + i + '"></div>';
        console.log(x);
    }
    $('#container').html(x);
};
display(n);