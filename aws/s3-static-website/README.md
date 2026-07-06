# Static Website Hosting on Amazon S3

![Amazon S3](https://img.shields.io/badge/Amazon%20S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![Static Site](https://img.shields.io/badge/Hosting-static%20website-2C3E50?style=flat-square)

> A live website served straight from an S3 bucket — no web server to run — with the access model (ACLs vs. bucket policies) configured deliberately, including a policy that even blocks the bucket owner from deleting the site's index file.

## 🎯 The Problem

Running a whole server to host static HTML is wasted money and maintenance. S3 serves static sites natively — but its layered access model (Block Public Access, ACLs, bucket policies) confuses most first-timers into either a 403 wall or an accidentally world-writable bucket. This project works through that model properly.

## 🔧 What I Built

- **An S3 bucket in `ap-northeast-2` (Seoul)** — region chosen for proximity/latency — with `index.html` and the site's asset folder uploaded.
- **Static website hosting enabled**, producing a public bucket-endpoint URL.
- **The 403 debugging path** — the endpoint initially returned `403 Forbidden` because objects default to private; resolved by disabling Block Public Access and granting object-level public read via ACLs — understanding each switch rather than flipping everything blindly.
- **A guardrail bucket policy** — a JSON policy denying deletion of `index.html`, tested by trying to delete it myself and getting refused. Deny applies even to the bucket owner.
- **The ACL vs. bucket-policy distinction** in practice: ACLs for per-object grants, bucket policies for whole-bucket JSON-defined rules.

## 📊 Results

| Metric | Outcome |
|---|---|
| Web servers managed | **Zero** — S3 serves the site directly |
| Site availability | Live on the public bucket endpoint |
| Accidental-deletion protection | Bucket policy blocks deleting the index file — verified against my own admin access |
| Time to live site | **~1.5 hours** including access-model debugging |

## 🧰 Skills Demonstrated

`Amazon S3` · `Static website hosting` · `Bucket policies (JSON)` · `ACLs` · `Block Public Access` · `Access debugging`

---

<sub>Built by **Ahmed Tetteh** as part of a [NextWork](http://learn.nextwork.org/projects/aws-host-a-website-on-s3) track — [certificate](legendary-aws-host-a-website-on-s3.pdf). Site files in [`Website files/`](<Website files>).</sub>
