import { Link } from 'react-router'
import React from 'react'

const SessionCard = ({sess}) => {
  return (
    <Link 
      to={`/sessions/${sess._id}`} 
      className="block bg-white border border-[#6594B1] rounded-lg p-5 shadow-sm hover:bg-[#EEEEEE] transition-colors"
    >
      <div>
        {/* Title */}
        <h3 className="text-[#213C51] font-bold text-lg mb-2">
          {sess.challengeId?.title || "No title"}
        </h3>

        {/* Partner & Notes */}
        <div className="text-sm text-gray-600 space-y-1 mb-4">
          <p className="font-medium text-[#6594B1]">
            Together with: {sess.partnerId?.name || "Unknown"}
          </p>
          <p className="line-clamp-2 italic">
            "{sess.notes}"
          </p>
        </div>

        {/* Footer: Rating and Date */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-xs font-semibold text-[#213C51]">
          <span>Rating: {sess.rating}/5</span>
          <span className="text-gray-400 font-normal">
            {new Date(sess.date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SessionCard