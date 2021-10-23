console.log("welcome to RemindOOr");
showNotes();
let addBtn = document.getElementById("addNote");
addBtn.addEventListener("click", (e) => {
  let addText = document.getElementById("remind");
  let addTextTitle = document.getElementById("titleOfNote");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let pushObj = { title: addTextTitle.value, notes: addText.value };
  notesObj.push(pushObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  addTextTitle.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteTextArr = [];
  } else {
    noteTextArr = JSON.parse(notes);
  }
  let html = "";
  let cardContainer = document.getElementById("cardContainer");
  noteTextArr.forEach(function (element, index) {
    html += `
        <div class="note">
                <h4>${element.title}</h4>
                <hr>
                <p>${element.notes}</p>
                <button class="deleteNote" onclick="deleteNode(this.id)" id = "${index}" >Delete Note</button>
            </div>  `;
  });
  if (noteTextArr.length != 0) {
    cardContainer.innerHTML = html;
  } else {
    cardContainer.innerHTML = `No Reminder Notes Yet! Type something in the "add a note" section and click the button "Add note" to add a reminder`;
  }
}

function deleteNode(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
let search = document.getElementById("searchbar");
search.addEventListener("input", () => {
  let inputValue = search.value.toLowerCase();
  let cards = document.getElementsByClassName("note");
  Array.from(cards).forEach((element) => {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    let cardTitle = element.getElementsByTagName("h4")[0].innerText;
    if (cardTxt.includes(inputValue) || cardTitle.includes(inputValue)) {
      element.style.display = "grid";
      console.log("included");
    } else {
      element.style.display = "none";
    }
  });
});
