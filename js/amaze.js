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
    //loop over the one zero arr here
    //add class x0 (white) if it is 0 and class x1(grey) if it is one
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
        if (a[i] == 1){
        $(a[i]).addClass('.x1');
       }
    }
    var x = "";
    for (var i = 0; i <= n; i++) {
        x = x + '<div class="x" id="box' + i + '"></div>';
    }
    $('#container').html(x);
};
display(n);