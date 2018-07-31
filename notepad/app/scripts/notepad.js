var noteinput;
var titleinput;
$("#createnote").click(function() {
	$("#newnote").css('display', 'block');
});
$("#save").click(function() {
	debugger;
	noteinput = $("#noteenter").val();
	titleinput = $("#titleenter").val();
	$("#title").append(titleinput);
	$("#note").css('display', 'block');
	
});
