# AI Prompt Examples

This document contains example prompts for using AI assistants (like Cursor, GitHub Copilot, or ChatGPT) to help with development, troubleshooting, and feature implementation for the Korean With Us Dashboard.

## Table of Contents

- [404 Error Troubleshooting](#404-error-troubleshooting)
- [Code Generation](#code-generation)
- [Image Generation](#image-generation)
- [Project-Specific Prompts](#project-specific-prompts)

---

## 404 Error Troubleshooting

### Example Prompt

```
You are an expert web developer and deployment engineer. 

A user is encountering a 404 NOT_FOUND error on their static website hosted on [Platform]. 

Please do the following:

1. Analyze the possible reasons why this error is occurring, considering both frontend and backend causes.

2. Suggest concrete fixes that can be applied to the deployment or codebase.

3. Explain the root cause of the error in simple terms.

4. Provide guidance on how to prevent this issue in future deployments.

5. Give examples of configuration changes (like redirects or rewrites) if applicable.

Make your answer clear, step-by-step, and beginner-friendly, including code snippets if needed.
```

### Project-Specific: React Router 404 Fix

```
I'm using React Router in my Korean With Us dashboard (Vite + React + TypeScript). 
When I navigate to routes like `/courses/123` directly or refresh the page, I get a 404 error.

My routes are defined in App.tsx using React Router v6. The app is deployed on [Platform].

Please:
1. Identify why direct navigation causes 404s
2. Provide a fix for the Vite configuration (vite.config.ts)
3. Show how to add a catch-all route in React Router
4. Explain server-side rewrite rules if needed for my deployment platform
```

---

## Code Generation

### Example Prompt

```
Write a React component for a responsive navigation bar that:

- Collapses into a hamburger menu on mobile
- Highlights the current route
- Uses TailwindCSS for styling
- Includes smooth animations for opening and closing the menu

Provide the full code including imports and export.
```

### Project-Specific: Dashboard Components

#### Enrollment Form Component

```
Create a React TypeScript component for the Korean With Us dashboard that allows admins to create/edit enrollments.

Requirements:
- Form fields: student (dropdown), course (dropdown), status (pending/approved/active/cancelled), payment_status, notes
- Use the existing EnrollmentForm.tsx as reference but improve validation
- Integrate with the useEnrollments hook
- Show loading states and error handling
- Use TailwindCSS matching the existing design system
- Include proper TypeScript types from the backend API
```

#### Course Analytics Chart

```
Create a React component using Recharts for the Korean With Us dashboard that displays:

- Course enrollment trends over the last 6 months (line chart)
- Course popularity by enrollment count (bar chart)
- Payment status breakdown (pie chart)

Use the existing Dashboard.tsx as reference for styling and data fetching patterns.
Integrate with the reports API endpoint.
```

#### User Management Table

```
Enhance the Users.tsx component in the Korean With Us dashboard with:

- Server-side pagination (10 users per page)
- Search/filter by name, email, role
- Sortable columns (name, email, created_at, role)
- Bulk actions (delete, change role)
- Export to CSV functionality

Use the existing useUsers hook and maintain the current design system.
```

---

## Image Generation

### Example Prompt

```
Generate a high-resolution digital illustration of a futuristic city at sunset. 

Include the following details:
- Neon lights reflecting on wet streets
- Flying cars and drones
- Diverse futuristic architecture with green rooftop gardens
- Cinematic lighting and deep shadows
- Style: realistic with slight cyberpunk aesthetic
```

### Project-Specific: Dashboard Assets

```
Generate a professional logo for "Korean With Us" language school dashboard.

Requirements:
- Modern, clean design suitable for an admin dashboard
- Incorporate Korean cultural elements (subtle)
- Color scheme: primary blue (#3B82F6) and accent colors
- Include both full logo and icon-only versions
- Style: minimalist, professional, educational
```

---

## Project-Specific Prompts

### Database Migration

```
I need to add a new feature to the Korean With Us dashboard: course reviews and ratings.

Create a PostgreSQL migration file that:
1. Creates a `reviews` table with: id, course_id, user_id, rating (1-5), comment, created_at, updated_at
2. Adds foreign key constraints to courses and users tables
3. Includes indexes for performance (course_id, user_id, created_at)
4. Follows the existing migration pattern in database/migrations/

Also update the TypeScript types in backend/src/db.ts to include the new Review model.
```

### API Endpoint Development

```
Create a new API endpoint for the Korean With Us dashboard backend:

POST /api/reports/custom
- Accepts filters: date_range, course_ids, user_ids, status
- Returns aggregated enrollment and payment data
- Requires admin role (use existing auth middleware)
- Include proper error handling and validation
- Follow the existing controller pattern in backend/src/controllers/

Also create the corresponding route in backend/src/routes/reports.ts
```

### Frontend Hook Development

```
Create a custom React hook `useReports.ts` for the Korean With Us dashboard that:

- Fetches custom report data from the /api/reports/custom endpoint
- Supports filtering by date range, courses, users, and status
- Includes loading and error states
- Provides a function to export data as CSV
- Uses the existing API client pattern from src/lib/api.ts
- Includes TypeScript types matching the backend response
```

### Testing

```
Write comprehensive tests for the enrollment controller in the Korean With Us dashboard:

- Test GET /api/enrollments (list all enrollments)
- Test POST /api/enrollments (create enrollment)
- Test PUT /api/enrollments/:id (update enrollment)
- Test DELETE /api/enrollments/:id (delete enrollment)
- Test authorization (only admins can delete)
- Test validation (required fields, invalid status values)

Use Jest and Supertest. Follow existing test patterns if available.
```

### Performance Optimization

```
Analyze and optimize the performance of the Korean With Us dashboard:

1. Identify slow API endpoints in backend/src/controllers/
2. Add database query optimizations (indexes, eager loading)
3. Implement pagination for large data sets
4. Add caching for frequently accessed data (course list, user list)
5. Optimize React components that re-render unnecessarily
6. Suggest lazy loading for routes

Provide specific code changes and explain the performance improvements.
```

### Security Audit

```
Perform a security audit of the Korean With Us dashboard:

1. Review authentication and authorization in backend/src/middleware/auth.ts
2. Check for SQL injection vulnerabilities in database queries
3. Verify JWT token handling and refresh token security
4. Review input validation in all controllers
5. Check for XSS vulnerabilities in frontend components
6. Verify CORS configuration
7. Review environment variable usage and secrets management

Provide a report with findings and recommended fixes.
```

### Deployment

```
Help me deploy the Korean With Us dashboard to [Platform - e.g., Vercel, Netlify, AWS].

The project has:
- Frontend: React + Vite (builds to frontend/dist)
- Backend: Node.js + Express (runs on port 3000)
- Database: PostgreSQL (external service)

Provide:
1. Build configuration for the platform
2. Environment variable setup
3. Database connection configuration
4. API routing/rewrite rules
5. Deployment checklist
```

---

## Best Practices for AI Prompts

1. **Be Specific**: Include file paths, function names, and existing patterns
2. **Provide Context**: Reference existing code, design system, or architecture
3. **State Requirements**: List all features, constraints, and edge cases
4. **Request Examples**: Ask for code snippets, configuration files, or step-by-step instructions
5. **Mention Stack**: Always specify your tech stack (React, TypeScript, TailwindCSS, etc.)
6. **Reference Existing Code**: Point to similar components or patterns in your codebase

---

## Tips

- Use these prompts as templates and customize them for your specific needs
- Break complex requests into smaller, focused prompts
- Always review and test AI-generated code before committing
- Ask for explanations if you don't understand the generated code
- Request multiple solutions and compare approaches

