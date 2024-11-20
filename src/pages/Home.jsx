import Banner from "../components/Banner";
import Card from "../components/Card";
import AOS from "aos";
import LoadingSpinner from "../components/Loading";
import { useEffect, useState } from "react";
import { ExtraSection1 } from "../components/ExtraSection1";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("adventure.json")
      .then((res) => res.json())
      .then((data) => setData(data));
    setLoading(false);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <Banner />
      <div className="bg-gray-50 p-8">
        <div data-aos="fade-right" className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-green-600">
            Discover Your Next Adventure
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore breathtaking destinations, experience sustainable tourism,
            and create unforgettable memories. Start your journey with our
            eco-friendly adventures today.
          </p>
        </div>

        {!loading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
     
    </div>
  );
};

export default Home;
