$(document).ready(function() {
    var tasknum = 1;
    $("#add").click(function() {
        $("ol").append("<ul>Task no. " + tasknum + "</ul>");
        tasknum++;
    });

    $("#clear").click(function() {
        if (tasknum > 1) {
            $("ul")
                .last()
                .remove();
            tasknum--;
        }
    });

    $("#empty").click(function() {
        $("ol").empty();
        tasknum = 1;
    });

    $("ol")
        .sortable()
        .draggable();
});
