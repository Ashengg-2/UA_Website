import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, ArrowLeft, Clock, Award } from 'lucide-react';
import { getProjectBySlug, getProjectCoverImage, getProjectServices, type ProjectMedia } from '@/data/projects';

interface ProjectDetailsPageProps {
  onNavigate: (page: string) => void;
  projectSlug?: string | null;
}

function GalleryMediaItem({
  item,
  projectName,
  index,
}: {
  item: ProjectMedia;
  projectName: string;
  index: number;
}) {
  if (item.type === 'video') {
    return (
      <div className="overflow-hidden rounded-lg bg-black">
        <video
          controls
          preload="none"
          playsInline
          className="h-64 w-full object-cover"
          aria-label={`${projectName} video ${index + 1}`}
        >
          <source src={item.url} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-lg">
      <ImageWithFallback
        src={item.url}
        alt={`${projectName} - Photo ${index + 1}`}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20">
        <div className="text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Photo {index + 1}
        </div>
      </div>
    </div>
  );
}

export function ProjectDetailsPage({ onNavigate, projectSlug }: ProjectDetailsPageProps) {
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl mb-4 text-white">Project Not Found</h1>
            <p className="text-white mb-8">
              The project you are looking for could not be found.
            </p>
            <Button onClick={() => onNavigate('portfolio')}>Back to Portfolio</Button>
          </div>
        </section>
      </div>
    );
  }

  const imageCount = project.media.filter((item) => item.type === 'image').length;
  const videoCount = project.media.filter((item) => item.type === 'video').length;
  const services = getProjectServices(project.category);
  const mainImage = getProjectCoverImage(project);

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
                  {project.name}
                </h1>
                <p className="text-xl text-white mb-6">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  {project.year && (
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{project.year}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                </div>
                <Button size="lg" onClick={() => onNavigate('contact')}>
                  Get Similar Quote
                </Button>
              </div>
              <div>
                {mainImage && (
                  <ImageWithFallback
                    src={mainImage}
                    alt={project.name}
                    className="rounded-lg object-cover w-full h-80"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      {project.media.length > 0 && (
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl mb-8 text-white text-center">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.media.map((item, index) => (
                  <GalleryMediaItem
                    key={`${item.url}-${index}`}
                    item={item}
                    projectName={project.name}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl mb-6 text-white">Project Overview</h2>
                <div className="space-y-6 text-white">
                  <p>{project.description}</p>
                  <p>
                    Browse the full gallery of photos and videos from {project.name}, delivered
                    with UA Designs&apos; focus on quality craftsmanship and thoughtful design.
                  </p>
                </div>
                <h3 className="text-2xl mb-4 text-white mt-8">Project Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Category</h4>
                      <p className="text-white text-sm">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-white text-sm">{project.location}</p>
                    </div>
                  </div>
                  {project.worth && (
                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Project Value</h4>
                        <p className="text-white text-sm">{project.worth}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-white">
                      <span>Category:</span>
                      <span>{project.category}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Photos:</span>
                      <span>{imageCount}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Videos:</span>
                      <span>{videoCount}</span>
                    </div>
                    {project.duration && (
                      <div className="flex justify-between text-white">
                        <span>Duration:</span>
                        <span>{project.duration}</span>
                      </div>
                    )}

                    <div className="border-t border-gray-700 pt-4">
                      <p className="font-medium text-white mb-3">Services Used</p>
                      <div className="space-y-2">
                        {services.map((service) => (
                          <div className="flex items-center gap-2 text-white text-sm" key={service}>
                            <div className="h-2 w-2 shrink-0 rounded-full bg-accent"></div>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="wood-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 wood-subtitle max-w-2xl mx-auto">
            Let&apos;s discuss your renovation or construction needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              onClick={() => onNavigate('portfolio')}
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
