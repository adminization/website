import { Button } from "@/components/ui/button";
import { Github, Send, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";
import Link from "next/link";
import NpmVersionBadge from "@/components/NpmVersionBadge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Modern Admin Panel for Node.js
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Adminizer is a framework-agnostic, open-source admin panel designed for Node.js with a powerful TypeScript backend and a dynamic React frontend. Build robust dashboards and manage your data with ease.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://demo.adminizer.org/adminizer" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Try Demo
            </Button>
          </Link>
          <Link href="https://docs.adminizer.org/" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
              Documentation
            </Button>
          </Link>
          <Link href="https://github.com/adminization/adminizer" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </Link>
          <Link href="https://t.me/talks_adminizer" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
              <Send className="mr-2 h-5 w-5" />
              Telegram
            </Button>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61575683442665" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
              <Facebook className="mr-2 h-5 w-5" />
              Facebook
            </Button>
          </Link>
        </div>

        {/* NPM version badge */}
        <div className="mt-6 flex justify-center">
          <NpmVersionBadge name="adminizer" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
