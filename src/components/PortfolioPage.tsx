import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin } from 'lucide-react';
import {
  featuredProjects,
  getAdditionalProjectColumns,
  getProjectCoverImage,
  projectsManifest,
} from '@/data/projects';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

function PortfolioNestedCard({
  name,
  slug,
  coverImage,
  onNavigate,
}: {
  name: string;
  slug: string;
  coverImage: string;
  onNavigate: (page: string) => void;
}) {
  const navigate = () => onNavigate(`project-details-${slug}`);

  return (
    <div
      className="portfolio-nested-card"
      onClick={navigate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate();
        }
      }}
    >
      <div className="portfolio-nested-card__thumb">
        <ImageWithFallback
          src={coverImage}
          alt={name}
          className="portfolio-nested-card__thumb-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="portfolio-nested-card__content flex items-center justify-between gap-3">
        <span className="portfolio-nested-card__label">{name}</span>
        <span className="portfolio-nested-card__action">→ VIEW</span>
      </div>
    </div>
  );
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const additionalProjectColumns = getAdditionalProjectColumns(3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-white">
              OUR TRACK RECORD
            </h1>
            <div className="wood-accent-bar"></div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {featuredProjects.map((project) => (
              <Card key={project.slug} className="portfolio-featured-card">
                <div className="interactive-card__image-wrap">
                  <ImageWithFallback
                    src={getProjectCoverImage(project)}
                    alt={project.name}
                    className="interactive-card__image w-full h-48 object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <div className="interactive-card__body">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.year && (
                      <div className="flex items-center gap-1 text-sm text-white">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="mb-2 text-white">{project.name}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-white mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <CardDescription className="interactive-card__description text-white">
                    {project.description}
                  </CardDescription>
                </div>
                <CardContent className="interactive-card__actions">
                  <Button
                    variant="outline"
                    className="interactive-btn w-full"
                    onClick={() => onNavigate(`project-details-${project.slug}`)}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {additionalProjectColumns.map((columnProjects, columnIndex) => (
                <Card key={columnIndex} className="portfolio-group-card h-full">
                  <CardContent className="flex flex-col gap-3 p-6">
                    {columnProjects.map((project) => (
                      <PortfolioNestedCard
                        key={project.slug}
                        name={project.name.toUpperCase()}
                        slug={project.slug}
                        coverImage={getProjectCoverImage(project)}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </CardContent>
                </Card>
              ))}
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
              <div className="text-3xl text-white mb-2">{projectsManifest.projectCount}</div>
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
      <section className="wood-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 wood-subtitle max-w-2xl mx-auto">
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
