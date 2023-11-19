import React from "react";

function NoteSearch({ onSearch }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan ..." onChange={onSearch} />
    </div>
  );
}

export default NoteSearch;
