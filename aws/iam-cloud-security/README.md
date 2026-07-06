# Cloud Security with AWS IAM — Tag-Based Least Privilege

![IAM](https://img.shields.io/badge/AWS%20IAM-DD344C?style=flat-square&logo=amazonwebservices&logoColor=white)
![EC2](https://img.shields.io/badge/Amazon%20EC2-FF9900?style=flat-square&logo=amazonwebservices&logoColor=white)
![Policy](https://img.shields.io/badge/JSON-policy%20as%20code-2C3E50?style=flat-square&logo=json&logoColor=white)

> A least-privilege IAM setup where developers get full control of **development-tagged** EC2 instances, read-only visibility everywhere else, and a hard deny on touching production — verified live and in the IAM Policy Simulator.

## 🎯 The Problem

The most common cloud security failure isn't an exotic exploit — it's an over-permissioned user stopping, deleting, or modifying a production resource by accident. Access needs to be scoped to what each role actually requires, and *tested* before anyone relies on it.

## 🔧 What I Built

- **Environment tagging strategy** — EC2 instances tagged `Environment: production` / `Environment: development`, making the environment boundary machine-enforceable rather than tribal knowledge.
- **A hand-written JSON policy** with three statements: full EC2 actions **conditioned on** the `development` tag, read-only `Describe*` across all EC2, and an explicit **deny** on creating/deleting tags (so nobody promotes themselves by re-tagging an instance — the sneaky bypass this design closes).
- **Group-based access management** — policy attached to an IAM user group, not individuals, so onboarding a new developer is "add to group."
- **Live verification as the restricted user** — stopping the production instance was **denied**; stopping the development instance **succeeded**. Console panels outside the policy scope showed Access Denied, confirming default-deny behavior.
- **Policy Simulator validation** — simulated `StopInstances` and `DeleteTags`, and learned the evaluation subtlety first-hand: **explicit deny always beats allow**, and resource-level scoping in the simulator matters for accurate results.
- **Account alias** for a human-friendly sign-in URL.

## 📊 Results

| Metric | Outcome |
|---|---|
| Production instances modifiable by developers | **Zero** — explicitly denied and live-tested |
| Tag tampering (privilege-escalation path) | **Blocked** by explicit deny |
| Policy verified before rollout | ✔ — both via Policy Simulator and real console attempts |
| Access administration | Group-level — one policy governs every developer |

## 🧰 Skills Demonstrated

`AWS IAM` · `JSON policy authoring` · `Tag-based (ABAC-style) access control` · `Policy Simulator` · `Users & groups` · `Explicit-deny evaluation logic`

---

<sub>Built by **Ahmed Tetteh** as part of a [NextWork](http://learn.nextwork.org/projects/aws-security-iam) track — [certificate](legendary-aws-security-iam.pdf). ~2 hours.</sub>
