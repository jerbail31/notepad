var sortdate = 0;
var notenumber1 = 1;
var notenumber2 = 1;
var notenumber3 = 1;
var notenumber4 = 1;
var notenumber5 = 1;
var notenumber6 = 1;
var notenumber7 = 1;
var notenumber8 = 1;
var notenumber9 = 1;
var notenumber = 1;
var noteinput1 = "";
var noteinput2 = "";
var noteinput3 = "";
var noteinput4 = "";
var noteinput5 = "";
var noteinput6 = "";
var noteinput7 = "";
var noteinput8 = "";
var noteinput9 = "";
var noteinput10 = "";
var titleinput1 = "";
var titleinput2 = "";
var titleinput3 = "";
var titleinput4 = "";
var titleinput5 = "";
var titleinput6 = "";
var titleinput7 = "";
var titleinput8 = "";
var titleinput9 = "";
var titleinput10 = "";

//new note button
$("#createnote").click(function() {
	$("#titleenter").val("")
	$("#noteenter").val("")
	$("#newnote").css('display', 'block');

});
//Save button
$("#save").click(function() {

	if (notenumber1==1) {
	$("#title1").empty()
	noteinput1 = $("#noteenter").val();
	titleinput1 = $("#titleenter").val();
	$("#title1").append(titleinput1);
	$("#note1").css('display', 'block');
	$("#newnote").css('display', 'none');
	$("#date1").empty();
	
	var d = new Date();
	$("#date1").append(d)
	notenumber1++
	}
	else{
		if(notenumber2==1){
		$("#title2").empty()
		noteinput2 = $("#noteenter").val();
		titleinput2 = $("#titleenter").val();
		$("#title2").append(titleinput2);
		$("#note2").css('display', 'block');
		$("#newnote").css('display', 'none');
		$("#date2").empty();
		var d = new Date();
		$("#date2").append(d)
		notenumber2++
		}
		else{
			if(notenumber3==1) {
			("#title3").empty()
			noteinput3 = $("#noteenter").val();
			titleinput3 = $("#titleenter").val();
			$("#title3").append(titleinput3);
			$("#note3").css('display', 'block');
			$("#newnote").css('display', 'none');
			$("#date3").empty();
			var d = new Date();
			$("#date3").append(d)
			notenumber3++
			}
			else{
				if(notenumber4==1){
				$("#title4").empty()
				noteinput4 = $("#noteenter").val();
				titleinput4 = $("#titleenter").val();
				$("#title4").append(titleinput4);
				$("#note4").css('display', 'block');
				$("#newnote").css('display', 'none');
				$("#date4").empty();
				var d = new Date();
				$("#date4").append(d)
				notenumber4++
				}
				else{
					if(notenumber5==1){
					$("#title5").empty()
					noteinput5 = $("#noteenter").val();
					titleinput5 = $("#titleenter").val();
					$("#title5").append(titleinput5);
					$("#note5").css('display', 'block');
					$("#newnote").css('display', 'none');
					$("#date5").empty();
					var d = new Date();
					$("#date5").append(d)
					notenumber5++
					}
					else{
						if(notenumber6==1){
						$("#title6").empty()
						noteinput6 = $("#noteenter").val();
						titleinput6 = $("#titleenter").val();
						$("#title6").append(titleinput6);
						$("#note6").css('display', 'block');
						$("#newnote").css('display', 'none');
						$("#date6").empty();
						var d = new Date();
						$("#date6").append(d)
						notenumber6++
						}
						else{
							if(notenumber7==1){
							$("#title7").empty()
							noteinput7 = $("#noteenter").val();
							titleinput7 = $("#titleenter").val();
							$("#title7").append(titleinput7);
							$("#note7").css('display', 'block');
							$("#newnote").css('display', 'none');
							$("#date7").empty();
							var d = new Date();
							$("#date7").append(d)
							notenumber7++
							}
							else{
								if(notenumber8==1){
								$("#title8").empty()
								noteinput8 = $("#noteenter").val();
								titleinput8 = $("#titleenter").val();
								$("#title8").append(titleinput8);
								$("#note8").css('display', 'block');
								$("#newnote").css('display', 'none');
								$("#date8").empty();
								var d = new Date();
								$("#date8").append(d)
								notenumber8++
								}
								else{
									if(notenumber9==1){
									$("#title9").empty()
									noteinput9 = $("#noteenter").val();
									titleinput9 = $("#titleenter").val();
									$("#title9").append(titleinput9);
									$("#note9").css('display', 'block');
									$("#newnote").css('display', 'none');
									$("#date9").empty();
									var d = new Date();
									$("#date9").append(d)
									notenumber9++
									}
									else{
										if(notenumber10==1){
										$("#title10").empty()
										noteinput10 = $("#noteenter").val();
										titleinput10 = $("#titleenter").val();
										$("#title10").append(titleinput10);
										$("#note10").css('display', 'block');
										$("#newnote").css('display', 'none');
										$("#date10").empty();
										var d = new Date();
										$("#date10").append(d)
										notenumber10++
										}
										else{
											alert("you have reached the maximum number of notes")
										}
									}	
								}	
							}	
						}	
					}	
				}	
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
//if cancel pressed do nothing
}
function deletenote2() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note2").css('display', 'none');
		notenumber2 = 1;
	}
//if cancel pressed do noting
}
function deletenote3() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note3").css('display', 'none');
		notenumber3 = 1;
}
//if cancel pressed do nothing
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
function sort() {

}