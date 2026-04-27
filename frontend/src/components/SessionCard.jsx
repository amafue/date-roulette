import { Link } from 'react-router'
import React from 'react'

const SessionCard = ({sess}) => {
  return (
    <Link to={`/sessions/${sess._id}`} className='card'>
        <div>
            <h3 className='card-title'>{sess.challengeId?.title || "No title"}</h3>
            <p>Together with: {sess.partnerId?.name || "Unknown"}</p>
            <p>{sess.notes}</p>
            <p>{sess.rating}</p>
            <p>{new Date(sess.date).toLocaleDateString()}</p>
            <div className='card-actions'>

            </div>
        </div>
    </Link>
  )
}

export default SessionCard