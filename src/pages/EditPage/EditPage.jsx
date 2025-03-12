import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

const EditPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [updatedURI, setUpdatedURI] = useState("");

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = () => {
    axios
      .get("http://localhost:5000/portfolios")
      .then((res) => setPortfolios(res.data))
      .catch((err) => console.error("Error fetching portfolios:", err));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this portfolio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/portfolios/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "The portfolio has been removed.", "success");
            setPortfolios(portfolios.filter((portfolio) => portfolio._id !== id));
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the portfolio.", "error");
          });
      }
    });
  };

  const openEditModal = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setUpdatedURI(portfolio.URI);
  };

  const handleUpdate = () => {
    if (!selectedPortfolio) return;
    axios
      .put(`http://localhost:5000/portfolios/${selectedPortfolio._id}`, {
        URI: updatedURI,
      })
      .then(() => {
        Swal.fire("Updated!", "Portfolio URI has been updated.", "success");
        fetchPortfolios();
        setSelectedPortfolio(null);
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to update portfolio.", "error");
      });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Manage Portfolios</h2>
      
      {/* Make the table scrollable on small screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#eff2ff]">
              <th className="border p-2 text-xs sm:text-sm">URI</th>
              <th className="border p-2 text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((portfolio) => (
              <tr key={portfolio._id} className="text-center border">
                <td className="border p-2 text-xs sm:text-sm">{portfolio.URI}</td>
                <td className="p-2 flex justify-center gap-4">
                  <button
                    onClick={() => openEditModal(portfolio)}
                    className="text-[#6878d6] hover:text-blue-800"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(portfolio._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Modal for editing */}
      {selectedPortfolio && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 sm:w-1/3">
            <h3 className="text-lg font-bold mb-4 text-xs sm:text-base">Edit Portfolio URI</h3>
            <input
              type="text"
              value={updatedURI}
              onChange={(e) => setUpdatedURI(e.target.value)}
              className="w-full p-2 border rounded text-xs sm:text-sm"
            />
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setSelectedPortfolio(null)}
                className="px-4 py-2 bg-gray-300 rounded text-xs sm:text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-[#6878d6] hover:bg-blue-800 text-white rounded text-xs sm:text-sm"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPage;
