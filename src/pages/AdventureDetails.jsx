import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

const AdventureDetails = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const data = allData.find((item) => item.id == id);
  const [showModal, setShowModal] = useState(false);

  const handleTalkWithExpert = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center">
          <figure className="w-full h-full">
            <img
              src={data.image}
              alt={data.adventureTitle}
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {data.adventureTitle}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {data.shortDescription}
            </p>

            <div className="space-y-3">
              <p>
                <strong className="font-medium">Location:</strong>{" "}
                <span className="text-gray-700">{data.location}</span>
              </p>
              <p>
                <strong className="font-medium">Duration:</strong>{" "}
                <span className="text-gray-700">{data.duration}</span>
              </p>
              <p>
                <strong className="font-medium">Level:</strong>{" "}
                <span className="text-gray-700">{data.adventureLevel}</span>
              </p>
              <p>
                <strong className="font-medium">Cost:</strong>{" "}
                <span className="text-green-600 font-bold">
                  ${data.adventureCost}
                </span>
              </p>
              <p>
                <strong className="font-medium">Max Group Size:</strong>{" "}
                <span className="text-gray-700">{data.maxGroupSize}</span>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Included Items
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                {data.includedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Eco-Friendly Features
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                {data.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Special Instructions
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                {data.specialInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleTalkWithExpert}
              className={`btn mt-8 w-full py-3 px-5 rounded-lg text-white font-medium text-lg ${
                data.bookingAvailability
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!data.bookingAvailability}
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Consultation Time
            </h2>
            <p className="text-gray-600 mb-6">
              Our experts are available between 10:00 AM and 8:00 PM. Please try
              again during these hours.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventureDetails;