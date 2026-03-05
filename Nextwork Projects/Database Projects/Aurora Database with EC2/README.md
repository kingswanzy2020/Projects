<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Aurora Database with EC2

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-databases-aurora)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

## Connect a Web App to Amazon Aurora

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-aurora_44443546)

---

## Introducing Today's Project!

### What is Amazon Aurora?

Amazon Aurora is a type of relational database that stores highly related data in rows and colums (tabular format), and why it is useful because it provides higher perfomance for more demanding workloads than the standard DB engines.

### How I used Amazon Aurora in this project

In today's project, I used Amazon Aurora to create a MYSQL database and store all my user data for my web server.

### One thing I didn't expect in this project was...

One thing I didn't expect in this project was for the MYSQL dababase to have many configurable options to tweak the DB to your liking, and for it to easily connect to a computing resource, making your job as a developer easier- no need to login to your EC2 instance and install a plugin or third-party tool before you can connect to it.

### This project took me...

It took me approximately 30 mins to complete this project.

---

## In the first part of my project...

### Creating an Aurora Cluster

A relational database is a database that organizes data in a tabular form, which are simply collections of rows and columns. They are called relational because the rows and columns relate to one-another.

Aurora is a good choice when we need something large-scale, with peak performance and uptime. 

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-aurora_44443546)

---

## Halfway through I stopped!

I stopped creating my Aurora database because I needed an EC2 instance which will serve my web app to connect to the database.

### Features of my EC2 instance

I created a new key pair for my EC2 instance because it provides me with a way to securely authenticate and access my EC2 instance. It simply allows you to login to you virtual computer and run your processes or commands on there.

When I created my EC2 instance, I took particular note of the Public IPv4 address, the storage volume, and the security configurations, including SSH access.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-aurora_91b9fd1g)

---

## Then I could finish setting up my database

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-aurora_1fddb0b5)

Aurora Database uses clusters because a cluster consists of many nodes or virtual resources working together to distribute the workload, anbaling your data to always be available. The Aurora DB consists of a primary DB for write requests and multiple read replicas for read requests such as SELECT and aslo to serve as back-ups.

---

---
