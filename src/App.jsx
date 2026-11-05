import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsAndExperience from "./components/SkillsAndExperience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import usePortfolio from "./lib/usePortfolio";

export default function App() {
  const { lang, ui, aboutMe } = usePortfolio();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `Wilder Espinoza | ${lang === "es" ? "Riesgo crediticio y Machine Learning" : "Credit Risk & Machine Learning"}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", aboutMe.intro);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", aboutMe.intro);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
  }, [lang, aboutMe.intro]);
  return (
    <>
      <a className="skip-link" href="#main">{ui.skip}</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <SkillsAndExperience />
        <Education />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
