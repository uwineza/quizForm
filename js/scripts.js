var answers = ["D", "A", "C", "A", "C", "B", "D", "B", "B", "A"],
    tot = answers.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked)
            return radios[y].value;
    // return the checked value

}