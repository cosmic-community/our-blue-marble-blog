# Our Blue Marble Blog

![Our Blue Marble Blog](https://imgix.cosmicjs.com/bab6b030-ff1e-11ed-8fca-9b0db64c9b86-nasa-vhSz50AaFAs-unsplash.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful, modern blog platform built with Next.js 16 and powered by Cosmic CMS. Showcasing environmental content with stunning imagery and smooth user experience.

## Features

- 📝 Dynamic blog posts with rich content and hero images
- 👥 Author profiles with profile images
- 🔗 Category-based filtering and navigation
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🖼️ Optimized images with imgix
- 🚀 Server-side rendering with Next.js 16
- ♿ Accessible and SEO-friendly

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=694ebf266d538c4d2c70f851&clone_repository=694ecf0e6d538c4d2c70f940)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and delivery

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your bucket set up

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching All Posts

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Post

```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'your-post-slug' })
  .depth(1)
```

### Fetching Categories

```typescript
const { objects: categories } = await cosmic.objects
  .find({ type: 'categories' })
  .props(['id', 'title', 'slug'])
```

## Cosmic CMS Integration

This application uses Cosmic as a headless CMS with the following content structure:

- **Posts** - Blog articles with hero images, content, teasers, authors, and categories
- **Authors** - Author profiles with images
- **Categories** - Content classification
- **Globals** - Site-wide settings (site title, tagline)

All content is fetched server-side for optimal performance and SEO.

## Deployment Options

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the Deploy button above
2. Connect your repository
3. Add your environment variables
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

1. Click the Deploy button above
2. Connect your repository
3. Add your environment variables
4. Deploy!

## Learn More

- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->