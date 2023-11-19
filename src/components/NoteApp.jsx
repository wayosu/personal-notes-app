import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      notes: getInitialData(),
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }

  onSearchNoteHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchQuery: event.target.value,
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  onArchiveNoteHandler(id) {
    const { notes } = this.state;
    notes.forEach((note) => {
      if (note.id === id) note.archived = !note.archived;
    });
    this.setState((prevState) => ({ ...prevState, notes }));
  }

  noteList() {
    const { searchQuery, notes } = this.state;

    const list = searchQuery.trim().length
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : notes;

    return list.sort((a, b) => a.date - b.date).reverse();
  }

  render() {
    return (
      <div className="note-app">
        <h1>Notes</h1>
        <NoteSearch onSearch={this.onSearchNoteHandler} />

        <h2>Buat Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />

        <h2>Catatan Aktif</h2>
        <NoteList
          notes={this.noteList().filter((note) => !note.archived)}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
        />

        <h2>Arsip</h2>
        <NoteList
          notes={this.noteList().filter((note) => note.archived)}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
