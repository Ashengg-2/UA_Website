import { Button } from "./ui/button";
import { AnimatedTabs } from "./ui/animated-tabs";
import { Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const activeNavPage = navItems.some((item) => item.id === currentPage)
    ? currentPage
    : "";

  return (
    <header className="relative z-20 bg-black shadow-sm border-b border-gray-800">
      {/* Top Bar */}
      <div className="wood-surface py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>09985762243</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>ua-designs@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            Licensed &amp; Insured • 24/7 Emergency Service
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Logo size="md" />
            </div>
            <div>
              <h1 className="text-xl text-primary">
                UA Designs
              </h1>
              <p className="text-sm text-white">
                PLAN | DESIGN | BUILD
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <AnimatedTabs
              tabs={navItems.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
              activeTab={activeNavPage}
              onTabChange={onNavigate}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            className="md:hidden border-white text-white hover:bg-white hover:text-primary bg-transparent"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            Menu
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden mt-4 pb-4"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={
                  currentPage === item.id ? "default" : "ghost"
                }
                onClick={() => onNavigate(item.id)}
                className={`justify-start ${
                  currentPage === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-white hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
