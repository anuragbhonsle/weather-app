import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { weatherActions } from "../store/store";
import { SquigglyText } from "../ui/squiggly-text";
import { errorActions } from "../store/store";

export default function Weather() {
  const city = useSelector((state) => state.weather.city);
  const country = useSelector((state) => state.weather.country);
  const errorState = useSelector((state) => state.error);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function checkWeather() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://weather-app-qhjh.onrender.com/weather?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}`,
      );
      if (!response.ok) throw new Error("Invalid City or Country");
      const data = await response.json();
      dispatch(weatherActions.addWeatherData(data));
      setLoading(false);
      navigate(`/weather/${encodeURIComponent(city.trim())}`);
    } catch (error) {
      dispatch(errorActions.setError({ error: true, message: error.message }));
      navigate("/error");
      console.error("Failed fetching weather data:", error.message);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const timeString = new Date().toLocaleTimeString();
      const dateString = new Date().toLocaleDateString();
      dispatch(weatherActions.addTime(`${dateString} ${timeString}`));
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
      <div className="flex-1 w-full flex flex-col items-center justify-center text-white text-shadow-gray-950 text-2xl font-extrabold flex-wrap">
        <h1 className="flex justify-center text-center px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          <SquigglyText scale={[2, 6]}>Weather Verse</SquigglyText>
        </h1>

        <div className="flex flex-row m-2 p-2 items-center justify-center gap-4 flex-wrap">
          <div className="hidden sm:flex flex-col justify-center gap-1 flex-wrap">
            <label
              className="text-2xl font-bold py-2 m-1 hover:text-blue-300 font-mono transition-colors duration-200 h-15 flex items-center"
              htmlFor="city"
            >
              <SquigglyText scale={[2, 4]}>City</SquigglyText>
            </label>
            <label
              className="text-2xl font-bold py-2 m-1 hover:text-blue-300 font-mono transition-colors duration-200 h-15 flex items-center"
              htmlFor="country"
            >
              <SquigglyText scale={[2, 4]}>Country</SquigglyText>
            </label>
          </div>

          <div className="flex flex-col gap-1 flex-wrap sm-text-sm lg:text-lg xs:text-xs">
            <input
              id="city"
              className="xs:text-xs sm:text-sm lg:text-lg rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm placeholder:text-white/30 text-white outline-none hover:scale-102 hover:border-white/40 focus:border-blue-400 focus:bg-white/15 transition-all duration-200 py-2 m-1 w-80 font-bold font-mono p-4 h-15"
              type="text"
              placeholder="e.g. Paris"
              value={city}
              onChange={(e) => dispatch(weatherActions.addCity(e.target.value))}
              required
            />
            <input
              id="country"
              className="xs:text-xs sm:text-sm lg:text-lg rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm placeholder:text-white/30 text-white outline-none hover:scale-102 hover:border-white/40 focus:border-blue-400 focus:bg-white/15 transition-all duration-200 py-2 m-1 w-80 font-bold font-mono p-4 h-15"
              type="text"
              placeholder="e.g. France"
              value={country}
              onChange={(e) =>
                dispatch(weatherActions.addCountry(e.target.value))
              }
              required
            />
          </div>

          <div className="flex flex-col justify-center">
            <button
              onClick={checkWeather}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white h-18 w-24 rounded-full hover:scale-105 hover:border-blue-400 hover:bg-white hover:text-black transition-all duration-200 active:scale-95 text-xl font-black font-mono shadow-lg"
            >
              Check
            </button>
          </div>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
