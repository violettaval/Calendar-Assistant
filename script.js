var time = new Date();
var hour = (time.getHours());
function hourFill() {
    var blocks = $(".time-block");
    if (hour < 9) {
        blocks.addClass('future');
        $(".time-block").append(blocks);
    }
    else if (hour === 9) {
        var ninth = $('#9');
        $("#9").addClass("present");
        $('#9').append(ninth);
        for (var n = 10; n < 24; n++) {
            var newID = $("#" + n);
            newID.addClass('future');
            $("#" + n).append(newID);
        }
    }
    else if (hour > 9) {
        var cID = $("#" + hour);
        $(cID).addClass("present");
        $("#" + hour).append(cID);
        for (var o = hour - 9; o > 0; o--) {
            var oID = $("#" + o);
            oID.addClass('past');
            $("#" + o).append(oID);
        }
        for (var m = hour + 1; m < 24; m++) {
            var newID = $("#" + m);
            newID.addClass('future');
            $("#" + m).append(newID);
        }
    }
    $(".time-block").append(blocks);
}

//change colors
hourFill();

//save feature on buttons
var saving = $('.saveBtn');
saving.on('click', function (event) {
    event.preventDefault();

    var IDify = this.id;
    IDify = IDify.substring(0, IDify.length - 1);
    console.log(IDify);
    var formInput = $("#" + IDify).textContent;
    formInput= toString(formInput);
    console.log(formInput);
    var data = {
        ID: IDify,
        text: formInput
    };
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
});
//append
$('.saveBtn').append(saving);

//grab local data
var lastentries = JSON.parse(localStorage.getItem("data"));

//fill previous entries
for (var l = 0; l < lastentries.length; l++) {
    var formOutput = document.querySelector(lastentries[l].ID);
    formOutput.textContent = lastentries[l].text;
    $(lastentries[l].ID).append(formOutput);
}

//animate
var animate = $('time-block');
animate.on("mouseover", function () {
    $(this).animate({
        outlineWidth: bold;
        outline-color: blue;
    }, 500, function () {
        $(this).remove();
    });
});
