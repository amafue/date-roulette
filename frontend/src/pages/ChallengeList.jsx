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
    <div className="min-h-screen bg-[#DDAED3] p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* BACK LINK */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#213C51] font-medium underline decoration-[#6594B1]"
          >
            <ArrowLeftIcon size={16}/>
            Back to Home
          </Link>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="text-[#213C51] font-medium mb-4">Loading challenges...</div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map(chllng => (
            <div key={chllng._id} className="bg-white border border-[#6594B1] rounded-lg p-5 shadow-sm flex flex-col justify-between">
              
              <div>
                <h3 className="text-[#213C51] font-bold text-lg mb-2">
                  {chllng.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {chllng.description}
                </p>
                <div className="text-[10px] uppercase tracking-wider font-bold text-[#6594B1] mb-4">
                  {chllng.category} • {chllng.budget} Budget
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EEEEEE]">
                <CustomizeChallenge challenge={chllng} />
                <DeleteChallenge id={chllng._id} />
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ChallengeList;