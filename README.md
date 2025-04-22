# Dashboard Showcase

A modern dashboard application that showcases Next.js 14, React Server Components, TypeScript, Shadcn/UI, and Tailwind CSS. This project demonstrates contemporary web development best practices including responsive design, performance optimization, and component-driven architecture.

![Dashboard Screenshot](https://github.com/JbellMD/dashboard-showcase/raw/main/public/dashboard-screenshot.png)

## Features

- **Modern Frontend Stack**: Built with Next.js 14, TypeScript, and React
- **Responsive Design**: Fully responsive interface that works on all device sizes
- **Server Components (RSC)**: Leverages React Server Components for improved performance
- **Server-Side Rendering (SSR)**: Optimized for SEO and initial load performance
- **Client-Side Interactivity**: Interactive charts and data visualization with Recharts
- **Dark Mode Support**: Built-in theme switcher with system preference detection
- **Form Validation**: Type-safe form handling with React Hook Form and Zod
- **Component Library**: Utilizes Shadcn/UI for accessible, customizable components
- **Optimized Bundle Size**: Efficient code splitting and tree shaking for fast loading
- **TypeScript**: Fully typed codebase for better developer experience and code quality

## Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **State Management**: React's built-in hooks
- **Charts**: [Recharts](https://recharts.org/) for data visualization
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://github.com/colinhacks/zod)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/src
  /app                    # Next.js App Router
    /(routes)             # Page routes
    /layout.tsx           # Root layout with providers
  /components             # React components
    /charts               # Chart components with Recharts
    /forms                # Form components with React Hook Form
    /layout               # Layout components (sidebar, navbar)
    /tables               # Table components
    /ui                   # Shadcn UI components
  /lib                    # Utility functions and data
```

## Performance Optimizations

This project implements several performance optimizations:

- **React Server Components (RSC)**: Server-side rendering for better initial load performance
- **Code Splitting**: Each page loads only the JavaScript needed for that page
- **Lazy Loading**: Components and routes are loaded only when needed
- **Image Optimization**: Next.js Image component for optimized image loading
- **Font Optimization**: Built-in font optimization with Next.js

## Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any hosting service that supports Next.js. For production builds, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Recharts Documentation](https://recharts.org/en-US/guide)

## License

[MIT License](LICENSE)
