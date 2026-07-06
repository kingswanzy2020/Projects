# Connect a Web App to Amazon Aurora

![Aurora](https://img.shields.io/badge/Amazon%20Aurora-527FFF?style=flat-square&logo=amazonrds&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Apache](https://img.shields.io/badge/Apache-D22128?style=flat-square&logo=apache&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL%20CLI-4479A1?style=flat-square&logo=mysql&logoColor=white)

> The full LAMP-on-AWS connection: an Apache/PHP app on EC2 writing user data to the [Aurora cluster](../aurora-database-ec2), with every write independently verified through SQL queries in the MySQL CLI.

*Part 2 of 2 — the cluster was provisioned in [aurora-database-ec2](../aurora-database-ec2).*

## 🎯 The Problem

A web app without persistence forgets everything; a database without a connected app stores nothing. The unglamorous-but-essential skill is the wiring in between: SSH'ing into compute with correct key permissions, installing the right driver stack, externalizing connection credentials, and *proving* data lands where it should.

## 🔧 What I Built

- **Hardened SSH access** — key file locked to owner-read-only (the permission fix `ssh` refuses to work without) before connecting to the instance.
- **The serving stack on EC2**: Apache (web server), PHP, `php-mysqli` (the DB driver), and `mariadb105` (MySQL-compatible client tooling).
- **Externalized connection config** — database credentials in a separate `dbinfo.inc` include file rather than hardcoded in page code.
- **A PHP app writing to Aurora** — form input persisted to the MySQL database and reflected back on the page in near-real time.
- **Independent verification** — logged into the database with the MySQL CLI and confirmed the tables, fields, and inserted rows directly with SQL, not just trusting the app's own display.

## 📊 Results

| Metric | Outcome |
|---|---|
| End-to-end data flow | Browser form → PHP → Aurora → verified via SQL — working |
| Credentials in page source | **None** — isolated in an include file |
| Verification | Double-checked at the database layer with the MySQL CLI |
| Total time | **~1.5 hours** including setup |

## 🧰 Skills Demonstrated

`LAMP stack` · `Amazon Aurora/MySQL` · `PHP + mysqli` · `SSH & Linux permissions` · `SQL verification` · `Config externalization`

---

<sub>Built by **Ahmed Tetteh** as part of a [NextWork](http://learn.nextwork.org/projects/aws-databases-webapp) track.</sub>
