import { Github, MessageCircle, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    description: "Contribute and report issues",
    href: "#",
    gradient: "from-foreground to-muted-foreground"
  },
  {
    icon: MessageCircle,
    name: "Telegram",
    description: "Live chat and support",
    href: "#",
    gradient: "from-accent to-primary"
  },
  {
    icon: Twitter,
    name: "Twitter/X",
    description: "News and updates",
    href: "#",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Facebook,
    name: "Facebook",
    description: "Community discussions",
    href: "#",
    gradient: "from-secondary to-accent"
  }
];

const Community = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of the open-source revolution! Join thousands of developers building the future of admin panels. 
            Your ideas, contributions, and feedback shape Adminizer's evolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${link.gradient} rounded-lg w-fit group-hover:shadow-glow transition-all duration-300`}>
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {link.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-muted-foreground">
                  {link.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            🚀 Start Contributing Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;