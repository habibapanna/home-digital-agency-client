import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// const services = [
//     { title: "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio1.jpg" },
//     { title: "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio2.jpg" },
//     {title: "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio3.jpg" },
//     {title: "https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio4-1.jpg" },
   
//   ];

const Portfolio = () => {
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios.get("https://home-digital-agency-server.vercel.app/portfolios") // Fetch portfolios from backend
      .then((response) => setPortfolios(response.data))
      .catch((error) => console.error("Error fetching portfolios:", error));
  }, []);

  const handleClick = () => {
    if (window.location.pathname === "/") {
      // If already on home, animate scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home if not on home page
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // Ensures scroll happens after navigation
    }
  };
  return (
    <div className="py-12 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#242a56]">Portfolio</h1>
        <p className="text-gray-700 mt-5 px-4 md:text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.​
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-6">
        {portfolios.map((portfolio, index) => (
          <div key={index}>
            <img src={portfolio.URI} alt={`Portfolio ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>

      <div className="w-full text-center mt-10">
        <button onClick={handleClick} className="rounded py-3 text-white px-10 bg-[#6878d6] hover:bg-blue-800">
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Portfolio;