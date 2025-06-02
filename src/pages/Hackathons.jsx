import React from "react";
import { useNavigate } from "react-router-dom";

const hackathons = [
  {
    id: 1,
    name: "AI Innovation Challenge",
    date: "March 10, 2025",
    description: "Compete in AI-driven challenges and showcase your innovation.",
    image:"https://media.istockphoto.com/id/2148226168/photo/ai-rules-and-law-concept-enforce-to-control-nlp-ai-social-responsibility.jpg?s=612x612&w=0&k=20&c=KQeQsQTEs4rwBdH0qwH9-LQvddy3tOE5LxzSHctnAwI="
  },
  {
    id: 2,
    name: "Web Dev Hackathon",
    date: "April 5, 2025",
    description: "Build modern web applications in a fast-paced competition.",
    image:"https://media.istockphoto.com/id/1370235110/photo/economy-and-growth-on-global-business-network-business-strategy-and-digital-marketing-data.jpg?s=612x612&w=0&k=20&c=d0Utr3F3bSwvyfF9MBRIAmU2oPglPnQTuN-y_g339nU="
  },
  {
    id: 3,
    name: "Blockchain Build",
    date: "May 15, 2025",
    description: "Develop decentralized applications using blockchain technology.",
    image:"https://media.istockphoto.com/id/912613386/photo/concept-of-digital-diagram-graph-interfaces-virtual-screen-connections-icon-on-blurred.jpg?s=612x612&w=0&k=20&c=2cbjFsNS93Q4TRsiXXj1uwb_jo8fO4bmGT0GUrkhU_c="
  }
];

const Register = () => {
  const navigate = useNavigate(); // Fix: Define navigate here ✅

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 pt-8 w-full">
      <div className="text-center w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-primary">Upcoming Hackathons</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Participate in exciting hackathons, build innovative projects, and showcase your skills to the world!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="card bg-base-100 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition duration-300 flex flex-col">
            <img src={hackathon.image} alt={hackathon.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 flex-grow">
              <h3 className="text-2xl font-semibold text-primary">{hackathon.name}</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">📅 {hackathon.date}</p>
              <p className="mt-3 text-gray-700">{hackathon.description}</p>
            </div>
            <button
              className="btn btn-primary m-4 text-lg font-semibold"
              onClick={() => navigate(`/hackathon-register/${hackathon.id}`)} // Fixed ✅
            >
              Register Now 🚀
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Register;
