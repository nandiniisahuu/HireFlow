# HireFlow — Project Technical Overview

## Status

**Active Full-Stack Independent Project**

HireFlow is an independent full-stack recruitment and applicant tracking platform adapted and enhanced from the open-source **EMP Recruit** project by EmpCloud.

The project focuses on understanding and working with a real-world style recruitment codebase and its end-to-end hiring workflows.

> **Note:** HireFlow is an independent portfolio project. It is not an official EMP Cloud product and does not represent employment with EmpCloud.

---

## Project Architecture

HireFlow is structured as a monorepo containing separate frontend, backend, and shared packages.

```text
HireFlow/
│
├── packages/
│   ├── client/          # React frontend
│   ├── server/          # Node.js + Express backend
│   └── shared/          # Shared TypeScript definitions
│
├── package.json
├── pnpm-workspace.yaml
└── README.md
```
