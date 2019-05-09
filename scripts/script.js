$(document).ready(function() {
    var tasknum = 1;
    $("#add").click(function() {
        $("ol").append("<ul>Task no. " + tasknum + "</ul>");
        tasknum++;
    });

    $("#delete").click(function() {
        if (tasknum > 1) {
            $("ul")
                .last()
                .remove();
            tasknum--;
        }
    });

    $("#clear").click(function() {
        $("ol").empty();
        tasknum = 1;
    });
});
