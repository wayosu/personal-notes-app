import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  if (!notes.length) {
    return (
      <div className="note-list-empty">
        <p>Tidak ada catatan !</p>
      </div>
    );
  } else {
    return (
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;
