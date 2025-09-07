import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const frameworks = [
  { name: "Next.js", src: "/icons/nextjs.svg" },
  { name: "Nuxt", src: "/icons/nuxt.svg" },
  { name: "Express", src: "/icons/express.svg" },
  { name: "Fastify", src: "/icons/fastify.svg" },
  { name: "Koa", src: "/icons/koa.svg" },
  { name: "NestJS", src: "/icons/nestjs.svg" },
  { name: "Hapi", src: "/icons/hapi.svg" },
  { name: "Astro", src: "/icons/astro.svg" }
];

const ormFeatures = [
  {
    title: "Any ORM",
    description: "Prisma, TypeORM, Sequelize, Mongoose, and more",
  },
  {
    title: "Multiple ORMs",
    description: "Combine different ORMs in one project",
  },
  {
    title: "Granular permissions",
    description: "Control access to specific model fields",
  },
];

const Compatibility = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Universal Compatibility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Adminizer works with any Node.js frameworks and ORMs. Perfect for kickstarting your new app, site, and backend where you need an admin panel.
          </p>
        </div>
        
        {/* Frameworks */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Compatible with all JS/TS frameworks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {frameworks.map((framework, index) => (
              <Card
                key={index}
                className="text-center p-4 hover:shadow-card transition-all duration-300 border-border/60 hover:border-secondary/40 bg-secondary/10 dark:bg-secondary/20"
              >
                <div className="mb-2 flex items-center justify-center min-h-10">
                  <img
                    src={framework.src}
                    alt={`${framework.name} logo`}
                    className="h-10 w-auto max-w-[120px] object-contain opacity-95 mx-auto"
                  />
                </div>
                <div className="text-sm font-medium text-foreground">{framework.name}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* ORM Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ormFeatures.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gradient-primary rounded-lg shadow-glow">
            <p className="text-primary-foreground font-semibold text-lg">🚀 Start building in minutes!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compatibility;
