console.log("welcome to RemindOOr");
// showNotes();
let addBtn = document.getElementById("addNote");
addBtn.addEventListener("click", (e)=>{
    let addText = document.getElementById('remind');
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        noteTextArr = [];
    }else{
        noteTextArr = JSON.parse(notes);
    }
    let html = "";
    let cardContainer = document.getElementById("cardContainer");
    noteTextArr.forEach(function(element,index){
        html += `
        <div class="note">
                <h4>Note ${index+1}</h4>
                <p>${element}</p>
                <button class="deleteNote">Delete Note</button>
            </div>  `
    })
    if(noteTextArr.length != 0){
        cardContainer.innerHTML = html;
    }
    else{
        cardContainer.innerHTML = `No Reminder Notes Yet! Type something in the "add a note" section and click the button "Add note" to add a reminder`;
    }
}