function gridmaker(x, y) {
    var z = (x * y),
        i = 1,
        new_height = (30 * y) + (2 * y),
        new_width = (30 * x) + (2 * x);
    $(".container").css(
        "height", new_height + "px"
    );
    $("#container").css(
        "width", new_width + "px"
    );
    while (i < z) {
        $("#container").append('<div class="white"></div>');
        i += 1;
    }
    fill_color();
};

function fill_color() {
    $(".white").mouseenter(function () {
        $(this).addClass("filled");
    });
}

function reset() {
    $(".filled").removeClass("filled");
}

function resize() {
    var new_x = prompt("Please type in the x value");
    var new_y = prompt("Please type in the y value");
    $(".white").remove();
    reset();
    $("#container").append('<div class="white"></div>');
    gridmaker(new_x, new_y);
}

$(document).ready(function () {
    gridmaker(4, 4);
});
