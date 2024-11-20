import { useLoaderData, useParams } from "react-router-dom";

const AdventureDetails = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const data = allData.find((item) => item.id == id);

  return (
    <div className=" p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Image Section */}
          <figure className="w-full h-full">
            <img
              src={data.image}
              alt={data.adventureTitle}
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Details Section */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {data.adventureTitle}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {data.shortDescription}
            </p>

            {/* Key Information */}
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

            {/* Included Items */}
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

            {/* Eco-Friendly Features */}
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

            {/* Special Instructions */}
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

            {/* Booking Button */}
            <button
              className={`btn mt-8 w-full py-3 px-5 rounded-lg text-white font-medium text-lg ${
                data.bookingAvailability
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!data.bookingAvailability}
            >
              {data.bookingAvailability ? "Book Now" : "Fully Booked"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
