$( document ).ready(function() {
    //handle the navbar
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


    $.getJSON('src/projects.json', function(data) {
        var projectsbox = $(".projects-box");
        var content = "";
        data.forEach(project => content += "<div class=\"project-preview\"><div class=\"preview-img\"><img src="+project["preview-img"]+" alt=\"\"></div><div class=\"preview-content\"><p>"+project["preview"]+"</p><button title="+ project["name"] +">Open</button></div></div>");
        projectsbox.html(content); // set the content
    });


});

