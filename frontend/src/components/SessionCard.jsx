import { Link } from 'react-router'
import React from 'react'

const SessionCard = ({sess}) => {
  return (
    <Link to={`/sessions/${sess._id}`} className='card'>
        <div>
            <h3 className='card-title'>{sess.challengeName}</h3>
            <p>{sess.notes}</p>
            <p>{sess.rating}</p>
            <p>{sess.date}</p>
            <div className='card-actions'>

            </div>
        </div>
    </Link>
  )
}

export default SessionCard