$(document).ready(function() {
    var tasknum = 0;
    var taskdone = 0;
    $("#add").click(function() {
        tasknum++;
        $("ol").append("<ul>Task no. " + tasknum + "</ul>");
        $("#task-count").empty();
        $("#task-count").append(tasknum);
    });

    $("ol").on("dblclick", "ul", function() {
        $(this).addClass("striked");
    });

    $("#clear").click(function() {
        taskdone += $("ul").filter(".striked").length;
        $("ul")
            .filter(".striked")
            .fadeOut();
        setTimeout(function() {
            $(".striked").remove();
        }, 150);
        $("#task-done").empty();
        $("#task-done").append(taskdone);
    });

    $("#empty").click(function() {
        $("ol").empty();
        tasknum = 0;
        taskdone = 0;
        $("#task-count").empty();
        $("#task-done").empty();
        $("#task-count").append("0");
        $("#task-done").append("0");
    });

    $("ol")
        .sortable()
        .draggable();
});
