import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, DollarSign, ArrowLeft, Clock, Award } from 'lucide-react';

interface ProjectDetailsPageProps {
  onNavigate: (page: string) => void;
  projectId?: number | null;
}

interface ProjectFeature {
  title: string;
  desc: string;
}

interface ProjectStat {
  label: string;
  value: string;
}

interface ProjectData {
  title: string;
  image?: string;
  images?: string[];
  location: string;
  year: string;
  worth: string;
  duration: string;
  category: string;
  description: string;
  overview: string[];
  features: ProjectFeature[];
  stats: ProjectStat[];
  services: string[];
}

interface ProjectDetailsData {
  [key: number]: ProjectData;
}

const projectDetailsData: ProjectDetailsData = {
  1: {
    title: 'Project X Residence',
    images: [
      '/Project X/1.jpg',
      '/Project X/2.png',
      '/Project X/3.png',
      '/Project X/4.png',
      '/Project X/5.png'
    ],
    location: 'Las Pinas',
    year: '2024',
    worth: '₱4.2M',
    duration: '2 months',
    category: 'Renovation',
    description: 'A practical renovation project that optimized the existing space by adding rooms and improving functionality.',
    overview: [
      'This renovation project focused on maximizing the available space in an existing residence in Las Pinas.',
      'The main changes included renovating 2 existing rooms and creating an additional room by dividing the living room in half.',
      'The project also included a complete repainting of the interior to refresh the overall appearance.'
    ],
    features: [
      { title: 'Room Renovations', desc: 'Updated 2 existing rooms with modern finishes' },
      { title: 'Space Optimization', desc: 'Divided living room to create additional room' },
      { title: 'Interior Painting', desc: 'Complete repainting for fresh appearance' },
      { title: 'Layout Improvement', desc: 'Better space utilization and flow' }
    ],
    stats: [
      { label: 'Duration', value: '2 months' },
      { label: 'Team Size', value: '8 members' },
      { label: 'Category', value: 'Renovation' }
    ],
    services: [
      'Room Renovation',
      'Space Division',
      'Interior Painting',
      'Layout Planning'
    ]
  },
  2: {
    title: 'Project Y Residence',
    images: [
      '/Project Y/image.png',
      '/Project Y/image copy.png',
      '/Project Y/image copy 2.png',
      '/Project Y/image copy 3.png',
      '/Project Y/image copy 4.png',
      '/Project Y/image copy 5.png',
      '/Project Y/image copy 6.png',
      '/Project Y/image copy 7.png',
      '/Project Y/image copy 8.png',
      '/Project Y/image copy 9.png'
    ],
    location: 'K.I',
    year: '2016',
    worth: '₱2.1M',
    duration: '8 months',
    category: 'Residential',
    description: 'A quality residential project completed in 2016, featuring functional design and durable construction.',
    overview: [
      'Project Y Residence is a modern home built in K.I, designed for comfort and efficiency.',
      'The project included open-plan living spaces, energy-efficient features, and a focus on family-friendly design.',
      'Completed on time and within budget, this home is a testament to our commitment to quality.'
    ],
    features: [
      { title: 'Open Concept Living', desc: 'Spacious and flexible living areas' },
      { title: 'Energy Efficient', desc: 'Insulated walls and windows' },
      { title: 'Family Friendly', desc: 'Safe and functional for all ages' },
      { title: 'Modern Finishes', desc: 'Contemporary materials and fixtures' }
    ],
    stats: [
      { label: 'Duration', value: '8 months' },
      { label: 'Team Size', value: '6 members' },
      { label: 'Category', value: 'Residential' }
    ],
    services: [
      'Architectural Design',
      'Construction',
      'Interior Finishing'
    ]
  },
  3: {
    title: 'Project Z House Renovations',
    images: [
      '/Project Z/image.png',
      '/Project Z/image copy.png',
      '/Project Z/image copy 2.png',
      '/Project Z/image copy 3.png',
      '/Project Z/image copy 4.png',
      '/Project Z/image copy 5.png',
      '/Project Z/image copy 6.png',
      '/Project Z/image copy 7.png'
    ],
    location: 'Tandang Sora, QC',
    year: '2022',
    worth: '₱1.5M',
    duration: '4 months',
    category: 'Renovation',
    description: 'Complete renovation of an ancestral house, preserving heritage while adding modern amenities.',
    overview: [
      'Project Z involved the careful renovation of an ancestral house in Tandang Sora, QC.',
      'The goal was to preserve the original character while updating the home for modern living.',
      'Upgrades included structural reinforcement, new bathrooms, and restoration of heritage features.'
    ],
    features: [
      { title: 'Heritage Restoration', desc: 'Preserved original woodwork and details' },
      { title: 'Modern Amenities', desc: 'Added air conditioning, new bathrooms' },
      { title: 'Structural Upgrades', desc: 'Foundation and roof improvements' },
      { title: 'Landscaping', desc: 'Refreshed outdoor spaces' }
    ],
    stats: [
      { label: 'Duration', value: '4 months' },
      { label: 'Team Size', value: '7 members' },
      { label: 'Category', value: 'Renovation' }
    ],
    services: [
      'Heritage Restoration',
      'Structural Upgrades',
      'Bathroom Renovation',
      'Landscaping'
    ]
  },
  4: {
    title: 'Selda Residence',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    location: 'Bongabong, Oriental Mindoro',
    year: '2023',
    worth: '₱3.8M',
    duration: '6 months',
    category: 'Renovation',
    description: 'Comprehensive renovation of the Selda family residence, transforming it into a modern, comfortable home.',
    overview: [
      'The Selda Residence renovation project focused on modernizing an existing family home while maintaining its character.',
      'Key improvements included kitchen modernization, bathroom upgrades, and enhanced living spaces.',
      'The project also included exterior improvements and landscaping to create a cohesive design.'
    ],
    features: [
      { title: 'Kitchen Modernization', desc: 'Updated with modern appliances and finishes' },
      { title: 'Bathroom Upgrades', desc: 'New fixtures and contemporary design' },
      { title: 'Living Space Enhancement', desc: 'Improved flow and functionality' },
      { title: 'Exterior Improvements', desc: 'Updated facade and landscaping' }
    ],
    stats: [
      { label: 'Duration', value: '6 months' },
      { label: 'Team Size', value: '10 members' },
      { label: 'Category', value: 'Renovation' }
    ],
    services: [
      'Kitchen Renovation',
      'Bathroom Upgrades',
      'Interior Design',
      'Landscaping'
    ]
  },
  5: {
    title: 'Cruz Residence',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
    location: 'Roxas, Oriental Mindoro',
    year: '2022',
    worth: '₱2.5M',
    duration: '5 months',
    category: 'Renovation',
    description: 'Complete renovation of the Cruz family home, creating a modern and functional living space.',
    overview: [
      'The Cruz Residence project involved a complete transformation of an older home into a contemporary living space.',
      'The renovation included structural improvements, new electrical and plumbing systems, and modern interior finishes.',
      'Special attention was paid to creating open, light-filled spaces that work well for family living.'
    ],
    features: [
      { title: 'Structural Improvements', desc: 'Enhanced foundation and load-bearing elements' },
      { title: 'Modern Systems', desc: 'Updated electrical and plumbing infrastructure' },
      { title: 'Open Floor Plan', desc: 'Removed walls for better flow and light' },
      { title: 'Contemporary Finishes', desc: 'Modern materials and design elements' }
    ],
    stats: [
      { label: 'Duration', value: '5 months' },
      { label: 'Team Size', value: '8 members' },
      { label: 'Category', value: 'Renovation' }
    ],
    services: [
      'Structural Renovation',
      'Electrical Upgrades',
      'Plumbing Installation',
      'Interior Finishing'
    ]
  },
  6: {
    title: 'Alea Residence',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    location: 'Calapan, Oriental Mindoro',
    year: '2023',
    worth: '₱4.5M',
    duration: '7 months',
    category: 'Residential',
    description: 'New construction of a modern family home for the Alea family, featuring contemporary design and quality craftsmanship.',
    overview: [
      'The Alea Residence is a newly constructed modern home designed for a growing family.',
      'The project features an open-concept design with high-quality materials and energy-efficient features.',
      'The home includes smart home technology and sustainable building practices throughout.'
    ],
    features: [
      { title: 'Modern Architecture', desc: 'Contemporary design with clean lines' },
      { title: 'Smart Home Features', desc: 'Integrated technology for convenience' },
      { title: 'Energy Efficient', desc: 'Sustainable materials and systems' },
      { title: 'Family-Oriented', desc: 'Spaces designed for family activities' }
    ],
    stats: [
      { label: 'Duration', value: '7 months' },
      { label: 'Team Size', value: '12 members' },
      { label: 'Category', value: 'Residential' }
    ],
    services: [
      'Architectural Design',
      'Construction',
      'Smart Home Integration',
      'Landscaping'
    ]
  },
  7: {
    title: 'Josh Residence',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    location: 'Puerto Galera, Oriental Mindoro',
    year: '2021',
    worth: '₱3.2M',
    duration: '4 months',
    category: 'Renovation',
    description: 'Extensive renovation of the Josh family home, creating a modern and comfortable living environment.',
    overview: [
      'The Josh Residence renovation focused on creating a modern, comfortable home from an existing structure.',
      'The project included kitchen and bathroom renovations, new flooring, and updated electrical systems.',
      'The renovation maintained the home\'s character while adding contemporary conveniences and style.'
    ],
    features: [
      { title: 'Kitchen Renovation', desc: 'Modern kitchen with new appliances and cabinetry' },
      { title: 'Bathroom Updates', desc: 'Contemporary bathroom designs and fixtures' },
      { title: 'Flooring Upgrade', desc: 'New flooring throughout the home' },
      { title: 'Electrical Updates', desc: 'Modern electrical system and lighting' }
    ],
    stats: [
      { label: 'Duration', value: '4 months' },
      { label: 'Team Size', value: '6 members' },
      { label: 'Category', value: 'Renovation' }
    ],
    services: [
      'Kitchen Renovation',
      'Bathroom Upgrades',
      'Flooring Installation',
      'Electrical Work'
    ]
  },
  8: {
    title: 'Sol Residence',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop',
    location: 'San Jose, Occidental Mindoro',
    year: '2020',
    worth: '₱5.1M',
    duration: '10 months',
    category: 'Residential',
    description: 'Custom-built luxury home for the Sol family, featuring premium materials and sophisticated design.',
    overview: [
      'The Sol Residence is a custom-built luxury home designed to meet the specific needs of the Sol family.',
      'The project features high-end materials, custom cabinetry, and sophisticated architectural details.',
      'The home includes a home theater, wine cellar, and extensive outdoor living spaces.'
    ],
    features: [
      { title: 'Custom Design', desc: 'Tailored to family needs and preferences' },
      { title: 'Luxury Finishes', desc: 'Premium materials and craftsmanship' },
      { title: 'Entertainment Spaces', desc: 'Home theater and wine cellar' },
      { title: 'Outdoor Living', desc: 'Extensive patio and landscaping' }
    ],
    stats: [
      { label: 'Duration', value: '10 months' },
      { label: 'Team Size', value: '15 members' },
      { label: 'Category', value: 'Residential' }
    ],
    services: [
      'Custom Design',
      'Luxury Construction',
      'Interior Design',
      'Landscaping'
    ]
  },
  9: {
    title: 'Anyayahan Residences',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    location: 'Bongabong, Oriental Mindoro',
    year: '2022',
    worth: '₱6.8M',
    duration: '12 months',
    category: 'Multi-Unit',
    description: 'Development of multiple residential units for the Anyayahan family, creating a family compound.',
    overview: [
      'The Anyayahan Residences project involved building multiple residential units on a family compound.',
      'The development includes three separate homes with shared amenities and landscaping.',
      'Each unit was designed to accommodate different family needs while maintaining architectural consistency.'
    ],
    features: [
      { title: 'Multiple Units', desc: 'Three separate residential buildings' },
      { title: 'Shared Amenities', desc: 'Common areas and landscaping' },
      { title: 'Family Compound', desc: 'Designed for extended family living' },
      { title: 'Consistent Design', desc: 'Unified architectural style' }
    ],
    stats: [
      { label: 'Duration', value: '12 months' },
      { label: 'Team Size', value: '20 members' },
      { label: 'Category', value: 'Multi-Unit' }
    ],
    services: [
      'Multi-Unit Development',
      'Site Planning',
      'Construction Management',
      'Landscaping'
    ]
  },
  10: {
    title: 'Anyayahan Residences Phase 2',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    location: 'Bongabong, Oriental Mindoro',
    year: '2023',
    worth: '₱4.2M',
    duration: '8 months',
    category: 'Multi-Unit',
    description: 'Second phase of the Anyayahan family compound, adding additional residential units and amenities.',
    overview: [
      'Phase 2 of the Anyayahan Residences expanded the family compound with additional units.',
      'The project included new residential buildings and enhanced shared amenities.',
      'The design maintained consistency with the original phase while adding modern conveniences.'
    ],
    features: [
      { title: 'Additional Units', desc: 'New residential buildings added' },
      { title: 'Enhanced Amenities', desc: 'Improved shared spaces and facilities' },
      { title: 'Modern Conveniences', desc: 'Updated features and technology' },
      { title: 'Expanded Landscaping', desc: 'Additional outdoor living spaces' }
    ],
    stats: [
      { label: 'Duration', value: '8 months' },
      { label: 'Team Size', value: '12 members' },
      { label: 'Category', value: 'Multi-Unit' }
    ],
    services: [
      'Additional Construction',
      'Amenity Development',
      'Landscaping',
      'Technology Integration'
    ]
  },
  11: {
    title: 'Delos Reyes Residence',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop',
    location: 'Calapan, Oriental Mindoro',
    year: '2021',
    worth: '₱3.6M',
    duration: '6 months',
    category: 'Residential',
    description: 'Modern family home for the Delos Reyes family, featuring contemporary design and quality construction.',
    overview: [
      'The Delos Reyes Residence is a modern family home designed for comfort and functionality.',
      'The project features an open floor plan, energy-efficient systems, and high-quality finishes.',
      'The home was designed to accommodate the family\'s current needs while allowing for future growth.'
    ],
    features: [
      { title: 'Open Floor Plan', desc: 'Spacious and flexible living areas' },
      { title: 'Energy Efficient', desc: 'Sustainable systems and materials' },
      { title: 'Quality Finishes', desc: 'Premium materials throughout' },
      { title: 'Future-Ready', desc: 'Designed for family growth' }
    ],
    stats: [
      { label: 'Duration', value: '6 months' },
      { label: 'Team Size', value: '10 members' },
      { label: 'Category', value: 'Residential' }
    ],
    services: [
      'Architectural Design',
      'Construction',
      'Interior Finishing',
      'Landscaping'
    ]
  },
  12: {
    title: 'Gusto-Aldovino Residence',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
    location: 'Roxas, Oriental Mindoro',
    year: '2022',
    worth: '₱4.8M',
    duration: '9 months',
    category: 'Residential',
    description: 'Custom-built home for the Gusto-Aldovino family, featuring sophisticated design and luxury amenities.',
    overview: [
      'The Gusto-Aldovino Residence is a custom-built home designed to meet the family\'s specific lifestyle needs.',
      'The project includes high-end finishes, custom cabinetry, and sophisticated architectural details.',
      'The home features a gourmet kitchen, master suite, and extensive outdoor living spaces.'
    ],
    features: [
      { title: 'Custom Design', desc: 'Tailored to family lifestyle and preferences' },
      { title: 'Luxury Amenities', desc: 'High-end finishes and appliances' },
      { title: 'Gourmet Kitchen', desc: 'Professional-grade kitchen design' },
      { title: 'Master Suite', desc: 'Luxurious master bedroom and bathroom' }
    ],
    stats: [
      { label: 'Duration', value: '9 months' },
      { label: 'Team Size', value: '14 members' },
      { label: 'Category', value: 'Residential' }
    ],
    services: [
      'Custom Design',
      'Luxury Construction',
      'Interior Design',
      'Landscaping'
    ]
  },
  13: {
    title: 'Watiwat Residence',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    location: 'Bongabong, Oriental Mindoro',
    year: '2020',
    worth: '₱3.9M',
    duration: '7 months',
    category: 'Residential',
    description: 'Modern family home for the Watiwat family, featuring contemporary design and quality construction.',
    overview: [
      'The Watiwat Residence is a modern family home designed for comfort and functionality.',
      'The project features an efficient floor plan, quality materials, and energy-efficient systems.',
      'The home was completed on time and within budget, exceeding client expectations.'
    ],
    features: [
      { title: 'Efficient Design', desc: 'Optimized floor plan for family living' },
      { title: 'Quality Materials', desc: 'Durable and attractive finishes' },
      { title: 'Energy Efficient', desc: 'Sustainable systems and insulation' },
      { title: 'Family Focused', desc: 'Spaces designed for family activities' }
    ],
    stats: [
      { label: 'Duration', value: '7 months' },
      { label: 'Team Size', value: '11 members' },
      { label: 'Category', value: 'Residential' }
    ],
    services: [
      'Architectural Design',
      'Construction',
      'Interior Finishing',
      'Landscaping'
    ]
  },
  14: {
    title: 'Watiwat Apartment Building',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    location: 'Bongabong, Oriental Mindoro',
    year: '2021',
    worth: '₱12.5M',
    duration: '18 months',
    category: 'Commercial',
    description: 'Multi-unit apartment building development for the Watiwat family, providing quality rental housing.',
    overview: [
      'The Watiwat Apartment Building is a multi-unit residential development designed for rental income.',
      'The project includes 8 modern apartment units with shared amenities and parking.',
      'The building features contemporary design, quality construction, and energy-efficient systems.'
    ],
    features: [
      { title: '8 Units', desc: 'Modern apartment units with quality finishes' },
      { title: 'Shared Amenities', desc: 'Common areas and facilities' },
      { title: 'Parking', desc: 'Dedicated parking spaces for residents' },
      { title: 'Energy Efficient', desc: 'Sustainable building systems' }
    ],
    stats: [
      { label: 'Duration', value: '18 months' },
      { label: 'Team Size', value: '25 members' },
      { label: 'Category', value: 'Commercial' }
    ],
    services: [
      'Multi-Unit Development',
      'Commercial Construction',
      'Property Management',
      'Landscaping'
    ]
  },
  15: {
    title: 'SY Office Building',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    location: 'Calapan, Oriental Mindoro',
    year: '2022',
    worth: '₱8.9M',
    duration: '14 months',
    category: 'Commercial',
    description: 'Modern office building for SY Corporation, featuring contemporary design and professional amenities.',
    overview: [
      'The SY Office Building is a modern commercial development designed for professional use.',
      'The project includes office spaces, meeting rooms, and modern amenities for business operations.',
      'The building features contemporary design, energy-efficient systems, and professional-grade finishes.'
    ],
    features: [
      { title: 'Office Spaces', desc: 'Flexible office layouts and configurations' },
      { title: 'Meeting Rooms', desc: 'Professional meeting and conference facilities' },
      { title: 'Modern Amenities', desc: 'Contemporary building systems and finishes' },
      { title: 'Energy Efficient', desc: 'Sustainable building design and systems' }
    ],
    stats: [
      { label: 'Duration', value: '14 months' },
      { label: 'Team Size', value: '30 members' },
      { label: 'Category', value: 'Commercial' }
    ],
    services: [
      'Commercial Design',
      'Office Construction',
      'Interior Design',
      'Building Systems'
    ]
  },
  16: {
    title: 'Duenas/Florindo Commercial Building',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    location: 'Roxas, Oriental Mindoro',
    year: '2023',
    worth: '₱15.2M',
    duration: '20 months',
    category: 'Commercial',
    description: 'Large-scale commercial building development for Duenas and Florindo businesses, featuring retail and office spaces.',
    overview: [
      'The Duenas/Florindo Commercial Building is a large-scale commercial development with multiple business spaces.',
      'The project includes retail spaces, office areas, and shared amenities for multiple businesses.',
      'The building features modern design, quality construction, and flexible spaces for various business needs.'
    ],
    features: [
      { title: 'Retail Spaces', desc: 'Multiple retail units with storefront access' },
      { title: 'Office Areas', desc: 'Professional office spaces and meeting rooms' },
      { title: 'Shared Amenities', desc: 'Common areas and facilities for tenants' },
      { title: 'Flexible Design', desc: 'Adaptable spaces for various business types' }
    ],
    stats: [
      { label: 'Duration', value: '20 months' },
      { label: 'Team Size', value: '35 members' },
      { label: 'Category', value: 'Commercial' }
    ],
    services: [
      'Commercial Development',
      'Retail Construction',
      'Office Design',
      'Property Management'
    ]
  }
};

