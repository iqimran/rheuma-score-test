# Calorie Calculator - BMR & TDEE Application

## Overview

A health and fitness web application that calculates Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) based on user inputs. The application provides personalized calorie recommendations to help users understand their daily energy needs for weight management. Built as a full-stack TypeScript application with a React frontend and Express backend, featuring an admin dashboard for viewing calculation history.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React with TypeScript using Vite as the build tool
- Client-side routing handled by Wouter (lightweight alternative to React Router)
- Single Page Application (SPA) with three main routes: calculator form (`/`), results page (`/result`), and admin dashboard (`/admin`)

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives as the foundation for interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Design system emphasizes clarity, trust through simplicity, and clear data hierarchy
- Typography system uses Inter font from Google Fonts
- Responsive layouts with mobile-first approach

**State Management**
- React Hook Form with Zod for form validation and type-safe input handling
- TanStack Query (React Query) for server state management and API data fetching
- SessionStorage for persisting calculation results between navigation
- Toast notifications for user feedback

**Data Flow Pattern**
- Form submission triggers mutation that sends data to backend API
- Successful calculations stored in sessionStorage and user redirected to results page
- Results page reads from sessionStorage to display calculations
- Optional save functionality persists results to database via API

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- HTTP server created using Node's native `http` module
- Development mode uses Vite middleware for HMR (Hot Module Replacement)
- Production mode serves static files from dist directory

**API Design**
- RESTful API endpoints under `/api` namespace
- POST `/api/calculate` - Performs BMR/TDEE calculations and optionally saves to database
- GET `/api/reports` - Retrieves all saved calculation reports (admin dashboard)
- Request/response validation using Zod schemas shared between client and server

**Calculation Logic**
- BMR calculated using Mifflin-St Jeor equation (gender-specific formulas)
- TDEE derived by applying activity level multipliers to BMR (range: 1.2 to 1.9)
- BMI calculation with category classification (Underweight, Normal, Overweight, Obese)
- Five activity levels supported: sedentary, light, moderate, active, very active

**Error Handling**
- Schema validation with detailed error messages
- HTTP status codes for appropriate error responses
- Logging middleware tracks request/response timing and status

### Data Storage

**Database Solution**
- PostgreSQL via Neon serverless database (configured for WebSocket connections)
- Drizzle ORM for type-safe database operations and schema management
- Schema-first approach with TypeScript types generated from database schema

**Database Schema**
- Single `reports` table stores calculation history
- Fields: id (UUID), age, gender, height, weight, activityLevel, bmr, tdee, category, userIp, createdAt
- Ordered by creation timestamp (descending) for admin dashboard display

**Data Persistence Pattern**
- Optional save functionality - calculations can be performed without database storage
- IP address tracking for analytics (stored but not exposed in UI)
- UUID-based primary keys generated server-side using crypto module

### External Dependencies

**Core Libraries**
- React 18+ for UI rendering
- Express.js for HTTP server
- Drizzle ORM with @neondatabase/serverless for database operations
- Zod for runtime schema validation and type inference
- TanStack Query for async state management

**UI Component Libraries**
- shadcn/ui components built on Radix UI primitives
- Tailwind CSS for styling
- Lucide React for icons
- class-variance-authority for component variant management

**Development Tools**
- Vite for frontend bundling and development server
- esbuild for production server bundling
- TypeScript compiler for type checking
- tsx for running TypeScript files directly in development

**Database & Infrastructure**
- Neon serverless PostgreSQL database
- ws (WebSocket) library for Neon database connections
- Drizzle Kit for database migrations and schema management

**Build Strategy**
- Client and server built separately
- Client output to `dist/public` directory
- Server bundled to single `dist/index.cjs` file with allowlisted dependencies
- Static file serving in production with fallback to index.html for SPA routing