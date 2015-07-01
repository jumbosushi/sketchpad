function gridmaker(x, y) {
    var z = (x * y),
        i = 1,
        new_height = (30 * y) + (2 * y),
        new_width = (30 * x) + (2 * x);
    $(".container").css(
        "height", new_height+"px"
        );
    $(".container").css(
        "width", new_width+"px"
        );
    while (i < z) {
        $(".container").append('<div class="white"></div>')
        i += 1
    };
};　


function fill_color() {
    $("div").mouseenter(function() {
        $(this).addClass("filled");
    });
};

$(document).ready(function() {  
    gridmaker(16,16);
    fill_color();
});

