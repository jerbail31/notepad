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
var notenumber10 = 1;
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
var searchinput = "";
var notenumber = 0;
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
	notenumber1 = 3
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
		notenumber2 = 3
		}
		else{
			if(notenumber3==1) {
			$("#title3").empty();
			noteinput3 = $("#noteenter").val();
			titleinput3 = $("#titleenter").val();
			$("#title3").append(titleinput3);
			$("#note3").css('display', 'block');
			$("#newnote").css('display', 'none');
			$("#date3").empty();
			var d = new Date();
			$("#date3").append(d)
			notenumber3 = 3
			}
			else{
				if(notenumber4==1){
				$("#title4").empty();
				noteinput4 = $("#noteenter").val();
				titleinput4 = $("#titleenter").val();
				$("#title4").append(titleinput4);
				$("#note4").css('display', 'block');
				$("#newnote").css('display', 'none');
				$("#date4").empty();
				var d = new Date();
				$("#date4").append(d)
				notenumber4 = 3
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
					notenumber5 = 3
					}
					else{
						if(notenumber6==1){
						$("#title6").empty();
						noteinput6 = $("#noteenter").val();
						titleinput6 = $("#titleenter").val();
						$("#title6").append(titleinput6);
						$("#note6").css('display', 'block');
						$("#newnote").css('display', 'none');
						$("#date6").empty();
						var d = new Date();
						$("#date6").append(d)
						notenumber6 = 3
						}
						else{
							if(notenumber7==1){
							$("#title7").empty();
							noteinput7 = $("#noteenter").val();
							titleinput7 = $("#titleenter").val();
							$("#title7").append(titleinput7);
							$("#note7").css('display', 'block');
							$("#newnote").css('display', 'none');
							$("#date7").empty();
							var d = new Date();
							$("#date7").append(d)
							notenumber7 = 3
							}
							else{
								if(notenumber8==1){
								$("#title8").empty();
								noteinput8 = $("#noteenter").val();
								titleinput8 = $("#titleenter").val();
								$("#title8").append(titleinput8);
								$("#note8").css('display', 'block');
								$("#newnote").css('display', 'none');
								$("#date8").empty();
								var d = new Date();
								$("#date8").append(d)
								notenumber8 = 3
								}
								else{
									if(notenumber9==1){
									$("#title9").empty();
									noteinput9 = $("#noteenter").val();
									titleinput9 = $("#titleenter").val();
									$("#title9").append(titleinput9);
									$("#note9").css('display', 'block');
									$("#newnote").css('display', 'none');
									$("#date9").empty();
									var d = new Date();
									$("#date9").append(d)
									notenumber9 = 3
									}
									else{
										if(notenumber10==1){
										$("#title10").empty();
										noteinput10 = $("#noteenter").val();
										titleinput10 = $("#titleenter").val();
										$("#title10").append(titleinput10);
										$("#note10").css('display', 'block');
										$("#newnote").css('display', 'none');
										$("#date10").empty();
										var d = new Date();
										$("#date10").append(d)
										notenumber10 = 3
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
function view4() {
	alert(noteinput4);
}
function view5() {
	alert(noteinput5);
}
function view6() {
	alert(noteinput6);
}
function view7() {
	alert(noteinput7);
}
function view8() {
	alert(noteinput8);
}
function view9() {
	alert(noteinput9);
}
function view10() {
	alert(noteinput10);
}

//Delete button
//Delete the notes button will create a pop-up(ok and cancel)
function deletenote1() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note1").css('display', 'none');
		notenumber1 = 2;
	}
//if cancel pressed do nothing
}
function deletenote2() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note2").css('display', 'none');
		notenumber2 = 2;
	}
//if cancel pressed do noting
}
function deletenote3() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note3").css('display', 'none');
		notenumber3 = 2;
}
//if cancel pressed do nothing
}
function deletenote4() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note4").css('display', 'none');
		notenumber4 = 2;
}
//if cancel pressed do nothing
}function deletenote5() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note5").css('display', 'none');
		notenumber5 = 2;
}
//if cancel pressed do nothing
}function deletenote6() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note6").css('display', 'none');
		notenumber6 = 2;
}
//if cancel pressed do nothing
}function deletenote7() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note7").css('display', 'none');
		notenumber7 = 2;
}
//if cancel pressed do nothing
}function deletenote8() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note8").css('display', 'none');
		notenumber8 = 2;
}
//if cancel pressed do nothing
}function deletenote9() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note9").css('display', 'none');
		notenumber9 = 2;
}
//if cancel pressed do nothing
}function deletenote10() {
	if(confirm("are you sure you want to delete the note?")){
		$("#note10").css('display', 'none');
		notenumber10 = 1;
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
function edit4() {
	notenumber4 = 1;
	$("#titleenter").val(titleinput4);
	$("#noteenter").val(noteinput4);
	$("#newnote").css('display', 'block');
}function edit5() {
	notenumber5 = 1;
	$("#titleenter").val(titleinput5);
	$("#noteenter").val(noteinput5);
	$("#newnote").css('display', 'block');
}function edit6() {
	notenumber6 = 1;
	$("#titleenter").val(titleinput6);
	$("#noteenter").val(noteinput6);
	$("#newnote").css('display', 'block');
}function edit7() {
	notenumber7 = 1;
	$("#titleenter").val(titleinput7);
	$("#noteenter").val(noteinput7);
	$("#newnote").css('display', 'block');
}function edit8() {
	notenumber8 = 1;
	$("#titleenter").val(titleinput8);
	$("#noteenter").val(noteinput8);
	$("#newnote").css('display', 'block');
}function edit9() {
	notenumber9 = 1;
	$("#titleenter").val(titleinput9);
	$("#noteenter").val(noteinput9);
	$("#newnote").css('display', 'block');
}function edit10() {
	notenumber10 = 1;
	$("#titleenter").val(titleinput10);
	$("#noteenter").val(noteinput10);
	$("#newnote").css('display', 'block');
}
function search() {
	searchinput = $("#searchenter").val();
	$("#cancel").css('display', 'block');

	if (notenumber = 3) {
		if (titleinput1 == searchinput){
			$("#note2").css('display', 'none');
			$("#note3").css('display', 'none');
			$("#note4").css('display', 'none');
			$("#note5").css('display', 'none');
			$("#note6").css('display', 'none');
			$("#note7").css('display', 'none');
			$("#note8").css('display', 'none');
			$("#note9").css('display', 'none');
			$("#note10").css('display', 'none');
		}
		else if(notenumber = 3){
			if (titleinput2 == searchinput){
				$("#note1").css('display', 'none');
				$("#note3").css('display', 'none');
				$("#note4").css('display', 'none');
				$("#note5").css('display', 'none');
				$("#note6").css('display', 'none');
				$("#note7").css('display', 'none');
				$("#note8").css('display', 'none');
				$("#note9").css('display', 'none');
				$("#note10").css('display', 'none');	
			}
		
			else if(notenumber = 3){
				if (titleinput3 == searchinput){
					$("#note1").css('display', 'none');
					$("#note2").css('display', 'none');
					$("#note4").css('display', 'none');
					$("#note5").css('display', 'none');
					$("#note6").css('display', 'none');
					$("#note7").css('display', 'none');
					$("#note8").css('display', 'none');
					$("#note9").css('display', 'none');
					$("#note10").css('display', 'none');	
				}
		
				else if(notenumber = 3){
					if (titleinput4 == searchinput){
						$("#note1").css('display', 'none');
						$("#note2").css('display', 'none');
						$("#note3").css('display', 'none');
						$("#note5").css('display', 'none');
						$("#note6").css('display', 'none');
						$("#note7").css('display', 'none');
						$("#note8").css('display', 'none');
						$("#note9").css('display', 'none');
						$("#note10").css('display', 'none');	
					}
		
					else if(notenumber = 3){
						if (titleinput5 == searchinput){
							$("#note1").css('display', 'none');
							$("#note2").css('display', 'none');
							$("#note3").css('display', 'none');
							$("#note4").css('display', 'none');
							$("#note6").css('display', 'none');
							$("#note7").css('display', 'none');
							$("#note8").css('display', 'none');
							$("#note9").css('display', 'none');
							$("#note10").css('display', 'none');	
						}
		
						else if(notenumber = 3){
							if (titleinput6 == searchinput){
								$("#note1").css('display', 'none');
								$("#note2").css('display', 'none');
								$("#note3").css('display', 'none');
								$("#note4").css('display', 'none');
								$("#note5").css('display', 'none');
								$("#note7").css('display', 'none');
								$("#note8").css('display', 'none');
								$("#note9").css('display', 'none');
								$("#note10").css('display', 'none');	
							}
		
							else if(notenumber = 3){
								if (titleinput7 == searchinput){
									$("#note1").css('display', 'none');
									$("#note2").css('display', 'none');
									$("#note3").css('display', 'none');
									$("#note4").css('display', 'none');
									$("#note5").css('display', 'none');
									$("#note6").css('display', 'none');
									$("#note8").css('display', 'none');
									$("#note9").css('display', 'none');
									$("#note10").css('display', 'none');	
								}
		
								else if(notenumber = 3){
									if (titleinput8 == searchinput){
										$("#note1").css('display', 'none');
										$("#note2").css('display', 'none');
										$("#note3").css('display', 'none');
										$("#note4").css('display', 'none');
										$("#note5").css('display', 'none');
										$("#note6").css('display', 'none');
										$("#note7").css('display', 'none');
										$("#note9").css('display', 'none');
										$("#note10").css('display', 'none');	
									}
		
									else if(notenumber = 3){
										if (titleinput9 == searchinput){
											$("#note1").css('display', 'none');
											$("#note2").css('display', 'none');
											$("#note3").css('display', 'none');
											$("#note4").css('display', 'none');
											$("#note5").css('display', 'none');
											$("#note6").css('display', 'none');
											$("#note7").css('display', 'none');
											$("#note8").css('display', 'none');
											$("#note10").css('display', 'none');	
										}
		
										else if(notenumber = 3){
											if (titleinput10 == searchinput){
												$("#note1").css('display', 'none');
												$("#note2").css('display', 'none');
												$("#note3").css('display', 'none');
												$("#note4").css('display', 'none');
												$("#note5").css('display', 'none');
												$("#note6").css('display', 'none');
												$("#note7").css('display', 'none');
												$("#note8").css('display', 'none');
												$("#note9").css('display', 'none');	
											}
											else {
												alert("There is no " + searchinput + " note")
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
	}
}
function cancelsearch() {
	$("#cancel").css('display', 'none');
	$("#searchenter").val("");
	if (searchinput == ""){
		return;
	}
	if(notenumber1 == 3){
		$("#note1").css('display', 'block')
	}
	if(notenumber2 == 3){
		$("#note2").css('display', 'block')
	}
	if(notenumber3 == 3){
		$("#note3").css('display', 'block')
	}
	if(notenumber4 == 3){
		$("#note4").css('display', 'block')
	}
	if(notenumber5 == 3){
		$("#note5").css('display', 'block')
	}
	if(notenumber6 == 3){
		$("#note6").css('display', 'block')
	}
	if(notenumber7 == 3){
		$("#note7").css('display', 'block')
	}
	if(notenumber8 == 3){
		$("#note8").css('display', 'block')
	}
	if(notenumber9 == 3){
		$("#note9").css('display', 'block')
	}
	if(notenumber10 == 3){
		$("#note10").css('display', 'block')
	}
	
}
