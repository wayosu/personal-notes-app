import React from "react";

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      Hapus
    </button>
  );
}

export default DeleteButton;
