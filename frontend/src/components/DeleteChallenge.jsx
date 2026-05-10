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
    <button 
      onClick={deleteChallenge} 
      className="text-[#213C51] bg-[#EEEEEE] px-3 py-1 rounded text-xs font-semibold border border-transparent hover:bg-red-200 transition-colors"
    >
      Delete
    </button>
  );
};

export default DeleteChallenge;