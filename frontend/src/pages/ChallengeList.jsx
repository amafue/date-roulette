import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import DeleteChallenge from "../components/DeleteChallenge";
import CustomizeChallenge from '../components/CustomizeChallenge';

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchChallengesList = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/challenges");
      const data = await res.json();
      setChallenges(data);
    } catch (error) {
      console.error("Error fetching challenges", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChallengesList();
  }, []);

  return (
    <div>
      <Link to="/" className="link-btn">
        <ArrowLeftIcon size={12} />
        Back to Home
      </Link>

      {loading && <div>Loading challenges...</div>}

      <div className="grid">
        {challenges.map(chllng => (
          <div key={chllng._id} className="card">
            <h3>{chllng.title}</h3>
            <p>{chllng.description}</p>
            <small>{chllng.category} • {chllng.budget}</small>

            <DeleteChallenge id={chllng._id} />
            <CustomizeChallenge challenge={chllng} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeList;