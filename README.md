# Notepad
this is where the final project will be<br/>
preview of site https://drive.google.com/file/d/1VKXoXOWbOeBgmB0y-Y9eQV-CzklIBqvC/view?usp=sharing\

# What the project does
The project is a notepad that keeps a title and a note. <br/>
You can view it, edit it and delete it.<br/>
You can also search for your note.

# How the project works
The project uses jquery and javascript for the onclick functions and css for the to show and hide text.<br/>
When you click the "new note" button it will trigger a function in the js file and dispaly what you enter your note and the save button. <br/>
When you click save it will trigger a function in js file. It will make the box disappear and check to see of of the 10 note are free. If one is free it will enter what what was entered in the textarea and show that note with the time under. <br/>
If you click view it will trigger the function that shows the alert with whatever was entered in that note.<br/>
Delete note will create an alert that asks you if you realy want to delete the note. If "ok" is pressed the note will be removed. If cancel is pressed nothing will happen. <br/>
Edit note will do the same thing as new note exept that what you entered in the note will allready be in the text arrea and there will not be a new note created. <br/>
When you search the note it will trigger a function in js file which will see if the title of the title of any of the notes is the same as what is searched. If there is a matching title that note only will show up. If no notes have the same title as the one entered you will see an alert. It will also cheate a "Reset Search button.<br/>
Reset Search will make your list be the same as before the search and reset the text area and remove itself.
# How to compile the project
1. Open the command prompt and go in the notepad folder. 
2. Type `npm install`.
3. Type `bower install`.
4. Type `gulp serve`.
5. Now the server will be listening at the following URL: `http://localhost:9000`.

# How to test the project
If you press new note something will apear under.<br/>
If you press the save button the note you wrote will apear on the site.<br/>
If you view you will get a alert with the content of the note.<br/>
If you edit the same thing than new note will appear but there will be the note's characters inside.<br/>
If you delete you will get a ok and cancel alert ok will delete the note and cancel does nothing.<br/>
If you search the note with the same title will appear.<br/>
If the search is invalid then a alert will tell you that.<br/>
If reset search pressed the list will be the same as before the search and the text area will clear.
# Contributors

[Jérémy Baillargeon](https://github.com/jerbail31)
