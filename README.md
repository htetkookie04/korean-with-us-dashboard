# Korean With Us — Admin Dashboard

Complete admin dashboard for managing users, courses, enrollments, content, communications, and analytics with AI-powered insights.

## Project Structure

```
.
├── frontend/         # React + Vite + TypeScript Dashboard (static SPA)
└── docs/            # Additional documentation
```

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Recharts
- **Backend:** Node.js, Express, TypeScript, PostgreSQL
- **Auth:** JWT with refresh tokens
- **Database:** PostgreSQL
- **AI:** OpenAI/Anthropic integration (backend only)

## Quick Start

See [docs/SETUP.md](docs/SETUP.md) for detailed setup instructions.

### Quick Setup (TL;DR)

1. **Frontend (static SPA only):**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm run dev
   ```

2. **Login (static demo user):**
   - Open http://localhost:5173
   - Email: `admin@koreanwithus.com`
   - Password: `admin123` (⚠️ Change immediately!)

## Features

- ✅ Role-based access control (Super Admin, Admin, Course Manager, Support, Viewer)
- ✅ User & student management
- ✅ Course & schedule management
- ✅ Enrollment workflow (pending → approved → active)
- ✅ Payment tracking
- ✅ Activity logging & audit trail

## Documentation

- **[Setup Guide](docs/SETUP.md)** - Complete setup instructions
- **[API Documentation](docs/API.md)** - All API endpoints
- **[Architecture](docs/ARCHITECTURE.md)** - System architecture overview
- **[Database Schema](database/README.md)** - Database structure and relationships

## License

Proprietary — Korean With Us

