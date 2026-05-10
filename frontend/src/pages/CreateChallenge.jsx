import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';

const CreateChallenge = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5001/challenges/create", {
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          category,
          budget
        })
      });
      const data =await res.json();
      console.log("Created", data)
      setTitle("");
      setDescription("");
      setCategory("");
      setBudget("");

    } catch (error) {
      console.error("Error creating challenge", error)
    }
  }
  return (
    <div className="min-h-screen bg-[#DDAED3] flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        
        {/* BACK LINK */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#213C51] font-medium underline decoration-[#6594B1]"
        >
          <ArrowLeftIcon size={18}/>
          <span>Back to Home</span>
        </Link>

        {/* MAIN FORM CARD */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-[#213C51] mb-8">Create New Challenge</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* TITLE */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">Title</label>
              <input 
                type="text" 
                placeholder="Challenge Title"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] outline-none focus:border-[#6594B1] focus:ring-1 focus:ring-[#6594B1] bg-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">Description</label>
              <textarea
                placeholder="Write your challenge description here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] outline-none focus:border-[#6594B1] min-h-[120px] bg-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">Category</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] bg-white outline-none focus:border-[#6594B1] appearance-none"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="romantic">Romantic</option>
                <option value="fun">Fun</option>
                <option value="chill">Chill</option>
                <option value="competitive">Competitive</option>
              </select>
            </div>

            {/* BUDGET */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">Budget</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] bg-white outline-none focus:border-[#6594B1] appearance-none"
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">All Budgets</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#213C51] text-[#EEEEEE] py-4 rounded-lg font-bold text-lg hover:bg-[#6594B1] transition-colors disabled:opacity-50 shadow-sm active:scale-[0.98]" 
                disabled={loading} 
              >
                {loading ? "Creating..." : "Create Challenge"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateChallenge