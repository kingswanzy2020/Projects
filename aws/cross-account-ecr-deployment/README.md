# Cross-Account App Deployment with Amazon ECR

![Amazon ECR](https://img.shields.io/badge/Amazon%20ECR-FF9900?style=flat-square&logo=amazonwebservices&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Elastic Beanstalk](https://img.shields.io/badge/Elastic%20Beanstalk-FF9900?style=flat-square&logo=amazonwebservices&logoColor=white)
![IAM](https://img.shields.io/badge/IAM-least%20privilege-DD344C?style=flat-square&logo=amazonwebservices&logoColor=white)

> A two-person, two-account deployment exercise: each side builds and pushes a Docker image to their private ECR registry, then grants the *other* AWS account exactly enough access to pull and deploy it on Elastic Beanstalk — **sharing an app without sharing an account**.

## 🎯 The Problem

Real organizations run many AWS accounts (per team, per environment), and teams constantly need to consume each other's container images. The naive fixes are both wrong: sharing credentials destroys the security boundary, and making registries public leaks internal software. The right answer is scoped, auditable cross-account resource policies — which is exactly what this project practices, including the 403s you hit when you get them wrong.

## 🔧 What I Built

- **A custom Nginx-based image** (Dockerfile + custom `index.html`) pushed to a **private ECR repository**, authenticated via `aws ecr get-login-password` piped into `docker login`.
- **A dedicated IAM user** for CLI access with `AmazonEC2ContainerRegistryFullAccess` — no root credentials in the terminal.
- **Cross-account access via ECR repository policies** — hit the expected `403 Forbidden` pulling my buddy's image, then fixed it properly by adding each other's IAM user ARNs to the repository policy.
- **Elastic Beanstalk deployment from ECR** using a `Dockerrun.aws.json` (single-container spec, image reference, port 80) — and debugged the second permission layer: the *instance role* also needed ECR pull access, not just the human user. Both ARNs added, environment rebuilt, both sites live.
- **CPU architecture lesson** — images build for a specific architecture (x86-64 vs ARM64); mismatched hosts need multi-arch builds.

## 📊 Results

| Metric | Outcome |
|---|---|
| Credentials shared between accounts | **Zero** — access granted via repository policies, scoped to specific ARNs |
| Both apps deployed cross-account | ✔ — each account running the other's image on Elastic Beanstalk |
| Permission model understanding | Two distinct layers debugged: human IAM pull access **and** service/instance-role pull access |
| Auditability | Every cross-account grant is an explicit, reviewable policy statement |

## 🧰 Skills Demonstrated

`Amazon ECR` · `Repository policies` · `Cross-account IAM` · `Docker` · `Elastic Beanstalk` · `Dockerrun.aws.json` · `Multi-arch awareness`

---

<sub>Built by **Ahmed Tetteh** with a project buddy as part of a [NextWork](http://learn.nextwork.org/projects/aws-compute-ecr) multiplayer track — [certificate](legendary-aws-compute-ecr.pdf). ~4 hours.</sub>
