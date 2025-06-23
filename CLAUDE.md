# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

chimech-mcp (千机阁) is a web portal project for managing digital employees in the chimech-mcp ecosystem. This is the early-stage repository that will become a full-stack web application built with Next.js 14 and TypeScript.

**Current Status**: Repository is in initial setup phase with comprehensive planning documentation but no actual codebase yet.

## Planned Architecture

Based on the extensive Cursor rules documentation, this will be a full-stack application:

**Frontend**:
- Next.js 14 with App Router
- TypeScript 5.0+
- Tailwind CSS with custom chimech-mcp theme
- React components with Headless UI + Radix UI
- Framer Motion for animations
- Zustand + React Query for state management

**Backend**:
- Fastify + TypeScript
- PostgreSQL + Redis
- Prisma ORM
- JWT authentication

**Infrastructure**:
- Docker + Docker Compose
- Vercel (frontend) + Cloud deployment (backend)

## Development Commands

*Note: These commands are planned based on the documentation but not yet implemented*

```bash
# Project setup (when package.json exists)
npm install
npm run dev              # Start development server

# Build and deployment
npm run build           # Build production version
npm run build:export    # Build and export static files

# Code quality
npm run lint            # Code linting
npm run type-check      # TypeScript type checking
```

## Project Structure (Planned)

```
chimechweb/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── ui/                # Base UI components  
│   ├── sections/          # Page section components
│   └── layout/           # Layout components
├── lib/                    # Utilities and type definitions
├── data/                   # Static data files
├── api/                    # Backend API code
├── prisma/                 # Database schema and migrations
└── public/                 # Static assets
```

## Key Development Guidelines

### Component Development
- Use PascalCase for component files (`ComponentName.tsx`)
- Define Props interfaces for all components
- Prefer Tailwind CSS classes over custom CSS
- Follow chimech-mcp brand design system
- Use Framer Motion for animations

### Code Standards
- Strict TypeScript type safety required
- Use the `cn()` utility from `lib/utils.ts` for conditional classes
- All components should be responsive by default
- Implement proper error handling and loading states

### API Development
- RESTful API design patterns
- Prisma for database operations
- JWT authentication with API key support
- Redis caching optimization
- Comprehensive error handling

## Current Development Priority

1. **Initialize Project Structure**: Set up Next.js project with TypeScript
2. **Configure Tailwind**: Implement chimech-mcp theme system
3. **Setup Backend**: Initialize Fastify server with Prisma
4. **Database Design**: Implement user management and digital employee schemas
5. **Core Features**: User authentication, digital employee marketplace, API key management

## Important Files to Reference

- `.cursor/rules/index.mdc` - Complete development guidelines index
- `.cursor/rules/project-overview.mdc` - Detailed architecture specifications
- `.cursor/rules/development-workflow.mdc` - Development commands and workflows
- `.cursor/rules/component-patterns.mdc` - React component development patterns
- `.cursor/rules/backend-api-patterns.mdc` - Backend API development guidelines

## Next Steps for Implementation

Since this is an early-stage project, the immediate tasks are:
1. Initialize Next.js project with TypeScript
2. Setup Tailwind CSS with chimech-mcp theme
3. Create basic project structure as outlined in the Cursor rules
4. Implement core UI components following the established patterns
5. Setup backend infrastructure with Fastify and Prisma