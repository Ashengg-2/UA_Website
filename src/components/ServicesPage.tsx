import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Hammer, Home, Building, Wrench, Paintbrush, Truck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl mb-6 text-white">
              Comprehensive Construction Services
            </h1>
            <p className="text-xl text-white">
              From residential to commercial projects, we provide complete construction solutions
              with quality craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Residential Construction</CardTitle>
                <CardDescription className="text-white">
                  Custom homes, renovations, and residential projects built to your specifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Custom home building</li>
                  <li>• Home renovations</li>
                  <li>• Room additions</li>
                  <li>• Kitchen remodeling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Commercial Construction</CardTitle>
                <CardDescription className="text-white">
                  Office buildings, retail spaces, and commercial facilities designed for success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Office buildings</li>
                  <li>• Retail spaces</li>
                  <li>• Industrial facilities</li>
                  <li>• Warehouses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Renovation & Remodeling</CardTitle>
                <CardDescription className="text-white">
                  Transform your existing space with our expert renovation and remodeling services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Kitchen remodeling</li>
                  <li>• Bathroom renovations</li>
                  <li>• Basement finishing</li>
                  <li>• Exterior improvements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">General Contracting</CardTitle>
                <CardDescription className="text-white">
                  Complete project management from planning to completion with quality assurance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Project management</li>
                  <li>• Subcontractor coordination</li>
                  <li>• Quality control</li>
                  <li>• Timeline management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Paintbrush className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Interior & Exterior Finishing</CardTitle>
                <CardDescription className="text-white">
                  Professional finishing touches that enhance beauty and functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Painting & staining</li>
                  <li>• Flooring installation</li>
                  <li>• Trim work</li>
                  <li>• Landscaping</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">Emergency Services</CardTitle>
                <CardDescription className="text-white">
                  24/7 emergency construction and repair services when you need them most.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Emergency repairs</li>
                  <li>• Storm damage</li>
                  <li>• Structural issues</li>
                  <li>• 24/7 availability</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's discuss your construction needs.
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
