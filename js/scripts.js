//JavaScript business logic(back-end)
var answers = ["D", "A", "C", "A", "C", "B", "D", "B", "B", "A"],
    tot = answers.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked)
            return radios[y].value;
    // return the checked value

}

function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i])
            score += 1; // increment only
    return score;

}
$(document).ready(function () {
    $("form").submit(function (event) {
        var answers = [];
        $("#result").text("your score is " + getScore(answers));
        $("#story").show();
        event.preventDefault();
    });
    $("#submit").click(function () {
        $("#result").toggle();
        $("#quiz").toggle();
        $("#score").show();
    });
    $("#score").click(function () {
        $("#quiz").show();
        $("#result").hide();
        $("#score").hide();
    });
});