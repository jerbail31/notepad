var notenumber = 1
$("#createnote").click(function() {
	$("#newnote").css('display', 'block');
});
$("#save").click(function() {
	if (notenumber==1) {
	var noteinput1 = $("#noteenter").val();
	var titleinput1 = $("#titleenter").val();
	$("#title1").append(titleinput1);
	$("#note1").css('display', 'block');
	$("#newnote").css('display', 'none');
	notenumber++
	}
	else{
		if(notenumber==2){
		var noteinput2 = $("#noteenter").val();
		var titleinput2 = $("#titleenter").val();
		$("#title2").append(titleinput1);
		$("#note2").css('display', 'block');
		$("#newnote").css('display', 'none');
		notenumber++
		}
		else{
			if(notenumber==3) {
			var noteinput3 = $("#noteenter").val();
			var titleinput3 = $("#titleenter").val();
			$("#title3").append(titleinput1);
			$("#note3").css('display', 'block');
			$("#newnote").css('display', 'none');
			notenumber++
			}
			else {
				alert("You have reached the maximum number of notes")
			}	
		}
	}

});
function view1() {
	alert(noteinput1);
}
function view2() {
	alert(noteinput2);
}
function view3() {
	alert(noteinput3);
}
function deletenote() {
	confirm("are you sure you want to delete the note?")

}