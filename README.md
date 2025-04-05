# Portfolio Website

![Portfolio Website Banner](https://harshamal.me/images/og.png)

## Table of Contents

- [Live Demo](#-live-demo)
- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Content Management](#-content-management)
  - [Blog Posts](#blog-posts)
  - [Work Examples](#work-examples)
- [Base URL Configuration](#-base-url-configuration)
- [Deployment](#-deployment)
  - [GitHub Pages](#github-pages)
  - [Vercel/Netlify](#vercelnelify)
- [Customization](#-customization)
- [Contact](#-contact)
- [License](#-license)

## 🚀 Live Demo

Visit my portfolio at [harshamal.me](https://harshamal.me)

## 📖 Overview

This is a personal portfolio website built with Next.js 14 using the App Router pattern. It showcases my professional work, projects, blog posts, and skills with a clean, responsive design and dynamic content generation.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Blog Section**: Dynamic blog posts with MDX support
- **Work Portfolio**: Showcase of professional projects and experience
- **Dynamic Routing**: SEO-friendly URLs for blog posts and work examples
- **Metadata Generation**: Automatic OpenGraph and Twitter card generation
- **Image Optimization**: Next.js Image component for performance
- **PDF Support**: Ability to link to downloadable documents
- **Dark/Light Mode**: Theme toggle functionality

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Content**: MDX for rich content authoring
- **Icons**: React Icons
- **Deployment**: Vercel/GitHub Pages
- **SEO**: Custom metadata, structured data (JSON-LD)

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/myportfolio.git
cd myportfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables: Create a `.env.local` file with:

```
NEXT_PUBLIC_BASE_PATH=
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
myportfolio/
├── app/                    # Next.js App Router structure
│   ├── about/              # About me components and pages
│   ├── blog/               # Blog-related components and pages
│   │   ├── [slug]/         # Dynamic blog post page
│   │   │   └── page.tsx    # Individual blog post component
│   │   └── utils.ts        # Blog utility functions
│   ├── work/               # Work-related components and pages
│   │   ├── [slug]/         # Dynamic work example page
│   │   │   └── page.tsx    # Individual work example component
│   │   └── utils.ts        # Work utility functions
│   ├── ui/                 # Shared UI components
│   └── page.tsx            # Home page component
├── content/                # Content files
│   ├── blog/               # Blog post MDX files
│   └── work/               # Work example MDX files
├── public/                 # Static files
│   └── images/             # Image assets
├── styles/                 # Global styles
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Project dependencies
├── LICENSE                 # License file
└── README.md               # Project documentation
```

## 📝 Content Management

### Blog Posts

Add new blog posts in the `content/blog` directory as MDX files with the following frontmatter:

```markdown
---
title: Post Title
publishedAt: YYYY-MM-DD
summary: Brief description of the post
image: /images/blog/image.jpg
---

Content goes here...
```

### Work Examples

Add new work examples in the `content/work` directory as MDX files with the following frontmatter:

```markdown
---
title: Project Title
duration: Jan 2023 - Mar 2023
summary: Brief description of the project
imageUrl: images/work/project.jpg
---

Content goes here...
```

## 🔗 Base URL Configuration

The project uses a `baseUrl` configuration to handle deployments on different domains or subpaths. When adding links to images, PDFs, or other assets in your content, use relative paths that will be automatically prefixed with the base URL:

```markdown
![Image Alt Text](/images/example.jpg)
[Download PDF](/documents/example.pdf)
```

## 🚢 Deployment

### GitHub Pages

This project can be deployed to GitHub Pages using the `next-on-pages` package.

### Vercel/Netlify

For deployment on Vercel or Netlify:

1. Push your code to GitHub
2. Import the repository in Vercel/Netlify
3. Set up environment variables as needed
4. Deploy

## 🪛 Customization

- Update personal information in the home page component
- Modify the theme in the Tailwind configuration
- Add or remove sections as needed
- Customize the MDX components in the `ui/mdx.tsx` file

## 📬 Contact

Feel free to reach out to me through my portfolio website [harshamal.me](https://harshamal.me) or connect with me on social media platforms linked there.

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Harshamal Gunathilaka
