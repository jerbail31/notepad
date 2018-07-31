var note# = 1
$("#createnote").click(function() {
	$("#newnote").css('display', 'block');
});
$("#save").click(function() {
	if (note#==1) {
	var noteinput1 = $("#noteenter").val();
	var titleinput1 = $("#titleenter").val();
	$("#title1").append(titleinput1);
	$("#note1").css('display', 'block');
	$("#newnote").css('display', 'none');
	}
	else{
		if(note#==2){
		var noteinput1 = $("#noteenter").val();
		var titleinput1 = $("#titleenter").val();
		$("#title1").append(titleinput1);
		$("#note1").css('display', 'block');
		$("#newnote").css('display', 'none');
		}
		else{
			if(note#==3) {
			var noteinput1 = $("#noteenter").val();
			var titleinput1 = $("#titleenter").val();
			$("#title1").append(titleinput1);
			$("#note1").css('display', 'block');
			$("#newnote").css('display', 'none');
			}
			else {
				alert("You have reached the maximum number of notes")
			}	
		}
	}

});
function view() {
	alert(noteinput1);
}
function deletenote() {
	confirm("are you sure you want to delete the note?")

}