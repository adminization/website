import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickStart = () => {
  const installCommand = "npm install adminizer";
  const basicExample = `import { createAdmin } from 'adminizer';

const admin = createAdmin({
  port: 3000,
  database: './data.db'
});

admin.start();`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Quick Start
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running with Adminizer in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Installation */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                1. Install
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm relative group">
                <code className="text-foreground">{installCommand}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(installCommand)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Basic Example */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                2. Create Admin Panel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs relative group">
                <pre className="text-foreground whitespace-pre-wrap">{basicExample}</pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => copyToClipboard(basicExample)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Play className="mr-2 h-5 w-5" />
            Try Live Demo
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;