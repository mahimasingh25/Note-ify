import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <h2 className="note-title">{title}</h2>
      <span className="note-text">{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
