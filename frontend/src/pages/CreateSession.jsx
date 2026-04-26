
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const CreateSession = () => {
  const [challengeName, setChallengeName] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5001/sessions/create", {
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify({
          challengeName,
          date,
          rating,
          notes
        })
      });
      const data =await res.json();
      console.log("Created", data)
      setChallengeName("");
      setDate("");
      setRating(0);
      setNotes("");

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
              <h2 className='card-title'>Create New Session</h2>
              <form onSubmit={handleSubmit}>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Name of the Challenge</span>
                  </label>
                  <input type="text" 
                    placeholder='Challenge Title'
                    className='input'
                    value={challengeName}
                    onChange={(e)=>setChallengeName(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Notes</span>
                  </label>
                  <textarea
                    placeholder='Write your thoughts and experiences from this challenge...'
                    className='textarea'
                    value={notes}
                    onChange={(e)=>setNotes(e.target.value)}
                  />
                </div>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Rating</span>
                  </label>
                  <select onChange={(e) => setRating(e.target.value)} className='filter'>
                    <option value="">none</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Date</span>
                  </label>
                  <input type="date"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                  />
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

export default CreateSession