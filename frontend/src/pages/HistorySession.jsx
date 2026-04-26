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
    <div>
      <div>
          <Link to={"/"} className='link-btn'>
            <ArrowLeftIcon  size={12}/>
            Back to Home
          </Link>
      </div>
      <div>
        {loading && <div> Loading sessions... </div> }

        {session.length > 0 && (
          <div className='grid'>
            {session.map(sess=>(
              <SessionCard key={sess._id} sess={sess} />
            ))}

          </div>
        )}
      </div>
    </div>
  )
}

export default HistorySession
