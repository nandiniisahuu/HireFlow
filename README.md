# HireFlow

> AI-powered recruitment and applicant tracking system designed to simplify the complete hiring workflow — from job posting and candidate applications to interviews, AI evaluation, offers, and onboarding.

## 📌 Overview

HireFlow is a full-stack recruitment management platform built for HR teams and recruiters.

It provides a centralized system to manage job postings, candidates, applications, interviews, recruitment automation, offers, onboarding, and analytics.

The platform also includes AI-powered recruitment features that assist recruiters in evaluating candidates and streamlining the hiring process.

## ✨ Features

### 🔐 Authentication & User Management

- User registration and login
- Secure authentication
- Role-based access
- Organization management
- Token-based authentication
- Session management

### 💼 Job Management

- Create, edit, and manage job postings
- Publish and close job postings
- Public and private job visibility
- Department and location management
- Employment type and work mode
- Salary and experience information
- Job skills and requirements

### 🌐 Career Page

- Public company career page
- Published job listings
- Online job applications
- Resume upload
- Cover letter submission
- Candidate information collection

### 👥 Candidate Management

- Centralized candidate profiles
- Resume management
- Skills and experience tracking
- Candidate application history
- Candidate source tracking
- Candidate comparison
- Duplicate candidate detection and review

### 📋 Applicant Tracking System (ATS)

Candidate applications can move through a recruitment pipeline:

```text
Applied → Screened → Interview → Offer → Hired
```

Additional stages include:

- Rejected
- Withdrawal

### 🤖 AI-Powered Recruitment

- AI resume evaluation
- Candidate scoring
- Skill extraction
- Candidate ranking
- AI-assisted job description generation
- AI interview functionality
- AI-based candidate assessment

### 🎤 Interview Management

- Schedule interviews
- Technical and HR interview rounds
- Interview duration management
- Online interview support
- Jitsi meeting integration
- Interview panel management
- Interview feedback
- Interview recordings
- Interview transcripts
- Calendar integration

### 📄 Offer Management

- Create offers
- Offer approval workflow
- Salary and benefits management
- Offer expiry dates
- Offer templates
- Offer letter generation
- Candidate offer tracking

### 🧑‍💼 Employee Onboarding

- Onboarding checklists
- New-hire tasks
- Welcome and first-day tasks
- Account and system-access tasks
- Workstation preparation
- Team introduction tasks

### ⚙️ Recruitment Automation

- Status-based automation
- Interview workflow automation
- Automatic interview scheduling
- Automated candidate emails
- Recruitment workflow rules

### 📊 Recruitment Analytics

Track recruitment activity including:

- Job postings
- Applications
- Candidates
- Interviews
- Offers
- Hiring activity
- Recruitment pipeline

### 📧 Email Management

- Email templates
- Candidate notifications
- Application status emails
- Interview invitations
- Recruitment automation emails
- Offer-related communication

### 📝 Custom Application Forms

Create customized application forms to collect additional candidate information during the application process.

### 🔎 Duplicate Candidate Detection

Identify possible duplicate candidate records using candidate information such as email, phone number, and candidate details.

### 🔗 Job Board Integration

Support for external job board publishing and integration.

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- React Router
- HTML5
- CSS

### Backend

- Node.js
- Express.js
- TypeScript
- REST APIs

### Database

- MySQL
- Knex.js

### Caching

- Redis

### Authentication & Security

- JWT
- HTTP-only cookies
- Password hashing
- Role-based authorization
- Input validation
- CORS

### AI

- AI-powered recruitment
- AI resume scoring and evaluation
- AI candidate assessment
- AI interview functionality
- AI-assisted job description generation

### Development Tools

- Git
- GitHub
- VS Code
- pnpm

## 🏗️ Project Structure

```text
HireFlow/
├── packages/
│   ├── client/
│   │   └── src/
│   │       ├── api/
│   │       ├── components/
│   │       ├── pages/
│   │       ├── hooks/
│   │       └── ...
│   ├── server/
│   │   └── src/
│   │       ├── api/
│   │       ├── services/
│   │       ├── middleware/
│   │       └── ...
│   └── shared/
│       └── src/
├── docs/
├── e2e/
├── docker/
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## 🔄 Recruitment Workflow

```text
Create Job
    ↓
Publish Job
    ↓
Candidate Applies
    ↓
Candidate Profile Created
    ↓
AI Resume Evaluation
    ↓
Application Screening
    ↓
Interview Scheduling
    ↓
Interview & Feedback
    ↓
Offer Creation
    ↓
Offer Approval
    ↓
Offer Sent
    ↓
Offer Accepted
    ↓
Employee Onboarding
    ↓
Hired
```

## 🤖 AI Recruitment Workflow

```text
Candidate Resume
       ↓
Resume Processing
       ↓
Skill Extraction
       ↓
Candidate Evaluation
       ↓
AI Score
       ↓
Candidate Ranking
       ↓
Recruiter Review
```

AI features are intended to assist recruiters and support human decision-making.

## 📊 Main Modules

| Module          | Purpose                             |
| --------------- | ----------------------------------- |
| Dashboard       | Recruitment overview                |
| Jobs            | Job creation and management         |
| Career Page     | Public job listings                 |
| Applications    | Track candidate applications        |
| Candidates      | Manage candidate profiles           |
| Interviews      | Schedule and manage interviews      |
| Offers          | Manage offers and offer letters     |
| Onboarding      | Manage new-hire tasks               |
| Analytics       | Recruitment insights                |
| Recruitment Ops | Automation and candidate operations |
| Settings        | System configuration                |

## 🔒 Security

HireFlow uses common application security practices including:

- Password hashing
- JWT authentication
- HTTP-only cookies
- Input validation
- CORS configuration
- Role-based authorization
- Environment-based secrets
- Secure API communication

## 👩‍💻 Author

**Nandini**

Full Stack Developer
