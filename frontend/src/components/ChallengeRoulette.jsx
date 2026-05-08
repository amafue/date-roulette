import React , { useState }from 'react'

const ChallengeRoulette = () => {
    const [challenge, setChallenge] = useState(null);
    const [category, setCategory] = useState("");
    const [budget, setBudget] = useState("");
    const [loading, setLoading] = useState(false);

  const getRandomChallenge = async () => {
    try {
      setLoading(true);

      const url = `http://localhost:5001/challenges/random?category=${category}&budget=${budget}`;
      const res = await fetch(url)
      const data = await res.json();

      setChallenge(data);
    } catch (error) {
      console.error("Error fetching idea", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-[#EEEEEE] flex flex-col items-center p-8">
    
      {/* FILTERS */}
      <div className="flex gap-4 mb-8">
        <select 
          onChange={(e) => setCategory(e.target.value)} 
          className="bg-white border border-[#6594B1] text-[#213C51] rounded-lg px-4 py-2 focus:outline-none "
        >
          <option value="">All categories</option>
          <option value="romantic">Romantic</option>
          <option value="fun">Fun</option>
          <option value="chill">Chill</option>
          <option value="competitive">Competitive</option>
        </select>

        <select 
          onChange={(e) => setBudget(e.target.value)} 
          className="bg-white border border-[#6594B1] text-[#213C51] rounded-lg px-4 py-2 focus:outline-none"
        >
          <option value="">All budgets</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* BUTTON */}
      <button 
        className="bg-[#213C51] text-[#DDAED3] px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-[#6594B1] active:scale-95 transition-all mb-10"
        onClick={getRandomChallenge}
      >
        {loading ? "Thinking..." : "Spin Roulette"}
      </button>

      {/* RESULT CARD */}
      {challenge && (
        <div className="bg-white border-t-4 border-[#DDAED3] rounded-xl p-6 shadow-xl max-w-md w-full text-center animate-in fade-in zoom-in duration-300">
          <h2 className="text-2xl font-bold text-[#213C51] mb-2">{challenge.title}</h2>
          <p className="text-gray-600 mb-4">{challenge.description}</p>
          <div className="flex justify-center gap-2">
            <span className="bg-[#EEEEEE] text-[#213C51] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {challenge.category}
            </span>
            <span className="bg-[#DDAED3] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {challenge.budget} budget
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChallengeRoulette