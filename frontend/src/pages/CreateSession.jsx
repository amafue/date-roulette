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

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-[#213C51] mb-8">Create a Session</h2>
          
          <div className="flex flex-col gap-6">
            
            {/* CHALLENGE SELECT */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">
                What challenge did you do?
              </label>
              <ChallengeSelect 
                challenges={challenges}
                value={challengeId}
                onChange={(e) => setChallengeId(e.target.value)} 
              />
            </div>
          
            {/* PARTNER INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">
                Partner Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] focus:border-[#6594B1] focus:ring-1 focus:ring-[#6594B1] outline-none transition-all placeholder:text-gray-300"
                placeholder="Who were you with?"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
              />
            </div>
          
            <div className="pt-4 border-t border-gray-50">
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
      </div>
    </div>
  )
}

export default CreateSession