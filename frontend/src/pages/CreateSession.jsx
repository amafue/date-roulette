
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const CreateSession = () => {
  const [challenges, setChallenges] = useState([]);
  const [challengeId, setChallengeId] = useState("");
  const [date, setDate] = useState('');
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchChallenges =async () =>{
      try {
        const res = await fetch("http://localhost:5001/challenges")
        const data = await res.json()
        setChallenges(data)
      } catch (error) {
        console.error("Error fetching challenges", error);
      }
    }
    fetchChallenges()
  }, [])

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
          challengeId,
          userId: "69ef2c91ef698d0d7d43fcce",
          date,
          rating,
          notes
        })
      });
      const data =await res.json();
      console.log("Created session", data)
      setChallengeId("");
      setDate("");
      setRating(0);
      setNotes("");

    } catch (error) {
      console.error("Error creating challenge", error)
    } finally {
      setLoading(false);
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
        </div>

          <div className='card'>
            <div className='card-body'>
              <h2 className='card-title'>Create New Session</h2>
              <form onSubmit={handleSubmit}>

                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Choose a Challenge</span>
                  </label>
                  <select
                    className="input"
                    value={challengeId}
                    onChange={(e) => setChallengeId(e.target.value)}
                    required
                  >
                    <option value="">Select one of the challenges</option>

                    {challenges.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
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
  )
}

export default CreateSession