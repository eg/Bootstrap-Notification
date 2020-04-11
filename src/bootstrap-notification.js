function bsNotification(option) {
    var image = option.image;
    var title = "<b>"+option.title+"</b>";
    var text = option.text;
    var autoClose = option.autoClose;
    var shadow = "";
    var color = "";
    var time = "";
    if(option.time !== undefined){
        time = option.time;
    }
    if (option.color) {
        color = " bg-" + option.color
    }
    if (option.shadow) {
        shadow = " shadow"
    }
    if(title === undefined){
        title = "";
    }
    if(text === undefined){
        text = "";
    }
    var box =
        "<div class='bootstrap-notification" + color + shadow + "'>"
        +
        "<div class='notification-img-wrapper'><img src='" + image + "' alt='image'></div>"
        +
        "<div class='in'><div class='notification-title'>" + title + "<span>"+time+"</span></div><div class='notification-text'>" + text + "</div></div>"
        +
        "<a href='#' class='notification-close' data-dismiss='notification'></a>"
        +
        "</div>"
    $("body").append(box);
    setTimeout(() => {
        $(".bootstrap-notification").addClass("show")
    }, 500);
    if (autoClose !== undefined) {
        setTimeout(() => {
            $(".bootstrap-notification").removeClass("show")
        }, autoClose);
    }
};

$(document).on("click", "a[data-dismiss=notification]", function () {
    $(this).parent(".bootstrap-notification").removeClass("show");
    setTimeout(() => {
        $(".bootstrap-notification").html("");
    }, 1000);
});

