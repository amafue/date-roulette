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
    <div>
        {/* FILTERS */}
        <div>
          <select onChange={(e) => setCategory(e.target.value)} className='filter'>
              <option value="">All categories</option>
              <option value="romantic">romantic</option>
              <option value="fun">fun</option>
              <option value="chill">chill</option>
              <option value="competetive">competetive</option>

          </select>

          <select onChange={(e) => setBudget(e.target.value)} className='filter'>
              <option value="">All budgets</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
          </select>
        </div>

        {/* BUTTON */}
        <button className='btn' onClick={getRandomChallenge}>
        {loading ? "Thinking..." : "Click Roulette"}
        </button>

        {/* RESULT CARD */}
        {challenge && (
        <div className='result-card' >
            <h2>{challenge.title}</h2>
            <p>{challenge.description}</p>
            <small>{challenge.category} • {challenge.budget}</small>
        </div>
        )}
    </div>
  )
}

export default ChallengeRoulette