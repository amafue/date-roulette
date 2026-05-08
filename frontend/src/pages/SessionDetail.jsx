import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeftIcon } from "lucide-react";

const SessionDetail = () => {
  const [session, setSession] = useState([null])
  const [loading, setLoading] = useState(false)
  const {id} = useParams();
  const getSessionDetail = async () => {
    try {
      setLoading(true);

      const url = `http://localhost:5001/sessions/${id}`;
      const res = await fetch(url)
      const data = await res.json();

      setSession(data);
    } catch (error) {
      console.error("Error fetching idea", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getSessionDetail();
  }, [id])

  return (
    <div className="min-h-screen bg-[#EEEEEE] p-8 flex flex-col items-center">
      <div className="w-full max-w-md">
        
        {/* BACK LINK */}
        <div className="mb-4">
          <Link 
            to="/sessions" 
            className="flex items-center gap-2 text-[#213C51] font-medium underline decoration-[#6594B1]"
          >
            <ArrowLeftIcon size={16}/>
            Back to History
          </Link>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white border border-[#6594B1] rounded-lg p-6 shadow-sm">
          {session ? (
            <div>
              <h2 className="text-xl font-bold text-[#213C51] mb-2 border-b border-[#EEEEEE] pb-2">
                {session.challengeId?.title}
              </h2>
              
              <p className="text-[#213C51] mb-4 text-sm leading-relaxed">
                {session.notes}
              </p>

              <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                <span>Rating: {session.rating}/10</span>
                <span>{new Date(session.date).toLocaleDateString()}</span>
              </div>
            </div>
          ) : (
            <p className="text-[#213C51]">Loading session...</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default SessionDetail