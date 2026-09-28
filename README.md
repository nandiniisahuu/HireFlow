# HireFlow — Recruitment & Applicant Tracking System

HireFlow is a full-stack recruitment and applicant tracking platform developed as a independent full-stack project.

The project was **adapted and enhanced from the open-source EMP Recruit project by EmpCloud** to understand and work with a real-world style recruitment codebase and end-to-end hiring workflows.

The project focuses on practical full-stack development, including frontend development, backend REST APIs, database integration, authentication, recruitment workflows, AI-powered features, and modular application architecture.

> **Project Note:** HireFlow is a personal learning/portfolio project. It is not an official EMP Cloud product and does not represent employment with EmpCloud. The original EMP Recruit project is open-source and belongs to the EmpCloud ecosystem.

---

## 🚀 Project Overview

HireFlow provides a centralized platform for managing recruitment activities from job creation to candidate hiring.

The application includes workflows for:

- Job postings
- Candidate management
- Application tracking
- Recruitment pipeline
- Interview scheduling
- Interview feedback
- Offer management
- Onboarding
- Recruitment analytics
- Candidate comparison
- AI-assisted recruitment features
- Career pages
- Candidate portal
- Email templates
- Background checks
- Surveys
- Assessments

The project helped me understand how an existing full-stack codebase can be studied, modified, extended, and run as an integrated application.

---

## 🎯 Project Objective

The main objective of this project was to gain practical experience working with a **real-world style full-stack application** instead of developing only a small CRUD application from scratch.

Through this project, I worked on:

- Understanding an existing codebase
- Understanding frontend and backend communication
- Working with REST APIs
- Working with relational databases
- Understanding database migrations
- Implementing and modifying UI workflows
- Working with authentication and authorization
- Understanding recruitment business workflows
- Integrating frontend, backend, and database layers
- Building and testing a larger modular application

---

## ✨ Key Features

### 👨‍💼 Recruitment Management

- Job posting management
- Job status management
- Candidate management
- Candidate search and filtering
- Application tracking
- Recruitment pipeline
- Custom pipeline stages
- Candidate comparison
- Recruitment analytics

### 📋 Application Tracking

Applications can move through different recruitment stages such as:

```text
Applied
   ↓
Screened
   ↓
Interview
   ↓
Offer
   ↓
Hired / Rejected
```

Application stage changes can be tracked through the application's history.

### 👤 Candidate Management

Recruiters can manage:

- Candidate profiles
- Resume information
- Candidate experience
- Skills
- Applications
- Notes
- Tags
- Recruitment status

### 🎤 Interview Management

The application supports:

- Interview scheduling
- Interviewer assignment
- Interview feedback
- Interview invitations
- Meeting links
- Calendar links
- Interview recordings
- Interview transcription

### 🤖 AI Features

The project includes AI-assisted recruitment functionality such as:

- AI-assisted job description generation
- AI-Powered Recruitment
- Resume Evaluation
- Candidate Assessment
- AI Interviews

AI providers are configurable through environment variables.

### 📄 Offer Management

Recruiters can:

- Create offers
- Submit offers for approval
- Approve offers
- Generate offer letters
- Generate PDF documents
- Send offer letters to candidates

### 🧑‍💻 Candidate Portal

Candidates can access recruitment-related information such as:

- Applications
- Interview schedules
- Offers
- Application status

### 📊 Recruitment Analytics

The application provides recruitment-related metrics including:

- Hiring pipeline
- Time-to-hire
- Source effectiveness
- Pipeline conversion
- Offer acceptance information

---

### Multi-Tenant Architecture

HireFlow follows an organization-based multi-tenant architecture.

- Each organization can manage its own users, jobs, candidates, applications, interviews, offers, and onboarding data.
- Recruiters access recruitment data associated with their organization.
- Organization-level data isolation helps keep private recruitment information separated between organizations.
- Published jobs can be displayed on an organization's public Career Page.
- Candidates can view public job postings and apply without accessing the recruiter dashboard.

---

# 🛠️ Tech Stack

