function bsNotification(option) {
    var image = option.image;
    var title = option.title;
    var text = option.text;
    var time = option.time;
    var shadow = "";
    var color = "";
    if (option.color) {
        color = " bg-" + option.color
    }
    if (option.shadow) {
        shadow = " shadow"
    }
    var box =
        "<div class='bootstrap-notification" + color + shadow + "'>"
        +
        "<div class='notification-img-wrapper'><img src='" + image + "' alt='image'></div>"
        +
        "<div class='in'><div class='notification-title'>" + title + "</div><div class='notification-text'>" + text + "</div></div>"
        +
        "<a href='#' class='notification-close' data-dismiss='notification'></a>"
        +
        "</div>"
    $("body").append(box);
    setTimeout(() => {
        $(".bootstrap-notification").addClass("show")
    }, 500);
    if (time !== undefined) {
        setTimeout(() => {
            $(".bootstrap-notification").removeClass("show")
        }, time);
    }
};

$(document).on("click", "a[data-dismiss=notification]", function () {
    $(this).parent(".bootstrap-notification").removeClass("show");
    setTimeout(() => {
        $(".bootstrap-notification").html("");
    }, 1000);
});

