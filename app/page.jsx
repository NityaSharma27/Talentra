import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="grid-background"></div>
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerful Features for Your Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">{feature.icon}
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>



      <section className="w-full py-20">
  <div className="container mx-auto px-4">

    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose Talentra?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <Card className="bg-card/80 border rounded-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardContent className="flex flex-col items-center justify-center text-center p-8 h-56">
          <h3 className="text-5xl font-bold">50+</h3>
          <p className="text-xl font-semibold mt-4">
            Career Domains
          </p>
          <p className="text-muted-foreground mt-2">
            Explore opportunities across multiple industries and job roles.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/80 border rounded-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardContent className="flex flex-col items-center justify-center text-center p-8 h-56">
          <h3 className="text-5xl font-bold">100+</h3>
          <p className="text-xl font-semibold mt-4">
            Mock Interview Questions
          </p>
          <p className="text-muted-foreground mt-2">
            Practice AI-generated questions tailored to your role.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/80 border rounded-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardContent className="flex flex-col items-center justify-center text-center p-8 h-56">
          <h3 className="text-5xl font-bold">100%</h3>
          <p className="text-xl font-semibold mt-4">
            Personalized Feedback
          </p>
          <p className="text-muted-foreground mt-2">
            Receive detailed AI insights after every assessment.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/80 border rounded-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardContent className="flex flex-col items-center justify-center text-center p-8 h-56">
          <h3 className="text-5xl font-bold">24/7</h3>
          <p className="text-xl font-semibold mt-4">
            AI Career Support
          </p>
          <p className="text-muted-foreground mt-2">
            Access career guidance and assistance anytime you need.
          </p>
        </CardContent>
      </Card>

    </div>
  </div>
</section>



      <section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
      <p className="text-muted-foreground">
        Just 4 Steps to Reach Your Next Milestone
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {howItWorks.map((item, index) => (
        <Card
          key={index}
          className="bg-card/80 border rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
        >
          <CardContent className="flex flex-col items-center text-center p-8 space-y-5">

            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>

          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>



      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Let’s Clear Your Doubts — The Talentra Way</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
  {faqs.map((faq, index) => (
    <AccordionItem
      key={index}
      value={`item-${index}`}
      className="mb-5 rounded-2xl border bg-card/80 backdrop-blur-sm px-6 transition-all duration-300 hover:border-primary hover:shadow-xl"
    >
      <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
        {faq.question}
      </AccordionTrigger>

      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
          </div>
        </div>
      </section>



   <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="mx-auto py-24 rounded-lg">
    <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl">
        Gear up to fast-track your career!
      </h2>
      <p className="mx-auto max-w-[600px] text-primary-foreground/100 md:text-xl text-white/90">
        Discover the smarter way to grow — just like thousands of professionals already have.
      </p>

      <Link href="/dashboard" passHref>
      <Button size="lg"
      variant="secondary"
      className="h-11 mt-5 animate-bounce">Start Your Journey Today<ArrowRight className="ml-2 h-4 w-4"/>
        </Button></Link>
    </div>
  </div>
</section>





    </div>
  );
}
