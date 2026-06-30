import manifest from "./projects.generated.json"

export interface ProjectMedia {
  type: "image" | "video"
  url: string
  name: string
}

export interface Project {
  slug: string
  folderName: string
  name: string
  category: string
  group: string
  description: string
  location: string
  year: string
  duration: string
  worth: string
  featured: boolean
  coverImage: string
  media: ProjectMedia[]
}

export interface ProjectsManifest {
  generatedAt: string
  projectCount: number
  featuredSlugs?: string[]
  projects: Project[]
}

export const projectsManifest = manifest as ProjectsManifest

export const allProjects = projectsManifest.projects

export const featuredProjects = (projectsManifest.featuredSlugs ?? [])
  .map((slug) => allProjects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project))

export const additionalProjects = allProjects.filter((project) => !project.featured)

export function getProjectBySlug(slug: string | null | undefined): Project | undefined {
  if (!slug) return undefined
  return allProjects.find((project) => project.slug === slug)
}

export function getAdditionalProjectColumns(columnCount = 3): Project[][] {
  if (additionalProjects.length === 0) return []

  const chunkSize = Math.ceil(additionalProjects.length / columnCount)
  const columns: Project[][] = []

  for (let i = 0; i < columnCount; i++) {
    const start = i * chunkSize
    const chunk = additionalProjects.slice(start, start + chunkSize)
    if (chunk.length > 0) columns.push(chunk)
  }

  return columns
}

export function getProjectCoverImage(project: Project): string {
  if (project.coverImage) return project.coverImage
  return project.media.find((item) => item.type === "image")?.url ?? ""
}

export function getProjectServices(category: string): string[] {
  switch (category) {
    case "Renovation":
      return ["Renovation", "Interior Finishing", "Space Planning", "General Contracting"]
    case "Commercial":
      return ["Commercial Construction", "Architectural Design", "Project Management", "General Contracting"]
    default:
      return ["Residential Construction", "Architectural Design", "Construction", "General Contracting"]
  }
}
