import { useNavigate } from "react-router-dom";
import { SquigglyText } from "../ui/squiggly-text";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-white font-mono selection:bg-blue-500/30">
      <div className="mb-6 text-center drop-shadow-lg animate-pulse [animation-duration:4s]">
        <h1 className="text-4xl font-black tracking-tight mb-1">
          <SquigglyText scale={[2, 4]}>About</SquigglyText>
        </h1>
      </div>

      <div className="w-full max-w-2xl backdrop-blur-md bg-black/25 rounded-4xl border border-white/10 p-4 shadow-2xl flex flex-col gap-6 text-center">
        <div className="space-y-2 text-center">
          <p className="text-sm md:text-xl font-medium text-white/90 leading-relaxed max-w-6xl mx-auto">
            Hey! I'm Anurag, a full-stack web developer passionate about
            building fast, modern, and interactive web applications. I work with
            React, Node.js, Express, PostgreSQL, Prisma, and Tailwind CSS to
            create responsive interfaces backed by reliable and scalable APIs.
            <br />
            <br />
            This weather app uses real-time weather data from OpenWeatherMap and
            geocoding powered by OpenStreetMap to deliver accurate
            location-based forecasts. It's built with a strong focus on
            performance, clean UI, and user privacy—no personal data is stored.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href="https://github.com/anuragbhonsle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 rounded-full border border-white/10 bg-white/5 font-bold hover:bg-white hover:text-black transition-all duration-200 active:scale-98 text-sm"
          >
            GitHub ↗
          </a>
          <a
            href="https://x.com/Anuraaaag7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 rounded-full border border-white/10 bg-white/5 font-bold hover:bg-white hover:text-black transition-all duration-200 active:scale-98 text-sm"
          >
            X (Twitter) ↗
          </a>
        </div>

        {/* Back Button Action */}
        <button
          onClick={() => navigate(-1)} // 👈 Goes back to whatever route they came from
          className="mt-2 text-xs uppercase tracking-widest text-white/40 hover:text-blue-300 font-bold transition-colors duration-200"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}
