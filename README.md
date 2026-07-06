<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1b27,50:1F6FEB,100:39D353&height=200&section=header&text=Ahmed%20Tetteh&fontSize=60&fontColor=ffffff&animation=fadeIn&desc=DevOps%20%7C%20Cloud%20%7C%20Platform%20Engineering&descSize=20&descAlignY=75" alt="banner" width="100%"/>

<a href="https://github.com/kingswanzy2020">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=1F6FEB&center=true&vCenter=true&width=600&lines=CI%2FCD+Pipelines+%C2%B7+Jenkins+%C2%B7+GitHub+Actions;Kubernetes+%C2%B7+Helm+%C2%B7+ArgoCD+%C2%B7+GitOps;Terraform+%C2%B7+AWS+%C2%B7+Infrastructure+as+Code;Observability+%C2%B7+Prometheus+%C2%B7+Grafana;AI-Assisted+DevOps+%26+Incident+Response" alt="typing banner"/>
</a>

<br/>

[![Email](https://img.shields.io/badge/Email-kingsleyswanzy%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kingsleyswanzy@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-kingswanzy2020-181717?style=for-the-badge&logo=github)](https://github.com/kingswanzy2020)
[![Live Project](https://img.shields.io/badge/Live-kahmedt.com-39D353?style=for-the-badge&logo=amazonaws&logoColor=white)](https://kahmedt.com)

</div>

---

## 👋 About

DevOps engineer focused on **shipping software safely and repeatably**: GitOps-driven Kubernetes delivery, CI/CD pipelines with enforced quality gates, infrastructure as code on AWS, and monitoring that catches failures before users do. This repository is my hands-on portfolio — every project was built, broken, and fixed by me, with architecture diagrams, screenshots, and (where possible) the real pipeline and infrastructure code.

## 🛠️ Toolbox

<div align="center">

<img src="https://skillicons.dev/icons?i=aws,kubernetes,docker,terraform,jenkins,githubactions,prometheus,grafana,ansible,python,bash,git,linux,maven,nginx,mysql&perline=8" alt="tools"/>

</div>

| Domain | Tools I've used in the projects below |
|---|---|
| **CI/CD** | Jenkins, SonarQube, GitHub Actions, AWS CodePipeline/CodeBuild/CodeDeploy/CodeArtifact |
| **Containers & Orchestration** | Docker, Kubernetes, Helm, Kustomize |
| **GitOps & IaC** | ArgoCD, Sealed Secrets, Terraform, CloudFormation |
| **Cloud (AWS)** | Lambda, API Gateway, S3, CloudFront, Route 53, SES, DynamoDB, Aurora, EC2, ECR, IAM, VPC |
| **Observability** | Prometheus, Grafana, CloudWatch |
| **AI for Ops** | LLM-assisted log analysis, AI code review, RAG APIs, MCP |

## 🚀 Featured Projects

<table>
<tr>
<td width="50%">

### ⚙️ [GitOps Pipeline with ArgoCD](kubernetes/gitops-argocd-pipeline)
Every cluster change flows through a pull request — ArgoCD auto-syncs, detects drift, and self-heals in seconds. Secrets live encrypted in Git via Sealed Secrets.

`ArgoCD` `Kustomize` `Sealed Secrets` `Kubernetes`

</td>
<td width="50%">

### 🏗️ [Enterprise Terraform GitOps](infrastructure-as-code/enterprise-terraform-gitops)
Infrastructure changes reviewed like code: every PR gets an automated `terraform plan`, applies happen only after approval — no console clicking, no drift.

`Terraform` `GitHub Actions` `AWS` `GitOps`

</td>
</tr>
<tr>
<td width="50%">

### 🔁 [Jenkins + SonarQube CI/CD](ci-cd/jenkins-sonarqube-pipeline)
Every commit is automatically built, unit-tested, and gated on a SonarQube quality gate before it can ship — feedback in minutes instead of manual review cycles.

`Jenkins` `SonarQube` `Maven` `Docker`

</td>
<td width="50%">

### 📦 [Kubernetes CI/CD with Helm + Monitoring](kubernetes/helm-cicd-monitoring)
Versioned, one-command releases and rollbacks with Helm, with Prometheus/Grafana wired in so failures page me before users notice.

`Helm` `Kubernetes` `Prometheus` `Grafana`

</td>
</tr>
<tr>
<td width="50%">

### 🤖 [AI Log Analysis & Incident Response](ai-devops/ai-log-analysis-incident-response)
LLM-assisted triage that turns thousands of raw log lines into a root-cause summary — shrinking the slowest step of incident response from hours to seconds.

`AI` `CloudWatch` `Incident Response`

</td>
<td width="50%">

### 📚 [Serverless Lead Capture — live at kahmedt.com](aws/serverless-lead-capture)
Production e-book lead-capture platform: CloudFront + S3 frontend, API Gateway → Lambda → DynamoDB + SES backend. $0 idle cost, HTTPS everywhere, scales automatically.

`Lambda` `API Gateway` `DynamoDB` `SES` `CloudFront`

</td>
</tr>
</table>

## 📂 All Projects in This Repo

<details open>
<summary><b>☸️ Kubernetes & GitOps</b></summary>

| Project | What it proves |
|---|---|
| [GitOps Pipeline with ArgoCD](kubernetes/gitops-argocd-pipeline) | PR-driven cluster changes, drift self-healing, encrypted secrets in Git |
| [K8s CI/CD with Helm & Monitoring](kubernetes/helm-cicd-monitoring) | Repeatable releases + rollback, Prometheus/Grafana alerting |
| [Launch a Kubernetes Cluster](kubernetes/launch-kubernetes-cluster) | Cluster bootstrap fundamentals |
| [Set Up Kubernetes Deployment](kubernetes/kubernetes-deployment) | Deployments, services, scaling basics |

</details>

<details open>
<summary><b>🔁 CI/CD</b></summary>

| Project | What it proves |
|---|---|
| [Jenkins + SonarQube Pipeline](ci-cd/jenkins-sonarqube-pipeline) | Build → test → quality gate automation |
| [7-Day AWS CI/CD Challenge](ci-cd/aws-devops-cicd-challenge) | Full AWS-native pipeline: CodeArtifact → CodeBuild → CodeDeploy → CloudFormation |
| [Automated Testing with GitHub Actions](ci-cd/github-actions-automated-testing) | Test automation on every push |
| [AI PR Review with Gemini](ci-cd/ai-pr-review-gemini) | LLM-powered code review in the pipeline |
| [First GitHub Actions AI Workflow](ci-cd/github-actions-ai-workflow) | AI-integrated workflow fundamentals |

</details>

<details open>
<summary><b>🏗️ Infrastructure as Code</b></summary>

| Project | What it proves |
|---|---|
| [Enterprise Terraform GitOps](infrastructure-as-code/enterprise-terraform-gitops) | Plan-on-PR, apply-on-merge infrastructure workflow |
| [S3 Buckets with Terraform](infrastructure-as-code/terraform-s3-buckets) | Terraform fundamentals: state, plan/apply lifecycle |

</details>

<details open>
<summary><b>☁️ AWS Cloud</b></summary>

| Project | What it proves |
|---|---|
| [Serverless Lead Capture (live)](aws/serverless-lead-capture) | Production event-driven serverless architecture |
| [Three-Tier Web Architecture](aws/three-tier-web-architecture) | CloudFront + Lambda/API Gateway + data tier |
| [Cross-Account App Deployment](aws/cross-account-ecr-deployment) | Multi-account ECR image sharing & IAM trust |
| [Docker App on Elastic Beanstalk](aws/docker-elastic-beanstalk) | Containerized deployment on managed AWS |
| [Cloud Security with IAM](aws/iam-cloud-security) | Least-privilege policies, users, groups |
| [Static Website on S3](aws/s3-static-website) | S3 hosting, bucket policies |
| [Aurora Database with EC2](aws/aurora-database-ec2) | Managed relational DB + compute |
| [Web App + Aurora](aws/aurora-web-app) | App-to-database connectivity |

</details>

<details open>
<summary><b>🤖 AI × DevOps</b></summary>

| Project | What it proves |
|---|---|
| [AI Log Analysis & Incident Response](ai-devops/ai-log-analysis-incident-response) | LLM-assisted root-cause triage |
| [AI Security Scanner for Python](ai-devops/ai-security-scanner) | Automated vulnerability detection with AI |
| [RAG API with FastAPI](ai-devops/rag-api-fastapi) → [Dockerized](ai-devops/rag-api-docker) → [on Kubernetes](ai-devops/rag-api-kubernetes) | Taking an AI service from laptop to cluster |

</details>

<details open>
<summary><b>📊 Observability</b></summary>

| Project | What it proves |
|---|---|
| [Grafana Dashboards via MCP](observability/grafana-mcp-dashboards) | AI-driven dashboard-as-conversation workflow |

</details>

## 🗃️ Other Repositories

Standalone repos that hold the **live code** behind several of the projects above, plus ongoing work:

| Category | Repo | Description |
|---|---|---|
| **SRE / Kubernetes** | [autonomous-sre](https://github.com/kingswanzy2020/autonomous-sre) | Autonomous incident response inside a Kubernetes cluster |
| **Kubernetes / Helm** | [fittrack](https://github.com/kingswanzy2020/fittrack) | Helm charts + Jenkins + Docker for a fitness app |
| **GitOps** | [gitops-demo](https://github.com/kingswanzy2020/gitops-demo) | The Git source-of-truth repo driving the ArgoCD pipeline |
| **IaC** | [terraform-gitops](https://github.com/kingswanzy2020/terraform-gitops) | Enterprise Terraform workflow (plan-on-PR) |
| **CI/CD** | [cicd-pipeline-app](https://github.com/kingswanzy2020/cicd-pipeline-app) | Application code for the Jenkins pipeline |
| **CI/CD** | [nextwork-web-project](https://github.com/kingswanzy2020/nextwork-web-project) | Java web app behind the 7-day AWS pipeline |
| **AI / Security** | [security-scanner](https://github.com/kingswanzy2020/security-scanner) | AI-powered vulnerability scanner |
| **AI / RAG** | [nextwork-rag-api](https://github.com/kingswanzy2020/nextwork-rag-api) | RAG API with its CI/CD pipeline |
| **Platform** | [petclinic-platform](https://github.com/kingswanzy2020/petclinic-platform) | Infrastructure code for an 8-service microservices platform |
| **Sandbox** | [Lab](https://github.com/kingswanzy2020/Lab) | Experiments and learning scratchpad |

## 📈 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=kingswanzy2020&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000" alt="GitHub stats" height="165"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kingswanzy2020&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000" alt="Top languages" height="165"/>

</div>

---

<div align="center">

*Most projects here were built through [NextWork](https://learn.nextwork.org) tracks and then extended; each project folder contains its full write-up, architecture diagram, screenshots, and certificate.*

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:39D353,50:1F6FEB,100:1a1b27&height=100&section=footer" alt="footer" width="100%"/>

</div>
