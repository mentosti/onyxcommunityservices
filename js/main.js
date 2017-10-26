$(document).ready(function()
{
    // check scrollbar is not at top to minimize nav bar
    $(window).scroll(function() {
        if($(window).scrollTop() > 20) {
            $(".navbar-fixed-top").height("75px");
            $(".navbar-brand > img").height("55px");
            $(".navbar-brand").css("margin", "10px 15px");
        }
        else {
            $(".navbar-fixed-top").height("140px");
            $(".navbar-brand > img").height("100px");
            $(".navbar-brand").css("margin", "20px 15px");
        }
    })
    document.writeln("new: " + $(document).width());
    if ($(window).width() <= 1024) {
        $(".dropdown").click(function(e) {
            e.preventDefault();
            
            $(this).find(".dropdown-menu").first().toggle();
        })
        $(".dropdown>a").each(function() {
            $(this).html($(this).text() + ' <span class="caret"></span>');
        })
    }
    $(window).resize(function(){
        $(".dropdown").off("click");
        if ($(this).width() <= 1024) {
            $(".dropdown").click(function(e) {
                e.preventDefault();
                $(this).find(".dropdown-menu").first().toggle();
            })
            $(".dropdown>a").each(function() {
                $(this).html($(this).text() + ' <span class="caret"></span>');
            })
        }
        else {
            $(".dropdown>a").each(function() {
                $(this).html($(this).text());
            })
        }
    })
    
});