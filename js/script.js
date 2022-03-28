$(function () {
    $(".service-item-5 .choose-items li, .service-item-2 .choose-items li").click(function (e) {
        e.preventDefault();
        $(".service-item-5 .choose-items li, .service-item-2 .choose-items li").each(function () {

            let bool = $(this).hasClass("choosed");
            if ($(this) !== e.target) {
                $(this).removeClass("choosed");
            };
        });
        $(this).toggleClass("choosed");
    });

    $(".service-item-1 .choose-items li, .service-item-3 .choose-items li, .service-item-4 .choose-items li").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("choosed");
    });
});