| Layer                  | Technologies                                   |
| ---------------------- | ---------------------------------------------- |
| Frontend               | React.js, TypeScript, Vite                     |
| Styling                | Tailwind CSS, Radix UI                         |
| Backend                | Node.js, Express.js, TypeScript                |
| APIs                   | REST APIs                                      |
| Database               | MySQL                                          |
| Database Layer         | Knex.js                                        |
| Authentication         | JWT / SSO-related authentication flow          |
| Cache / Infrastructure | Redis configuration                            |
| AI                     | Anthropic / OpenAI-compatible AI configuration |
| File Uploads           | Multer                                         |
| PDF Generation         | Puppeteer / Handlebars                         |
| Package Manager        | pnpm                                           |
| Architecture           | Monorepo / Workspace-based application         |

---

# 📁 Project Structure

```text
HireFlow/
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── .env
│
└── packages/
    │
    ├── client/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    │   └── vite.config.ts
    │
    ├── server/
    │   ├── src/
    │   │   ├── api/
    │   │   ├── config/
    │   │   ├── db/
    │   │   ├── services/
    │   │   ├── jobs/
    │   │   └── index.ts
    │   └── package.json
    │
    └── shared/
        └── src/
```

### Client

The `client` package contains the React frontend.

```text
packages/client/
```

It handles:

- User interface
- Routing
- Forms
- Dashboard pages
- Recruitment workflows
- API communication
- Candidate and recruiter views

The Vite development server runs on:

```text
http://localhost:5179
```

### Server

The `server` package contains the Node.js + Express backend.

```text
packages/server/
```

It handles:

- REST APIs
- Business logic
- Authentication
- Database operations
- Recruitment workflows
- File uploads
- AI-related services
- Email-related functionality

The backend runs on:

```text
http://localhost:4500
```

### Shared

The `shared` package contains reusable TypeScript types and shared application definitions used across packages.

---

# 🗄️ Database

HireFlow uses **MySQL** as its relational database.

The primary recruitment database is:

```text
emp_recruit
```

The application uses **Knex.js** for database connectivity and migrations.

Database migrations are stored under:

```text
packages/server/src/db/migrations/
```

The project contains migrations for different recruitment-related modules and features.

Examples include:

- Job postings
- Candidates
- Applications
- Interviews
- Offers
- Onboarding
- Referrals
- Analytics
- Resume scoring
- Pipeline configuration
- Background checks
- Surveys
- Assessments

---

# ⚙️ Installation & Setup

## 1. Prerequisites

Make sure the following are installed:

- Node.js 20+
- pnpm 9+
- MySQL 8+
- Git

Redis is also configured by the project for supported infrastructure/queue functionality.

---

## 2. Clone the Repository

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd HireFlow
```

---

## 3. Install Dependencies

From the project root:

```bash
pnpm install
```

This installs dependencies for the workspace packages.

---

# 🔐 Environment Configuration

The project reads the environment configuration from the **root `.env` file**.

Create:

```text
HireFlow/.env
```

Example:

```env
NODE_ENV=development

# Server
PORT=4500
HOST=0.0.0.0

# Recruitment Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=emp_recruit

# EmpCloud Database
EMPCLOUD_DB_HOST=localhost
EMPCLOUD_DB_PORT=3306
EMPCLOUD_DB_USER=root
EMPCLOUD_DB_PASSWORD=your_mysql_password
EMPCLOUD_DB_NAME=empcloud

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_SECRET=change-this-development-secret
JWT_ACCESS_EXPIRY=2h
JWT_REFRESH_EXPIRY=7d

# Client
CLIENT_URL=http://localhost:5179
CORS_ORIGIN=http://localhost:5179

# Public URLs
SERVER_PUBLIC_URL=http://localhost:4500
PUBLIC_SITE_BASE_URL=http://localhost:5179

# Email - development example
EMAIL_PROVIDER=smtp
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=recruit@empcloud.com

