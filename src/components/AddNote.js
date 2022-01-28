import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  // const [noteText, setNoteText] = useState("");
  // const characterLimit = 200;

  // const handleChange = (event) => {
  //   if (characterLimit - event.target.value.length >= 0) {
  //     setNoteText(event.target.value);
  //   }
  // };

  // const handleSaveClick = () => {
  //   if (noteText.trim().length > 0) {
  //     handleAddNote(noteText);
  //     setNoteText("");
  //   }
  // };

  const [note, setNote] = useState({
    title: "",
    text: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSaveClick(e) {
    handleAddNote(note.title, note.text);
    setNote({
      title: "",
      text: ""
    });
    e.preventDefault();
  }

  return (
    <div>
      {/* <textarea
        rows="2"
        cols="10"
        placeholder="Take a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div> */}

      <form className="new" onChange={handleChange}>
        <textarea
          name="title"
          rows="2"
          cols="10"
          placeholder="Title"
          value={note.title}
        ></textarea>
        <textarea
          name="text"
          placeholder="Take a note..."
          rows="2"
          cols="10"
          value={note.text}
        ></textarea>
        <button className="save" onClick={handleSaveClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNote;
