import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "../src/store/index.tsx";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import Footer from "./components/Footer.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ArchitectsPage from "./pages/ArchitectsPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import EducationalPage from "./pages/EducationalPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <AboutPage />
      <ArchitectsPage />
      <ProjectsPage />
      <EducationalPage />
      <Footer />
    </Provider>
  </StrictMode>
);
