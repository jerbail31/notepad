var notenumber1 = 1;
var notenumber2 = 1;
var notenumber3 = 1;
var noteinput1 = "";
var noteinput2 = "";
var noteinput3 = "";
$("#createnote").click(function() {
	$("#newnote").css('display', 'block');
});
$("#save").click(function() {
	if (notenumber1==1) {
	noteinput1 = $("#noteenter").val();
	var titleinput1 = $("#titleenter").val();
	$("#title1").append(titleinput1);
	$("#note1").css('display', 'block');
	$("#newnote").css('display', 'none');
	notenumber1++
	}
	else{
		if(notenumber2==1){
		noteinput2 = $("#noteenter").val();
		var titleinput2 = $("#titleenter").val();
		$("#title2").append(titleinput1);
		$("#note2").css('display', 'block');
		$("#newnote").css('display', 'none');
		notenumber2++
		}
		else{
			if(notenumber3==1) {
			noteinput3 = $("#noteenter").val();
			var titleinput3 = $("#titleenter").val();
			$("#title3").append(titleinput1);
			$("#note3").css('display', 'block');
			$("#newnote").css('display', 'none');
			notenumber3++
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
function deletenote1() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note1").css('display', 'none');
		notenumber1 = 1;
	}
	else{
		//do nothing
	}
}
function deletenote2() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note2").css('display', 'none');
		notenumber2 = 1;
	}
	else{
		//do nothing
	}
}
function deletenote3() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note3").css('display', 'none');
		notenumber3 = 1;
	}
	else{
		//do nothing
	}
}