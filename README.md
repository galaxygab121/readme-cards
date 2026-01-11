# readme-cards

A lightweight TypeScript CLI that generates clean GitHub README “project cards” from a JSON file.

- Works great for profile READMEs, portfolio pages, and repo lists
- Outputs Markdown with consistent formatting and separators
- Built as a simple CLI you can run globally or inside any project

---

## Install

### Global (recommended)

```bash
npm i -g @galaxygab121/readme-cards
```

Run:
```bash
readme-cards --input projects.json
```

Project-local
```bash
npm i -D @galaxygab121/readme-cards
```

Run:
```bash
npx readme-cards --input projects.json
```

### Usage
1) Create an input file (example: projects.json)

```bash
[
  {
    "title": "Task Orchestrator Platform",
    "description": "Distributed job orchestration with Kafka, retries, and DLQs.",
    "tech": ["Java", "Kafka", "Docker"],
    "repoUrl": "https://github.com/galaxygab121/task-orchestrator-platform",
    "bullets": [
      "Kafka consumer groups for worker dispatch",
      "DLQ routing for failed jobs"
    ]
  },
  {
    "title": "Smart Task Scheduler",
    "description": "Benchmarked EDF/SJF/Priority scheduling strategies with multi-seed experiments.",
    "tech": ["Java", "Algorithms"],
    "repoUrl": "https://github.com/galaxygab121/smart-task-scheduler",
    "bullets": [
      "Multi-seed benchmarking for fair comparisons",
      "Pluggable strategies and reproducible outputs"
    ]
  }
]
```

### 2) Generate Markdown
```bash
readme-cards --input projects.json
```

### 3) (Optional) Write output to a file
```bash
readme-cards --input projects.json --output CARDS.md
Output format
Each entry becomes a Markdown “card” like:
```

### Project Title

Short description.

**Tech:** `TypeScript` `CLI`

[Repo](https://github.com/yourname/your-repo)

- Bullet 1
- Bullet 2

---
### CLI Options

```bash
readme-cards --input <file>
readme-cards --input <file> --output <file>
```

### Development
```bash
npm i
npm run test
npm run build
```