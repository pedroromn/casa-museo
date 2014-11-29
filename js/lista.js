$(function() {

    $("#dialog").dialog({
        autoOpen: false,
        width: 600
    });

    // Link to open the dialog
    $("#dialog-link").click(function(event) {
        $("#dialog").dialog("open");
        event.preventDefault();
    });

    // Hover states on the static widgets
    $("#dialog-link, #icons li").hover(
        function() {
            $(this).addClass("ui-state-hover");
        },
        function() {
            $(this).removeClass("ui-state-hover");
        }
    );
});