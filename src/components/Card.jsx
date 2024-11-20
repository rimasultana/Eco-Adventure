/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { image, adventureTitle, ecoFriendlyFeatures, id } =
    data;
  return (
    <div
      data-aos="zoom-in-up"
      className="p-5 shadow-lg rounded-lg bg-white hover:shadow-gray-800 transform hover:bg-green-200 hover:shadow-2xl transition-all w-full"
    >
      <img
        className="w-full h-48 object-cover rounded-md"
        src={image}
        alt={adventureTitle}
      />

      <div className="mt-4 space-y-2">
        <h1 className="text-xl font-bold text-gray-800">{adventureTitle}</h1>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700">
          Eco-Friendly Features:
        </h3>
        <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
          {ecoFriendlyFeatures &&
            ecoFriendlyFeatures.map((eco, index) => <li key={index}>{eco}</li>)}
        </ul>
      </div>

      <Link to={`details/${id}`} className="mt-2 block">
        <button className="w-full py-2 text-white font-semibold bg-green-500 rounded-md hover:bg-green-600 transition">
          Explore Now
        </button>
      </Link>
    </div>
  );
};

export default Card;
