const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;

app.get("/weather", async (req, res) => {
  try {
    const { city, country } = req.query;

    if (!city || !country) {
      return res.status(400).json({
        error: "City and Country required.",
      });
    }

    const geoRes = await axios.get(
      "https://api.openweathermap.org/geo/1.0/direct",
      {
        params: {
          q: `${city},${country}`,
          limit: 1,
          appid: OPENWEATHER_KEY,
        },
      },
    );

    if (!geoRes.data.length) {
      return res.status(404).json({
        error: "Location not found",
      });
    }

    const { lat, lon } = geoRes.data[0];

    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      { params: { lat, lon, appid: OPENWEATHER_KEY, units: "metric" } },
    );

    res.json(weatherRes.data);
  } catch (err) {
    console.error("Status:", err.response?.status);
    console.error("URL:", err.config?.url);
    console.error("Data:", err.response?.data);

    res.status(500).json({
      error: "Server error",
    });
  }
});

app.listen(5000, () => {
  console.log("App is ruinning");
});
