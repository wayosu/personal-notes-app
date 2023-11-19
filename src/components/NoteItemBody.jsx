import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item-body">
      <h3 className="note-item-title">{title}</h3>
      <span className="note-item-date">{showFormattedDate(createdAt)}</span>
      <p className="note-item-body-content">{body}</p>
    </div>
  );
}

export default NoteItemBody;
