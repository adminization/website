import { Settings, Zap, Shield, BarChart3, Layers, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Settings,
    title: "Framework-Agnostic",
    description: "Works with any Node.js framework and any ORM."
  },
  {
    icon: Zap,
    title: "Maximum Extensibility",
    description: "Configure your admin panel at runtime without server restarts."
  },
  {
    icon: Layers,
    title: "TMDP Solutions",
    description: "Built-in tools for handling temporary and disposable data."
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Fine-grained permissions and roles for secure data management."
  },
  {
    icon: BarChart3,
    title: "Custom Dashboards",
    description: "Create custom dashboards and data visualizations."
  },
  {
    icon: Code,
    title: "Modern Stack",
    description: "Built with ESM, TypeScript, React, Radix UI, and Tailwind CSS."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build powerful admin panels for modern applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;