"use client";
import Button from "@/components/ui/button";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white py-6">
      <div className="flex h-6 max-w-7xl flex-col items-center justify-center px-4 sm:px-6 md:h-6 md:flex-row md:justify-between lg:px-8">
        <div className="absolute left-1/2 -translate-x-1/2">
          <p className="mb-2 flex flex-grow items-center text-center text-xs text-black md:mb-0 md:text-center">
            &copy; 2024 Sunshine, Павлодар.
          </p>
        </div>
        <div className="absolute right-0 px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() =>
              window.open("https://github.com/Meirbek-dev/sunshine-store-admin", "_blank")
            }
            className="flex items-center rounded-full bg-black px-3 py-2"
          >
            <Github size={18} color="white" />
            <span className="ml-2 text-sm font-medium text-white">Исходный код</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
