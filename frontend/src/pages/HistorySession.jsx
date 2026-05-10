import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import SessionCard from '../components/SessionCard';

const HistorySession = () => {
  const [session, setSession] = useState([]);
  const [loading, setLoading] = useState(false)


  const fetchHistorySession = async ()=>{ 
    setLoading(true)
    try {
      const url = "http://localhost:5001/sessions";
      const res = await fetch(url)
      const data = await res.json();

      setSession(data);
    } catch (error) {
      console.error("Error fetching idea", error);
    }finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    fetchHistorySession();
  }, []);


  return (
    <div className="min-h-screen bg-[#DDAED3] p-6">
      <div className="max-w-5xl mx-auto">
        
        {/* BACK BUTTON */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#213C51] font-medium underline decoration-[#6594B1]"
          >
            <ArrowLeftIcon size={16}/>
            Back
          </Link>
        </div>

        {/* CONTENT SECTION */}
        <div>
          {loading ? (
            <div className="text-[#213C51] font-medium">Loading sessions...</div>
          ) : (
            <>
              {session.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {session.map(sess => (
                    <SessionCard key={sess._id} sess={sess} />
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 bg-white p-8 rounded border border-dashed border-gray-300 text-center">
                  No sessions found yet.
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  )
}

export default HistorySession
