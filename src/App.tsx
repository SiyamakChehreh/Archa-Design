import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import AboutPage from "./pages/AboutPage";
import ArchitectsPage from "./pages/ArchitectsPage";
import EducationalPage from "./pages/EducationalPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/architects",
        element: <ArchitectsPage />,
      },
      {
        path: "/educational",
        element: <EducationalPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
