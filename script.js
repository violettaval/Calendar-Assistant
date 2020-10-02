var time = new Date();
var hour = (time.getHours());
function hourFill() {
    var blocks = $(".time-block");
    if (hour < 9) {
        blocks.addClass('future');
        $(".time-block").append(blocks);
    }
    else if (hour = 9) {
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
saving.on('click', function(event){
    event.preventDefault();
    console.log("click");
    localStorage.setItem("data", JSON.stringify(data));
    var IDify = this.id.trim("b");
    var formInput = document.querySelector("#"+IDify);
    var data = {
        ID: IDify,
        text: formInput.textContent.trim()
    } 
    
});
//append
$('.saveBtn').append(saving);

//grab local data
var lastentries = JSON.parse(localStorage.getItem("data"));
//give all current and future boxes forms




//fill previous entries
for(var l = 0;l< lastentries.length;l++){
    var formOutput = document.querySelector(lastentries[l].ID);
    formOutput.textContent = lastentries[l].text;
    $(lastentries[l].ID).append(formOutput);
}
