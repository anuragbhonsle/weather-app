import "./App.css";
import Details from "./components/Details";
import Weather from "./components/Weather";
import About from "./components/About";
import Error from "./components/Error";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

// 1. Define the persistent layout with the bottom text link
function RootLayout() {
  const location = useLocation();

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between">
      {/* This renders whichever active child page you are currently visiting (Weather, Details, etc.) */}
      <Outlet />

      {/* Persistent mini button text at the bottom. It hides itself if you are already on the /about page */}
      {location.pathname !== "/about" && (
        <div className="pb-4 text-center z-50">
          <Link
            to="/about"
            className="text-sm uppercase tracking-widest font-mono text-white/45 hover:text-blue-300 transition-colors duration-200 font-bold"
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}

// 2. Set up the nested routing tree
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Weather />,
      },
      {
        path: "weather/:address",
        element: <Details />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  // Pick a random index from 0 to 8
  const number = Math.floor(Math.random() * 8);

  // Define the GIF array
  const bg = [
    "https://i.pinimg.com/originals/09/01/43/0901434384290893f3f67b1065855d60.gif",
    "https://i.pinimg.com/originals/5a/df/17/5adf177d208c14db5a5edf18ab94cb72.gif",
    "https://i.pinimg.com/originals/ec/12/0f/ec120f6c63f9c421e91d59dc81cf6e83.gif",
    "https://i.pinimg.com/originals/65/00/e6/6500e64a964939935b1e42874b35d311.gif",
    "https://i.pinimg.com/originals/eb/ed/a0/ebeda0827ce66b65213dd732a1e59d97.gif",
    "https://i.pinimg.com/originals/11/4c/8f/114c8fe16b2308e4c86e8e81c2affa80.gif",
    "https://i.pinimg.com/originals/89/c4/1b/89c41b5719cee78af952def438761e11.gif",
    "https://i.pinimg.com/originals/b2/58/85/b258854e249c5d4673a5938b90b6bbf5.gif",
  ];

  const selectedBg = bg[number];

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%), url(${selectedBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}
