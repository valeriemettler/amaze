var arr = [];
var current_number = 0;
var n = 9;

var one_zero_arr_generator = function() {
    for (var i=0; i<10; i++){
        arr.push((Math.floor(Math.random() * 9) % 2));
    }
};
one_zero_arr_generator();
console.log("arr", arr);

var style_display = function(current_number) {
    $('.x').css({
            "border": "1px solid black",
            "height": "25px",
            "width": "25px",
            "float": "left"
        });
    if(current_number == 1){
        // add grey box
        $('.x').css({
            "background-color": "grey"
        });
    }
};

var display = function(current_number,n) {

    var x = "";
    for (var i=0; i<=n; i++){
    x = x + '<div class="x"></div>';
 }
 $('#container').html(x);
 style_display(current_number);
};
display(current_number,n);



//create a function that will create n boxes (loop)...function takes n as
//parameter and call function n times


