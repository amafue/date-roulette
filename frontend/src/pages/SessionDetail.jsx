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
    <div>
      <div className='container'>
          <Link to={"/sessions"} className='link-btn'>
            <ArrowLeftIcon  size={12}/>
            Back to History
          </Link>
        </div>

          <div className='card'>
          {session && (
            <div >
                <h2>{session.challengeId?.title}</h2>
                <p>{session.notes}</p>
                <small>{session.rating} • {new Date(session.date).toLocaleDateString()}</small>
            </div>
          )}
          </div>

    </div>
  )
}

export default SessionDetail