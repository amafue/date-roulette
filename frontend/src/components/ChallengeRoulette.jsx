import React , { useState }from 'react'


const ChallengeRoulette = () => {
    const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomChallenge = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5001/challenges/random");
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
      <button onClick={getRandomChallenge}>
        {loading ? "Loading..." : "Surprise Me"}
      </button>

      {challenge && (
        <div>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
        </div>
      )}
    </div>
  )
}

export default ChallengeRoulette