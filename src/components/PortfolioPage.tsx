import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Users } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const projects = [
    {
      id: 1,
      title: "Project X Residence",
      category: "Renovation",
      location: "Las Pinas",
      duration: "2024",
      worth: "₱4.2M",
      image: "/Project X/1.jpg",
      description: "A luxurious renovation project completed in 2024, featuring modern design and premium finishes."
    },
    {
      id: 2,
      title: "Project Y Residence",
      category: "Residential",
      location: "K.I",
      duration: "2016",
      worth: "₱2.1M",
      image: "/Project Y/image.png",
      description: "Quality residential project worth ₱2.1M completed in 2016, featuring functional design and durable construction."
    },
    {
      id: 3,
      title: "Projext Z House Renovations",
      category: "Renovation",
      location: "Tandang Sora, QC",
      duration: "2022",
      worth: "₱1.5M",
      image: "/Project Z/image.png",
      description: "Complete renovation of ancestral house worth ₱1.5M, preserving heritage while adding modern amenities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-white">
              OUR TRACK RECORD
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl mb-6 text-white">
              EXPLORE ARCHITECTURAL INNOVATIONS
            </h2>
            <p className="text-xl text-white">
              Explore our completed projects and see how we bring architectural visions to life
              with quality craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-white flex items-center justify-center gap-2">
              <span className="text-primary">←</span>
              OUR PROJECTS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-white">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="mb-2 text-white">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-white mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>

                    <CardDescription className="text-white">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => onNavigate(`project-details-${project.id}`)}
                  >
                    → VIEW DETAILS
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects List */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl mb-8 text-white text-center">Additional Projects & Renovations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">House Renovations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-4')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>SELDA RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-5')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>CRUZ RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-6')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>ALEA RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-7')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>JOSH RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">Residential Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-8')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>SOL RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-9')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>ANYAYAHAN RESIDENCES</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-10')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>ANYAYAHAN RESIDENCES</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-11')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>DELOS REYES RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-12')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>GUSTO-ALDOVINO RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-13')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>WATIWAT RESIDENCE</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">Commercial & Multi-Unit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-14')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>WATIWAT APARTMENT BUILDING</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-15')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>SY OFFICE BUILDING</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                  <div className="flex items-center justify-between text-white hover:bg-gray-600 p-2 rounded cursor-pointer" onClick={() => onNavigate('project-details-16')}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>DUENAS/FLORINDO COMMERCIAL BUILDING</span>
                    </div>
                    <span className="text-primary text-sm">→ VIEW</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-white">Project Statistics</h2>
            <p className="text-white max-w-2xl mx-auto">
              Our track record speaks for itself. Here are some numbers that demonstrate our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-white mb-2">15</div>
              <div className="text-white">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">98%</div>
              <div className="text-white">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">5+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-2">50+</div>
              <div className="text-white">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let's discuss your construction needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
