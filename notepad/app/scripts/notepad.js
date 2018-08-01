var notenumber1 = 1;
var notenumber2 = 1;
var notenumber3 = 1;
var noteinput1 = "";
var noteinput2 = "";
var noteinput3 = "";
var titleinput1 = "";
var titleinput2 = "";
var titleinput3 = "";
//new note button
$("#createnote").click(function() {
	$("#titleenter").val("")
	$("#noteenter").val("")
	$("#newnote").css('display', 'block');

});
//Save button
$("#save").click(function() {
	debugger;
	if (notenumber1==1) {
	noteinput1 = $("#noteenter").val();
	titleinput1 = $("#titleenter").val();
	$("#title1").append(titleinput1);
	$("#note1").css('display', 'block');
	$("#newnote").css('display', 'none');
	notenumber1++
	}
	else{
		if(notenumber2==1){
		noteinput2 = $("#noteenter").val();
		titleinput2 = $("#titleenter").val();
		$("#title2").append(titleinput2);
		$("#note2").css('display', 'block');
		$("#newnote").css('display', 'none');
		notenumber2++
		}
		else{
			if(notenumber3==1) {
			noteinput3 = $("#noteenter").val();
			titleinput3 = $("#titleenter").val();
			$("#title3").append(titleinput3);
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

//view button
function view1() {
	alert(noteinput1);
}
function view2() {
	
	alert(noteinput2);
}
function view3() {
	alert(noteinput3);
}

//Delete button
//Delete the notes button will create a pop-up(ok and cancel)
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
		document.getElementById("title2").innerHTML = "";
		document.getElementById("note2").innerHTML = "";
		
	}
	else{
		//do nothing
	}
}
function deletenote3() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note3").css('display', 'none');
		notenumber3 = 1;
		document.getElementById("title3").innerHTML = "";
		document.getElementById("note3").innerHTML = "";
		
	}
	else{
		//do nothing
	}
}

//edit button
function edit1() {
	
	notenumber1 = 1;
	$("#titleenter").val(titleinput1);
	$("#noteenter").val(noteinput1);
	$("#newnote").css('display', 'block');

}
function edit2() {
	notenumber2 = 1;
	$("#titleenter").val(titleinput2);
	$("#noteenter").val(noteinput2);
	$("#newnote").css('display', 'block');
}
function edit3() {
	notenumber3 = 1;
	$("#titleenter").val(titleinput3);
	$("#noteenter").val(noteinput3);
	$("#newnote").css('display', 'block');
}