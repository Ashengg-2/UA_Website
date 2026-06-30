import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';
import { CheckCircle, Users, Award, Clock, Hammer, Home, Building } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative wood-surface wood-surface--hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Logo size="lg" className="text-white" />
              <Badge className="!bg-white !text-primary border-white/30">5+ Years of Excellence</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Building Your Dreams with Quality &amp; Precision
            </h1>
            <p className="text-xl mb-8 wood-subtitle">
              From residential homes to commercial buildings, we deliver exceptional construction services 
              that stand the test of time. Your vision, our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent" onClick={() => onNavigate('portfolio')}>
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-white mb-2">15</div>
              <div className="text-white">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">5+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">100%</div>
              <div className="text-white">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">50+</div>
              <div className="text-white">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-white">Our Construction Services</h2>
            <p className="text-white max-w-2xl mx-auto">
              We offer comprehensive construction solutions for all your building needs, 
              from planning to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Residential Construction</CardTitle>
                <CardDescription className="text-white">
                  Custom homes, renovations, and residential projects built to your specifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Commercial Construction</CardTitle>
                <CardDescription className="text-white">
                  Office buildings, retail spaces, and commercial facilities designed for success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="interactive-card h-full text-center">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Renovation &amp; Remodeling</CardTitle>
                <CardDescription className="text-white">
                  Transform your existing space with our expert renovation and remodeling services.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => onNavigate('services')}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-white">Why Choose UA Designs?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1 text-white">Licensed &amp; Insured</h3>
                    <p className="text-white">Fully licensed contractors with comprehensive insurance coverage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1 text-white">Quality Workmanship</h3>
                    <p className="text-white">Exceptional attention to detail and superior craftsmanship in every project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1 text-white">On-Time Delivery</h3>
                    <p className="text-white">We respect your timeline and deliver projects on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1 text-white">Competitive Pricing</h3>
                    <p className="text-white">Fair, transparent pricing with no hidden costs or surprises.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="/modern-home1.png"
                alt="Modern home construction"
                className="rounded-lg object-cover w-full h-48"
              />
              <ImageWithFallback
                src="/modern-home2.png"
                alt="Modern home design"
                className="rounded-lg object-cover w-full h-48 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wood-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 wood-subtitle max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your construction vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
              Call 09985762243
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}