const input_note = document.getElementById("input-note");
const input_btn = document.getElementById("input-btn");

const notes_box = document.getElementById("notes-box");

const handleCreateNote = () => {
    const value = input_note.value; // value = Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur

    // random color generation
    const color = "#" + Math.floor(Math.random() * 16581375).toString(16);

    const div = document.createElement("div"); // <div></div>
    div.className = "px-3 py-3 rounded box"; // <div class="bg-warning px-3 py-3 rounded"></div>
    div.id = "note";
    div.style.backgroundColor = color;
    div.textContent = value;//<div class="bg-warning px-3 py-3 rounded"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur</div>

    // Check if note is empty
    if (value === "") {
        alert("Please create note");
        return;
    }
    // Current date and time
    const now = new Date();

    const day = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    const date = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    // Note content
    div.innerHTML = `
    <div class="note-content">${value}</div>

    <div class="mt-3 d-flex justify-content-between align-items-center">
      <small class="text-muted">
        ${day} | ${date} | ${time}
      </small>

      <button class="btn btn-sm btn-dark edit-btn">
        Edit
      </button>
    </div>
  `;

    notes_box.appendChild(div);

    // Edit button
    const edit_btn = div.querySelector(".edit-btn");

    edit_btn.addEventListener("click", () => {
        const note_content = div.querySelector(".note-content");

        // If currently editing
        if (edit_btn.textContent === "Save") {
            const updatedValue = note_content.textContent.trim();

            // Don't allow empty note
            if (updatedValue === "") {
                alert("Please create note");
                return;
            }

            note_content.contentEditable = "false";
            edit_btn.textContent = "Edit";
        }
        else {
            // Start editing
            note_content.contentEditable = "true";
            note_content.focus();
            edit_btn.textContent = "Save";
        }
    });


    notes_box.appendChild(div); // we are insert new div into notes box

    input_note.value = ""; // we are empty value of input box
};

input_btn.addEventListener("click", handleCreateNote);









