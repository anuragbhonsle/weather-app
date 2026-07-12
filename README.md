# 🌦️ Weather App

A modern, responsive weather application built with **React**, **Redux Toolkit**, **Express.js**, and the **OpenWeather API**. Search for any city around the world to view real-time weather conditions with a clean, animated user interface.

## 🚀 Live Demo

- **Frontend:** https://weather-verse-app.vercel.app
- **Backend API:** https://weather-app-qhjh.onrender.com

---

## ✨ Features

- 🔍 Search weather by **City + Country**
- 🌍 Accurate location lookup using the OpenWeather Geocoding API
- 🌡️ Real-time temperature, humidity, and wind speed
- ☁️ Current weather conditions and descriptions
- 🎨 Modern glassmorphism-inspired UI
- 📱 Fully responsive design
- ⚡ Fast React + Vite development experience
- 🔄 Loading and error states
- 🌐 Separate frontend and backend deployment

---

## 🛠️ Tech Stack

### Frontend

- React
- React Router
- Redux Toolkit
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js
- Axios
- CORS
- dotenv

### APIs

- OpenWeather Geocoding API
- OpenWeather Current Weather API

---

## 📂 Project Structure

```text
weather-app/
├── backend/          # Express server
├── public/
├── src/
│   ├── components/
│   ├── store/
│   ├── ui/
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

### Clone the repository

```bash
git clone https://github.com/anuragbhonsle/weather-app.git
cd weather-app
```

### Install frontend dependencies

```bash
npm install
```

### Install backend dependencies

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file inside the `backend` folder.

```env
OPENWEATHER_KEY=your_openweather_api_key
```

### Start the backend

```bash
cd backend
npm start
```

### Start the frontend

```bash
npm run dev
```


---

## 📌 Future Improvements

- 5-day weather forecast
- Search history
- Favorite locations
- Geolocation support
- Weather icons and animations
- Dark/Light mode
- PWA support

---

## 👨‍💻 Author

**Anurag Bhonsle**

- GitHub: https://github.com/anuragbhonsle

---

## 📄 License

This project is open source and available under the MIT License.
