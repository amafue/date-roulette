import React from 'react'

const CustomizeChallenge = ({challenge}) => {
    const customizeChallenge = async () => {
        const newTitle = prompt("New title:", challenge.title);
        if (!newTitle) return;

        const newDescription = prompt("New description:", challenge.description);

        const newCategory = prompt("New category:", challenge.category);

        const newBudget = prompt("New budget:", challenge.budget);
        
        try {
            await fetch(`http://localhost:5001/challenges/${challenge._id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                title: newTitle,
                description: newDescription,
                category: newCategory,
                budget: newBudget,
                }),
            });

            window.location.reload();
        } catch (error) {
            console.error("Update error", error);
        }
    }
  return (
    <div>
        <button 
        onClick={customizeChallenge} 
        className="text-[#6594B1] bg-white px-3 py-1 rounded text-xs font-semibold border border-[#6594B1] hover:bg-[#6594B1] hover:text-white transition-colors"
        >
            Edit
        </button>
    </div>
  )
}

export default CustomizeChallenge