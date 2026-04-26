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
    <div>
      <div className='container'>
        <div>
          <Link to={"/"} className='link-btn'>
            <ArrowLeftIcon  size={12}/>
            Back to Home
          </Link>

          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title'>Create New Challenge</h2>
              <form onSubmit={handleSubmit}>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" 
                    placeholder='Challenge Title'
                    className='input'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Description</span>
                  </label>
                  <textarea
                    placeholder='Write your challenge description here...'
                    className='textarea'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Category</span>
                  </label>
                  <select onChange={(e) => setCategory(e.target.value)} className='filter'>
                    <option value="">all categories</option>
                    <option value="romantic">romantic</option>
                    <option value="fun">fun</option>
                    <option value="chill">chill</option>
                    <option value="competetive">competetive</option>
                  </select>
                </div>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Budget</span>
                  </label>
                  <select onChange={(e) => setBudget(e.target.value)} className='filter'>
                    <option value="">all budgets</option>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                  </select>
                </div>

                <div className='card-actions'>
                  <button type='submit' className='btn' disabled={loading} >
                    {loading ? "Creating..." : "Create" }
                  </button>

                </div>

              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateChallenge