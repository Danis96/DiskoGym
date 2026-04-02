import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Facilities } from "./components/Facilities";
import { GroupTraining } from "./components/GroupTraining";
import { Membership } from "./components/Membership";
import { Gallery } from "./components/Gallery";
import { Trainers } from "./components/Trainers";
import { Map } from "./components/Map";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { LanguageProvider } from "./LanguageProvider";

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-black min-h-screen">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="facilities">
          <Facilities />
        </div>
        <div id="group-training">
          <GroupTraining />
        </div>
        <div id="membership">
          <Membership />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <Trainers />
        <div id="contact">
          <Map />
        </div>
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
