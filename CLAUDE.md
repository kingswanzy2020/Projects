# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **portfolio/documentation repository**, not a software codebase. It showcases completed DevOps and cloud engineering projects (mostly from NextWork learning tracks, then extended). There is no build system, test suite, linter, or package manager — nothing to build or run.

## Layout

Projects are grouped into kebab-case category directories:

- `ci-cd/` — Jenkins+SonarQube pipeline, 7-day AWS CodePipeline challenge, GitHub Actions projects, AI PR review
- `kubernetes/` — GitOps with ArgoCD, Helm CI/CD + monitoring, cluster fundamentals
- `infrastructure-as-code/` — Enterprise Terraform GitOps, Terraform S3
- `aws/` — serverless-lead-capture (the only project with actual code: `Ebook/` static site + Lambda in `Extra/`), three-tier architecture, IAM, Aurora, S3, ECR projects
- `ai-devops/` — AI log analysis/incident response, AI security scanner, RAG API series (FastAPI → Docker → Kubernetes)
- `observability/` — Grafana MCP dashboards
- `drafts/` — unfinished work (excluded from the root README index)

Each project typically contains: `README.md`, `Screenshots/`, and for flagship projects `architecture.png`, `cover.png`, `certificate.pdf`.

## README conventions

- **Root `README.md`** is the portfolio landing page: animated capsule-render header, typing SVG, skillicons, featured-project cards, categorized `<details>` index of in-repo projects, a table of the author's standalone GitHub repos, and GitHub stats cards. Keep the project index in sync when adding/moving projects.
- **Flagship project READMEs** (gitops-argocd-pipeline, jenkins-sonarqube-pipeline, helm-cicd-monitoring, enterprise-terraform-gitops, ai-log-analysis-incident-response, serverless-lead-capture) follow a fixed structure: title + shield badges → one-line pitch blockquote → `🎯 The Problem` → `🏗️ Architecture` (local diagram + Mermaid flowchart) → `🔧 Implementation Highlights` → `📊 Results & KPIs` table → `📸 Proof` screenshots → `🧰 Skills Demonstrated` → `<sub>` footer crediting NextWork with certificate link. Match this format when promoting more projects to flagship status.
- **Remaining project READMEs** still use the older NextWork step-by-step export format (NextWork logo, "In this step, I'm..."). Converting them to the flagship format is the standing follow-up task.
- Author is **Ahmed Tetteh** (kingsleyswanzy@gmail.com), GitHub `kingswanzy2020`. Some step screenshots are hotlinked from `learn.nextwork.org`; architecture diagrams should be committed locally.

## Working in this repo

- New projects: create a kebab-case directory under the right category, add README + assets, update the root README index, commit as "Add <project name> project".
- Some legacy filenames (Screenshots) still contain spaces — always quote paths in shell commands.
