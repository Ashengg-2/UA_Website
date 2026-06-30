import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Timeline, type TimelineItem } from "./ui/modern-timeline";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Zap,
} from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const companyTimeline: TimelineItem[] = [
  {
    title: "UA Designs Founded",
    description:
      "Engineer King Christian Uy and Architect Mary Claire Anyayahan-Uy establish UA Designs with a shared vision to deliver exceptional architectural and construction solutions.",
    date: "2021",
    category: "Foundation",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=150&fit=crop",
    status: "completed",
  },
  {
    title: "First Residential Projects",
    description:
      "Completed early residential builds across Oriental Mindoro, establishing a reputation for quality craftsmanship and on-time delivery.",
    date: "2022",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=150&h=150&fit=crop",
    status: "completed",
  },
  {
    title: "Commercial & Multi-Unit Expansion",
    description:
      "Expanded into commercial construction and multi-unit developments including apartment buildings and office projects.",
    date: "2023",
    category: "Growth",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=150&h=150&fit=crop",
    status: "completed",
  },
  {
    title: "15+ Projects Milestone",
    description:
      "Surpassed 15 completed projects with 100% customer satisfaction, serving clients across Luzon and Mindoro.",
    date: "2024",
    category: "Milestone",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=150&h=150&fit=crop",
    status: "completed",
  },
  {
    title: "Design-Build Innovation",
    description:
      "Integrating architectural design and engineering under one roof to simplify the building process for clients.",
    date: "2025",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=150&h=150&fit=crop",
    status: "current",
  },
  {
    title: "Sustainable Built Environments",
    description:
      "Committed to creating iconic, sustainable spaces that inspire communities and elevate everyday living.",
    date: "2026",
    category: "Vision",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop",
    status: "upcoming",
  },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">About UA Designs</Badge>
            <h1 className="text-4xl md:text-5xl mb-6 text-white">
              Building Excellence Since 2021
            </h1>
            <p className="text-xl text-white">
              For the past 5 years, UA Designs has been the
              trusted partner for homeowners and businesses
              seeking quality construction services. Our
              commitment to excellence and customer satisfaction
              has made us a leader in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-white">Our Story</h2>
              <p className="text-white mb-6">
                Founded by Engineer King Christian Uy and
                Architect Mary Claire Anyayahan-Uy, UA Designs
                started with a shared vision to create
                exceptional architectural and construction
                solutions. Combining engineering expertise with
                architectural innovation, they established a
                company dedicated to bringing creative designs
                to life with technical precision.
              </p>
              <p className="text-white mb-6">
                Our unique partnership between engineering and
                architecture allows us to approach every project
                with both aesthetic vision and structural
                integrity. This collaborative foundation has
                enabled us to deliver outstanding results across
                residential, commercial, and specialized
                construction projects.
              </p>
              <p className="text-white mb-8">
                Today, UA Designs continues to uphold the
                founding principles of innovation, quality, and
                client satisfaction. Every project we undertake
                reflects our commitment to excellence and our
                passion for transforming ideas into remarkable
                built environments.
              </p>
              <Button onClick={() => onNavigate("contact")}>
                Work With Us
              </Button>
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-900/60">
              <ImageWithFallback
                src="/images/about/ua-designs-sign.png"
                alt="UA Designs wall sign with PLAN | DESIGN | BUILD tagline"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4 text-white">Our Journey</h2>
            <p className="text-white max-w-2xl mx-auto">
              From a shared vision in 2021 to 15+ completed projects — follow the milestones
              that shaped UA Designs.
            </p>
          </div>
          <Timeline items={companyTimeline} />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl mb-6 text-white">Our Vision</h2>
              <div className="space-y-4 text-white">
                <p className="text-lg">
                  To be the leading design & build company that transform ideas into iconic sustainable spaces
                </p>
                <p className="text-lg">
                  To redefine the built environment by creating innovative sustainable and timeless spaces that inspire communities and elevated everyday living
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="text-3xl mb-6 text-white">Our Mission</h2>
              <div className="space-y-4 text-white">
                <p className="text-lg">
                  Our mission is to simplify the building process by integrating innovative design quality craftmanship, and efficient project management.
                </p>
                <p className="text-lg">
                  We are commited to deliver exceptional architectural design-build solutions that harmonize creativity, functionality and sustainabilty.
                </p>
                <p className="text-lg">
                  We are commited to transforming visions into reality by leveraging our experties, postering strong client relationship and ensuring quality efficiency and value in every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-white">Our Core Values</h2>
            <p className="text-white max-w-2xl mx-auto">
              These values guide everything we do and shape how
              we approach every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Integrity</CardTitle>
                <CardDescription className="text-white">
                  We conduct business with honesty,
                  transparency, and ethical practices in all our
                  dealings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Excellence</CardTitle>
                <CardDescription className="text-white">
                  We strive for perfection in every aspect of
                  our work, from planning to final delivery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Customer Focus</CardTitle>
                <CardDescription className="text-white">
                  Our clients' satisfaction and success are at
                  the heart of everything we do.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Innovation</CardTitle>
                <CardDescription className="text-white">
                  We embrace new technologies and methods to
                  deliver better results for our clients.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Reliability</CardTitle>
                <CardDescription className="text-white">
                  We deliver on our promises and commitments,
                  ensuring projects are completed on time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Teamwork</CardTitle>
                <CardDescription className="text-white">
                  We believe in collaboration and the power of
                  working together towards common goals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-white">
              Our Leadership Team
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Meet the experienced professionals who lead our
              company and ensure the highest quality in every
              project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="interactive-card h-full">
              <CardHeader className="text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Engineer King Christian Uy"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-white">Engineer King Christian Uy</CardTitle>
                <CardDescription className="text-white">
                  Co-Founder &amp; Chief Engineer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white">
                  Engineer King Christian Uy brings extensive engineering expertise 
                  to UA Designs. His technical knowledge and innovative approach 
                  ensure every project meets the highest standards of structural 
                  integrity and safety.
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card h-full">
              <CardHeader className="text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face"
                  alt="Architect Mary Claire Anyayahan-Uy"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-white">Architect Mary Claire Anyayahan-Uy</CardTitle>
                <CardDescription className="text-white">
                  Co-Founder &amp; Chief Architect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white">
                  Architect Mary Claire Anyayahan-Uy leads our design vision with 
                  creativity and precision. Her architectural expertise and attention 
                  to detail bring innovative designs to life while maintaining 
                  functionality and aesthetic appeal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wood-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 wood-subtitle max-w-2xl mx-auto">
            Experience the UA Designs difference. Contact us
            today to discuss your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate("contact")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              onClick={() => onNavigate("portfolio")}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}