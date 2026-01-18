import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-primary">M</span>
            <span className="text-3xl font-bold text-accent">|</span>
          </div>
          <span className="text-xl font-semibold text-primary">Al-Majd Europe</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-lg border-primary">
                <Menu className="h-5 w-5 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  الرئيسية
                </a>
                <a href="#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  من نحن
                </a>
                <a href="#services" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  خدماتنا
                </a>
                <a href="#register" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  التسجيل
                </a>
                <a href="#faq" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
