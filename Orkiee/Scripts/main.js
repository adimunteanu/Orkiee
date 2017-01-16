﻿$(document).ready(function(){
    $("#button").click(function () {
        var project = $("div#2nd-project");
        project.after("<div></div>");
        project.next().css("position", "absolute");
        project.next().addClass("project");
        project.next().addClass("inline");
        var project_name=$("<h4>Project Name</h4>");
        project.next().append(project_name);
        project_name.addClass("project-name");
        project_name.addClass("inline");
        var project_procent = $("<h4>66%</h4>");
        project.next().append(project_procent);
        project_procent.addClass("project-procent");
        project_procent.addClass("inline");
        project_procent.addClass("rightside");
        var completion = $("<div></div>");
        project.next().append(completion);
        completion.addClass("completion");
        var complete = $("<div></div>");
        var not_complete = $("<div></div>");
        completion.append(complete);
        completion.append(not_complete);
        completion.addClass("col-lg-12");
        complete.addClass("complete");
        complete.addClass("col-lg-8");
        not_complete.addClass("not-complete");
        not_complete.addClass("col-lg-4");
        var estimated_end = $("<h4>Estimated end:</h4>");
        var started = $("<h4>Started:</h4>");
        var tasks = $("<h4>tasks:</h4>");
        var delay = $("<h4>Delay:</h4>");
        var time_started = $("<h4>Time started:</h4>");
        project.next().append(estimated_end);
        estimated_end.addClass("project-info");
        project.next().append(started);
        started.addClass("project-info");
        project.next().append(tasks);
        tasks.addClass("project-info");
        project.next().append(delay);
        delay.addClass("project-info");
        project.next().append(time_started);
        time_started.addClass("project-info");
    });
});

$(document).ready(function () {
    var viewModel = {
        currentProfit:ko.observable(1500)
    };
    viewModel.currentProfit(-50);
    ko.applyBindings(viewModel);
});
