import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ note, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemBody
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
      />
      <div className="note-item-action">
        <DeleteButton onClick={() => onDelete(note.id)} />
        <ArchiveButton
          archived={note.archived}
          onClick={() => onArchive(note.id)}
        />
      </div>
    </div>
  );
}

export default NoteItem;
