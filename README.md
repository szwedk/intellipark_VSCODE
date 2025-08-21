# IntelliPark VS Code Workspace

This repository contains the developer workspace configuration for IntelliPark, a smart parking platform built to modernize campus parking operations through AI, computer vision, IoT, and real-time data visualization.

## What is IntelliPark

IntelliPark is an integrated smart parking management system built for university campuses. It leverages cameras, machine learning, computer vision, and IoT devices to deliver real-time parking space monitoring, license plate recognition, and congestion prediction through an intuitive web and mobile application.

The platform assists students, faculty, and public safety teams by improving access to parking information, reducing congestion, identifying unauthorized vehicles, and providing live analytics to inform operational decisions.

## Key Features

- Real-time availability tracking
- License plate recognition (LPR)
- Vehicle identification and violation detection
- Hot-time prediction for congestion zones
- Administrative panel for oversight and control
- Web and mobile frontends with live sync

## Workspace Overview

This repo contains:
- VS Code settings and tasks for IntelliPark development
- Recommended extensions for consistency across machines
- Dev container configuration for reproducible environments
- Project snippets, launch configs, and helper scripts

## Quick Start

```bash
git clone https://github.com/szwedk/intellipark_VSCODE.git
cd intellipark_VSCODE
code .
```

When prompted, install recommended extensions. If using dev containers, select “Reopen in Container.”

## VS Code Structure

```
.vscode/               # Editor settings, launch configs, tasks
.devcontainer/         # Dev container definition (optional)
snippets/              # Shared code snippets (optional)
scripts/               # Automation helpers
docs/                  # Architecture, API, or usage docs
```

### Example Settings

```json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.formatOnSave": true,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}
```

### Recommended Extensions

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "streetsidesoftware.code-spell-checker"
  ]
}
```

## Tasks

You can define tasks in `.vscode/tasks.json`, for example:

```json
{
  "label": "Start",
  "type": "shell",
  "command": "npm start",
  "isBackground": true
}
```

Other useful tasks: `Build`, `Test`, `Lint`, `Format`.

## Development Timeline

- 🟢 Requirements: Complete
- ⚙️ Beta release: February 20, 2024
- 🚀 Full launch: May 7, 2024

## Deliverables

- IntelliPark App (Web + Mobile)
- Admin dashboard
- API + system architecture docs
- Public safety training modules
- Post-launch support plan


Kamil Szwed • [github.com/szwedk](https://github.com/szwedk)
