import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-md shadow-lg py-10 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-8 md:px-16">
        <div className="flex flex-col gap-5 w-full shadow-md px-6 py-6">
          <h3 className="text-2xl font-semibold">Your Information</h3>
          
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full p-4 text-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full p-4 text-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full p-4 text-lg"
          />

          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full p-4 text-lg h-32"
          ></textarea>

          <button className="btn bg-green-600 text-white text-lg py-3 mt-4 rounded-md hover:bg-green-700 transition-all duration-300">
            Submit
          </button>
        </div>

        <div className="flex flex-col gap-8 justify-center shadow-md px-6">
          <h1 className="text-3xl font-bold">
            Contact <span className="text-[#9538E2]">Us</span>
          </h1>
          <p className="text-lg text-gray-700">
            Feel free to reach out to us for any inquiries or assistance. We&apos;re here to help!
          </p>

          <div className="flex items-center gap-4">
            <p className="btn rounded-full text-white bg-green-700 p-3">
              <FaPhoneAlt />
            </p>
            <p className="text-lg">+123-2457-487</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="btn rounded-full text-white bg-green-700 p-3">
              <MdEmail />
            </p>
            <p className="text-lg">hello@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="btn rounded-full text-white bg-green-700 p-3">
              <FaLocationDot />
            </p>
            <p className="text-lg">90 C.K Road, Mymensingh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