# AI
AI_PROVIDER=none
```

> Do not commit real passwords, API keys, JWT secrets, or other credentials to GitHub.

AI providers can be configured separately when AI functionality is required.

---

# 🗃️ Database Setup

Start MySQL:

```bash
sudo systemctl start mysql
```

Login:

```bash
mysql -u root -p
```

Create the recruitment database:

```sql
CREATE DATABASE emp_recruit;
```

If your local setup also uses the EmpCloud database:

```sql
CREATE DATABASE empcloud;
```

Exit MySQL:

```sql
exit;
```

---

# 🔄 Run Database Migrations

From the project root:

```bash
pnpm db:migrate
```

This runs the recruitment database migrations.

The migration command uses the project's migration files to create/update the required database tables.

---

# 🌱 Seed Database

If sample/default data is required:

```bash
pnpm db:seed
```

The seed process initializes the configured recruitment data.

The application also initializes the required EmpCloud-side database schema during server startup when the configured EmpCloud database is available.

---

# ▶️ Run the Application

Start both frontend and backend together:

```bash
pnpm dev
```

The application starts:

### Frontend

```text
http://localhost:5179
```

### Backend API

```text
http://localhost:4500
```

The Vite frontend proxies API requests to the backend.

---

# 🧩 Run Frontend and Backend Separately

### Start Backend

```bash
pnpm dev:server
```

Backend:

```text
http://localhost:4500
```

### Start Frontend

In another terminal:

```bash
pnpm dev:client
```

Frontend:

```text
http://localhost:5179
```

---

# 🏗️ Build the Project

Build all workspace packages:

```bash
pnpm build
```

### Build only the frontend

```bash
pnpm build:client
```

### Build only the backend

```bash
pnpm build:server
```

---

# 🚀 Start Production Backend

After building:

```bash
pnpm --filter @emp-recruit/server start
```

The backend uses the compiled files from:

```text
packages/server/dist/
```

---

# 🔌 API

The backend exposes REST APIs for different recruitment modules.

Main API areas include:

```text
/api
```

Examples of functionality include:

- Jobs
- Candidates
- Applications
- Interviews
- Offers
- Onboarding
- Referrals
- Analytics
- Resume scoring
- Pipeline management
- Candidate portal
- Career pages
- Surveys
- Assessments

The local backend runs on:

```text
http://localhost:4500
```

---

# 🔄 Frontend ↔ Backend Communication

The frontend communicates with the Node.js/Express backend through REST APIs.

Development requests are proxied by Vite:

```text
React Frontend
      ↓
Vite Proxy
      ↓
Express REST API
      ↓
Knex.js
      ↓
MySQL
```

This structure helped me understand how a full-stack application connects the UI, API layer, business logic, and database.

---

# 🔐 Authentication & Security

The application includes authentication and authorization-related functionality.

The backend configuration supports:

- JWT
- Access tokens
- Refresh tokens
- Role-based access
- CORS configuration
- Request validation
- Authentication middleware
- Environment-based secrets

Development and production environments use different configuration requirements.

---

# 🧠 What I Learned From This Project

Working on HireFlow helped me gain practical experience with:

### Frontend

- React.js
- TypeScript
- Vite
- React routing
- Component-based UI
- API integration
- Forms and data handling

### Backend

- Node.js
- Express.js
- REST API development
- Middleware
- Authentication
- Request validation
- Service-based backend organization

### Database

- MySQL
- Knex.js
- Database migrations
- Relational data modeling
- CRUD operations
- Multiple related entities

### Full-Stack Development

- Frontend/backend integration
- API-based communication
- Environment configuration
- Existing codebase understanding
- Debugging
- Build processes
- Local development setup

---

# 💡 Why I Built This Project

I wanted to understand how a larger, real-world style application works instead of limiting my learning to small standalone CRUD projects.

For this reason, I explored the open-source **EMP Recruit** project from EmpCloud, studied its existing structure and workflows, and adapted/enhanced it as my own portfolio project.

This gave me experience with the type of situation developers can encounter in professional environments, where they need to:

1. Understand an existing codebase
2. Identify how different modules work
3. Understand existing APIs and database structures
4. Make changes without breaking existing functionality
5. Build and test the application
6. Add or modify features according to requirements

---

# 👩‍💻 Author

**Nandini**

Full Stack Developer

---

## ⭐ Project Focus

**Understanding an existing real-world style application → adapting it → enhancing it → running it end-to-end → learning how full-stack systems work together.**
