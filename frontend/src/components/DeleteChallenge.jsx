import React from "react";

const DeleteChallenge = ({ id }) => {
  const deleteChallenge = async () => {
    const confirmDelete = window.confirm("Delete this challenge?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5001/challenges/${id}`, {
        method: "DELETE",
      });

      console.log("Deleted:", id);
    } catch (error) {
      console.error("Delete error", error);
    }
  };

  return (
    <button onClick={deleteChallenge} className="btn">
      Delete
    </button>
  );
};

export default DeleteChallenge;