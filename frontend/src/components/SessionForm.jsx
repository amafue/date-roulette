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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* NOTES */}
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">
            Notes
            </label>
            <textarea
            placeholder="Write your thoughts and experiences from this challenge..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] outline-none focus:border-[#6594B1] min-h-[120px] bg-white"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            />
        </div>

        {/* RATING */}
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">
            Rating
            </label>
            <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] bg-white outline-none focus:border-[#6594B1] appearance-none"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            >
            <option value="">Select a rating</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                {n} Stars
                </option>
            ))}
            </select>
        </div>

        {/* DATE */}
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase text-gray-400 tracking-wide">
            Date
            </label>
            <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#213C51] outline-none focus:border-[#6594B1] bg-white"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-4">
            <button
            className="w-full bg-[#213C51] text-[#EEEEEE] py-4 rounded-lg font-bold text-lg hover:bg-[#6594B1] transition-colors disabled:opacity-50 shadow-sm active:scale-[0.98]"
            type="submit"
            disabled={loading}
            >
            {loading ? "Creating..." : "Create Session"}
            </button>
        </div>
    </form>
  )
}

export default SessionForm