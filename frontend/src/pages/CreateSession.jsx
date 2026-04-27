import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import ChallengeSelect from '../components/ChallengeSelect';
import SessionForm from '../components/SessionForm';

const CreateSession = () => {
  const [challenges, setChallenges] = useState([]);

  const [challengeId, setChallengeId] = useState("");
  const [partnerName, setPartnerName] = useState("");
  
  const [date, setDate] = useState('');
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetch("http://localhost:5001/challenges")
      .then((res)=>res.json())
      .then(setChallenges);
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
          partnerName,
          date,
          rating,
          notes
        })
      });
      const data =await res.json();
      console.log("Created session", data)
      setChallengeId("");
      setPartnerName("")
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
        
        <div className='grid'>
          <h2>Create a Session</h2>
          <ChallengeSelect 
            challenges={challenges}
            value={challengeId}
            onChange={(e)=>setChallengeId(e.target.value)} 
          />
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Partner Name</span>
            </label>

            <input
              type="text"
              className="input"
              placeholder="Enter your partner name"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />
          </div>
        
          <SessionForm 
            notes={notes}
            setNotes={setNotes}
            rating={rating}
            setRating={setRating}
            date={date}
            setDate={setDate}
            loading={loading}
            handleSubmit={handleSubmit} 
          />
        </div>
      </div>
    </div>
  )
}

export default CreateSession