export function ProjectDetailsPage({ onNavigate, projectId }: ProjectDetailsPageProps) {
  const project = projectDetailsData[projectId || 1];
  const hasMultipleImages = Array.isArray(project.images) && project.images.length > 0;
  const mainImage = hasMultipleImages ? project.images![0] : project.image || '';
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              className="mb-6 text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => onNavigate('portfolio')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl md:text-5xl mb-6 text-white">
                  {project.title}
                </h1>
                <p className="text-xl text-white mb-6">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{project.year}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                <Button size="lg" onClick={() => onNavigate('contact')}>
                  Get Similar Quote
                </Button>
              </div>
              <div>
                <ImageWithFallback
                  src={mainImage}
                  alt={project.title}
                  className="rounded-lg object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Only for projects with multiple images */}
      {hasMultipleImages && project.images && (
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl mb-8 text-white text-center">Project Gallery</h2>
              <div className="space-y-6">
                {/* First row - 2 photos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(0, 2).map((image: string, index: number) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} - Photo ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
                          Photo {index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Second row - 3 photos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.images.slice(2, 5).map((image: string, index: number) => (
                    <div key={index + 2} className="group relative overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} - Photo ${index + 3}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
                          Photo {index + 3}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl mb-6 text-white">Project Overview</h2>
                <div className="space-y-6 text-white">
                  {project.overview.map((text: string, i: number) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
                <h3 className="text-2xl mb-4 text-white mt-8">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((f: ProjectFeature, i: number) => (
                    <div className="flex items-start gap-3" key={i}>
                      <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">{f.title}</h4>
                        <p className="text-white text-sm">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Project Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.stats.map((stat: ProjectStat, i: number) => (
                      <div className="flex justify-between text-white" key={i}>
                        <span>{stat.label}:</span>
                        <span>{stat.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Services Used</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {project.services.map((service: string, i: number) => (
                      <div className="flex items-center gap-2 text-white" key={i}>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let's discuss your renovation or construction needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent" onClick={() => onNavigate('portfolio')}>
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 