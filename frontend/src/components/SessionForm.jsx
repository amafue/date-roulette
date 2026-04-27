import React from 'react'

const SessionForm = ({
    notes,
    setNotes,
    rating,
    setRating,
    date,
    setDate,
    loading,
    handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>

        <div className="form-control">
            <label className="label">
                <span className='label-text'>Notes</span>
            </label>
            <textarea
                placeholder='Write your thoughts and experiences from this challenge...'
                className='textarea'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
        </div>

        <div className="form-control">
            <label className="label">
                <span className='label-text'>Rating</span>
            </label>

            <select
                className='filter'
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
            >
                <option value="">none</option>
                {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <option key={n} value={n}>{n}</option>
                ))}
            </select>
        </div>

        <div className="form-control">
            <label className="label">
                <span className='label-text'>Date</span>
            </label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>

        <div className='card-actions'>
            <button className='btn' type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Session"}
            </button>
        </div>

    </form>
  )
}

export default SessionForm