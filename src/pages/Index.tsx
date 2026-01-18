import { useState, useEffect } from "react";
import Header from "@/components/Header";
import AnnouncementModal from "@/components/AnnouncementModal";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <AnnouncementModal 
        isOpen={showAnnouncement} 
        onClose={() => setShowAnnouncement(false)} 
      />

      <main>
        <HeroSection />
        <AboutSection />
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
