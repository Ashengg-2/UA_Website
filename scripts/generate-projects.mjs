import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, "..")
const projectsDir = path.join(rootDir, "public", "projects")
const outputFile = path.join(rootDir, "src", "data", "projects.generated.json")
const featuredConfigFile = path.join(projectsDir, "featured.json")

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"])
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"])
const COVER_NAMES = new Set(["cover.jpg", "cover.jpeg", "cover.png", "cover.webp"])

function slugify(folderName) {
  return folderName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function formatProjectName(folderName) {
  return folderName
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ")
}

function inferCategory(folderName) {
  const upper = folderName.toUpperCase()
  if (upper.includes("RENOVATION")) return "Renovation"
  if (
    upper.includes("APARTMENT") ||
    upper.includes("COMMERCIAL") ||
    upper.includes("OFFICE") ||
    upper.includes("CAFE")
  ) {
    return "Commercial"
  }
  return "Residential"
}

function inferGroup(category) {
  if (category === "Renovation") return "House Renovations"
  if (category === "Commercial") return "Commercial & Multi-Unit"
  return "Residential Projects"
}

function toPublicUrl(folderName, fileName) {
  return `/projects/${encodeURIComponent(folderName)}/${encodeURIComponent(fileName)}`
}

function naturalCompare(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
}

function isImageFile(fileName) {
  return IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase())
}

function isVideoFile(fileName) {
  return VIDEO_EXTENSIONS.has(path.extname(fileName).toLowerCase())
}

function isDedicatedCoverFile(fileName) {
  return COVER_NAMES.has(fileName.toLowerCase())
}

function readOptionalMeta(folderPath) {
  const metaPath = path.join(folderPath, "project.json")
  if (!fs.existsSync(metaPath)) return {}

  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf8"))
  } catch {
    console.warn(`Could not parse ${metaPath}`)
    return {}
  }
}

function pickCoverImage(files) {
  for (const coverName of COVER_NAMES) {
    const match = files.find((file) => file.toLowerCase() === coverName)
    if (match) return match
  }

  const images = files.filter(isImageFile).sort(naturalCompare)
  return images[0] ?? null
}

function buildGalleryMedia(folderName, files, coverFile) {
  const dedicatedCover = coverFile && isDedicatedCoverFile(coverFile)

  const images = files
    .filter(isImageFile)
    .filter((file) => !(dedicatedCover && file === coverFile))
    .sort(naturalCompare)
    .map((fileName) => ({
      type: "image",
      url: toPublicUrl(folderName, fileName),
      name: fileName,
    }))

  const videos = files
    .filter(isVideoFile)
    .sort(naturalCompare)
    .map((fileName) => ({
      type: "video",
      url: toPublicUrl(folderName, fileName),
      name: fileName,
    }))

  return [...images, ...videos]
}

function loadFeaturedFolders(folderNames) {
  if (!fs.existsSync(featuredConfigFile)) {
    return folderNames.slice(0, 4)
  }

  try {
    const config = JSON.parse(fs.readFileSync(featuredConfigFile, "utf8"))
    const featured = Array.isArray(config.featured) ? config.featured : []
    const validFeatured = featured.filter((name) => folderNames.includes(name))

    if (validFeatured.length > 0) {
      return validFeatured
    }
  } catch {
    console.warn("Could not parse featured.json, using first four projects.")
  }

  return folderNames.slice(0, 4)
}

function generateProjectsManifest() {
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true })
  }

  const folderNames = fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => naturalCompare(a, b))

  const featuredFolderList = loadFeaturedFolders(folderNames)
  const featuredFolders = new Set(featuredFolderList)
  const featuredSlugs = featuredFolderList.map((folderName) => {
    const folderPath = path.join(projectsDir, folderName)
    const meta = readOptionalMeta(folderPath)
    return meta.slug ?? slugify(folderName)
  })

  const projects = folderNames.map((folderName) => {
    const folderPath = path.join(projectsDir, folderName)
    const files = fs
      .readdirSync(folderPath, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)

    const meta = readOptionalMeta(folderPath)
    const coverFile = pickCoverImage(files)
    const media = buildGalleryMedia(folderName, files, coverFile)
    const category = meta.category ?? inferCategory(folderName)
    const name = meta.name ?? formatProjectName(folderName)

    return {
      slug: meta.slug ?? slugify(folderName),
      folderName,
      name,
      category,
      group: inferGroup(category),
      description:
        meta.description ??
        `Explore the ${name} project, showcasing UA Designs' commitment to quality architecture and construction.`,
      location: meta.location ?? "Philippines",
      year: meta.year ?? "",
      duration: meta.duration ?? "",
      worth: meta.worth ?? "",
      featured: featuredFolders.has(folderName),
      coverImage: coverFile ? toPublicUrl(folderName, coverFile) : "",
      media,
    }
  })

  const manifest = {
    generatedAt: new Date().toISOString(),
    projectCount: projects.length,
    featuredSlugs,
    projects,
  }

  fs.mkdirSync(path.dirname(outputFile), { recursive: true })
  fs.writeFileSync(outputFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8")

  console.log(`Generated ${projects.length} projects -> ${path.relative(rootDir, outputFile)}`)
}

generateProjectsManifest()
