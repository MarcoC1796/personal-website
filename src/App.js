import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <div>About me</div>,
      },
      {
        path: "software-projects",
        element: <div>Software Projects</div>,
      },
      {
        path: "ai-ml-projects",
        element: <div>Ai & ML projects</div>,
      },
      {
        path: "tech-stack",
        element: <div>Tech Stack</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
