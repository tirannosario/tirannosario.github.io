$( document ).ready(function() {
    $(".nav-link").click(function (e) {
        e.preventDefault();
        var type = $(this).attr("id");
        $(".page").css("display","none");
        var title = $(".pageTitle");
        switch (type) {
            case "link_about":
                title.text("About");
                $("#about").css("display","block");
                break;

            case "link_exp":
                title.text("Experience");
                $("#experience").css("display","block");
                break;

            case "link_skills":
                title.text("Skills");
                $("#skills").css("display","block");
                break;

            case "link-prj":
                title.text("Projects");
                $("#projects").css("display","block");
                break;
        }
        return false;
    });
});

