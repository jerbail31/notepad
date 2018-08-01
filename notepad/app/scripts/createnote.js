function createnewnote() {
	debugger;
	var div =document.createElement("div");
	var button1 =document.createElement("button");
	var button2 =document.createElement("button");
	var button3 =document.createElement("button");
	var button4 =document.createElement("button");
	var date =document.createElement("p");


	div.className = "btn-group";
	div.id = "note";
	button1.id = "title";
	button1.style.padding = "12px, 100px";
	div.appendChild(button1);
	button2.innerText = "View"
	button2.id = "view";
	button2.style.padding = "12px";
	div.appendChild(button2)
	button3.innerText = "Edit"
	button3.id = "edit";
	button3.style.padding = "12px";
	div.appendChild(button3);
	button4.innerText = "Delete";
	button4.id = "view";
	button4.style.padding = "12px";
	div.appendChild(button4);
	date.id = "date";
	div.appendChild(date);
	return div;



}

function addNote() {
	var grab = this.parentNode;
	var grab;
	var listNote = createnewnote();
}