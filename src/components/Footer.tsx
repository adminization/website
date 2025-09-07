import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-gradient-to-t from-card/30 to-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - License */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              Released under the <span className="text-primary font-medium">MIT License</span>
            </p>
          </div>
          
          {/* Center - Logo/Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Adminizer
            </h3>
            <p className="text-sm text-muted-foreground">
              Modern Admin Panel for Node.js
            </p>
          </div>
          
          {/* Right - Support */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 text-muted-foreground">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Donations Only</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Support the project
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adminizer. Built with passion for the Node.js community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;