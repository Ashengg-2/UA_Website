import React, { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { ProjectDetailsPage } from "./components/ProjectDetailsPage";
import { ContactPage } from "./components/ContactPage";
import { Toaster } from "./components/ui/sonner";
import { Logo } from "./components/Logo";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleNavigate = (page: string) => {
    // Check for project details navigation
    if (page.startsWith("project-details-")) {
      const id = parseInt(page.replace("project-details-", ""), 10);
      setSelectedProjectId(id);
      setCurrentPage("project-details");
    } else {
      setCurrentPage(page);
    }
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "portfolio":
        return <PortfolioPage onNavigate={handleNavigate} />;
      case "project-details":
        return <ProjectDetailsPage onNavigate={handleNavigate} projectId={selectedProjectId} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo size="sm" />
                <h3 className="text-lg font-semibold">UA Designs</h3>
              </div>
              <p className="text-sm text-primary-foreground mb-4">
                Innovative design and construction solutions.
                Your trusted partner for all building needs.
              </p>
              <p className="text-sm text-primary-foreground">
                Licensed • Insured • Reliable
              </p>
            </div>

            <div>
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground">
                <li>Residential Construction</li>
                <li>Commercial Construction</li>
                <li>Renovation & Remodeling</li>
                <li>General Contracting</li>
                <li>Emergency Services</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground">
                <li>
                  <button
                    onClick={() => handleNavigate("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("portfolio")}
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Get Quote
                  </button>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Careers
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-primary-foreground">
                <p>09985762243</p>
                <p>ua-designs@gmail.com</p>
                <p>
                  Sitio K.I, Poblacion
                  <br />
                  Bongabong, Oriental Mindoro
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary mt-8 pt-8 text-center text-sm text-primary-foreground">
            <p>&copy; 2024 UA Designs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}