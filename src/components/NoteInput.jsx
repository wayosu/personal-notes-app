import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler = (event) => {
    const { value } = event.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, 50),
      };
    });
  };

  onBodyChangeEventHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    return (
      <form className="note-form" onSubmit={this.onSubmitEventHandler}>
        <span>Sisa Karakter: {50 - this.state.title.length}</span>
        <input
          type="text"
          className="note-form-title"
          placeholder="Ini adalah judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          required
        />
        <textarea
          className="note-form-body"
          placeholder="Tuliskan catatanmu di sini ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button type="submit">Buat Catatan</button>
      </form>
    );
  }
}

export default NoteInput;
