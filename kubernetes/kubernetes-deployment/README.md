# Deploy a Containerized Backend to Amazon EKS

![EKS](https://img.shields.io/badge/Amazon%20EKS-FF9900?style=flat-square&logo=amazonwebservices&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![ECR](https://img.shields.io/badge/Amazon%20ECR-FF9900?style=flat-square&logo=amazonwebservices&logoColor=white)

> A real backend API — Flask service proxying the Hacker News API — containerized, pushed to a private Amazon ECR registry, and deployed onto an EKS cluster.

## 🎯 The Problem

An app that only runs on one machine isn't deployable at scale. Getting a backend into Kubernetes requires solving the full supply chain: build a reproducible image, store it in a registry the cluster trusts, and hand it to the orchestrator — plus the Linux permission model that trips up most first-time Docker users on EC2.

## 🔧 What I Built

- **Cluster provisioning with `eksctl`** — repeating the EKS setup from [part 1](../launch-kubernetes-cluster), this time in ~90 minutes end-to-end including the app deployment.
- **Containerized backend** — cloned the Flask API (fetches and formats Hacker News data as JSON) and built its Docker image from the project `Dockerfile`.
- **Fixed the Docker permission model properly** — instead of `sudo` on every command, added `ec2-user` to the `docker` group (`sudo usermod -aG docker ec2-user`) for durable, least-friction access.
- **Private image registry** — pushed the image to **Amazon ECR**, giving the cluster a versioned, access-controlled image source tightly integrated with EKS.

## 📊 Results

| Metric | Outcome |
|---|---|
| End-to-end time (cluster + build + push) | **~1.5 hours** |
| Image supply chain | Private ECR registry — versioned tags, no public image dependencies |
| Repeatability | Same `eksctl` + Dockerfile flow reproduces the environment from scratch |

## 🧰 Skills Demonstrated

`Amazon EKS` · `eksctl` · `Docker` · `Amazon ECR` · `Linux permissions` · `Flask backend anatomy (Dockerfile, requirements.txt)`

---

<sub>Built by **Ahmed Tetteh** as part of a [NextWork](http://learn.nextwork.org/projects/aws-compute-eks2) track. Part 2 of the Kubernetes series — starts at [launch-kubernetes-cluster](../launch-kubernetes-cluster).</sub>
