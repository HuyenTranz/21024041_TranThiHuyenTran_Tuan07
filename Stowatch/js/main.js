var min = 00;
var sc = 00;
var ms = 00;

var appendMs = $("#ms");
var appendSc = $("#second");
var appendMin = $("#minute");
var interval;

$(document).ready(function() {
    $("#bt--start").click(function() {
        clearInterval(interval);
        interval = setInterval(StartTimer, 10)
    });

    $("#bt--stop").click(function() {
        clearInterval(interval);
    })

    $("#bt--reset").click(function() {
        clearInterval(interval);
        min = "00";
        sc = "00";
        ms = "00";
        appendMin.html(min);
        appendSc.html(sc);
        appendMs.html(ms);
    });
});

function StartTimer() {
    ms++;

    if (ms <= 9) {
        appendMs.html("0" + ms);
    }

    if (ms > 9) {
        appendMs.html(ms);
    }

    if (ms > 99) {
        sc++;
        appendSc.html("0" + sc);
        ms = 0;
        appendMs.html("0" + "0");
    }

    if (sc > 9) {
        appendSc.html(sc);
    }

    if (sc > 59) {
        min++;
        appendMin.html("0" + min);
        sc = 0;
        appendSc.html("0" + "0");
    }

    if (min > 9) {
        appendMin.html(min);
    }
}