import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SquigglyText } from "../ui/squiggly-text";
import { useEffect } from "react";
import Error from "./Error";

export default function Details() {
  const weather = useSelector((state) => state.weather.data);
  const time = useSelector((state) => state.weather.time);
  const nation = useSelector((state) => state.weather.country);

  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  useEffect(() => {
    if (!weatherData) {
      navigate("/", { replace: true });
    }
  }, [weatherData, navigate]);
  if (!weather || !weather.weather || weather.length === 0) return <Error />;
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-4 md:p-8 text-white font-mono selection:bg-white-500/30">
      <div className="w-full max-w-3xl backdrop-blur-md bg-black/20 rounded-[2.5rem] border border-white/10 p-6 md:p-10 shadow-2xl flex flex-col gap-3 transition-all duration-300 hover:border-white/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-300 font-bold block mb-1">
              Current Location
            </span>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-md">
              {weather.name},{" "}
              <span className="text-blue-300">{nation.toUpperCase()}</span>
            </h1>
          </div>
          <div className="text-left md:text-right">
            <span className="text-sm uppercase tracking-widest text-white/80 mb-1 text-mono">
              {time}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-4 text-center">
          <span className="text-xs uppercase tracking-widest text-white/40 mb-2">
            Current Sky Status
          </span>
          <div className="text-5xl md:text-7xl font-black tracking-wide drop-shadow-lg text-transparent bg-clip-text bg-linear-to-r from-white via-slate-100 to-blue-200">
            {weather.weather[0].main}
          </div>
          <p className="text-lg text-blue-200/90 mt-2 font-medium italic">
            "{capitalizeWords(weather.weather[0].description)}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 font-bold mb-1">
                Humidity
              </p>
              <p className="text-3xl font-black text-white group-hover:text-blue-300 transition-colors">
                {weather.main.humidity}%
              </p>
            </div>
            <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 font-bold mb-1">
                Wind Speed
              </p>
              <p className="text-3xl font-black text-white group-hover:text-blue-300 transition-colors">
                {(weather.wind.speed * 3.6).toFixed(1)}{" "}
                <span className="text-sm font-normal">km/h</span>
              </p>
            </div>
            <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 font-bold mb-1">
                Temperature
              </p>
              <p className="text-3xl font-black text-white group-hover:text-blue-300 transition-colors">
                {Math.floor(weather.main.temp)}°C
              </p>
            </div>
            <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        <div className="flex justify-center pt-4 border-t border-white/10">
          <Link
            to=".."
            className="flex items-center gap-2 border-2 border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 active:scale-95 font-bold tracking-wide shadow-md"
          >
            ← Change Location
          </Link>
        </div>
      </div>
    </div>
  );
}
