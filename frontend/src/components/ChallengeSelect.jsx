import React from 'react'

const ChallengeSelect = ({ challenges, value, onChange }) => {
  return (
    <div className="form-control">
        <label className="label">
            <span className='label-text'>Choose a Challenge</span>
        </label>

        <select
            className='input'
            value={value} 
            onChange={onChange} 
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
  )
}

export default ChallengeSelect