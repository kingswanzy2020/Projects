<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Connect a Web App with Aurora

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-databases-webapp)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

## Connect a Web App to Amazon Aurora

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-webapp_1709b26b)

---

## Introducing Today's Project!

### What is Amazon Aurora?

Amazon Aurora is a type of relational database that stores highly related data in rows and colums (tabular format), and why it is useful because it provides higher perfomance for more demanding workloads than the standard DB engines.

### How I used Amazon Aurora in this project

In today's project, I used Amazon Aurora to create a MYSQL database and store all my user data for my web server. I built and connected my web application to the MYSQL database. Lastly, I verified all everything was working by installing the MYSQL CLI and running SQL queries to confirm the updates via the CLI.

### One thing I didn't expect in this project was...

One thing I didn't expect in this project was how quickly data is updated in near-real time on the database, and th e different tools required to communicate with the database - making it easy for us to verify everything.

### This project took me...

It took me approximately 1hr 30 mins, including setup and backgroup studies.

---

## Creating a Web App

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-webapp_b7999168)

To connect to my EC2 instance, I used the key pair I initially created, changed the permissions to read-only for the owner, with no read, write or excutable permissions for group or others. I also retrieved the public IPv4 address of the instance and applied it in the ssh command "ssh -i NextWorkAuroraApp.pem ec2-user@ YOUR_EC2_ADDRESS"

To help me create my web app, I first installed the Apache web server(the web server that serves content to users), PHP (the progamming language to help me write beautiful web pages), then php-mysqli (a PHP library that establishes a connection to my database), and finally, mariadb105 (installs MariaDB, a version of the MySQL database management system).

---

## Connecting my Web App to Aurora

I set up my EC2 instance's connection details to my database by creating a file called "dbiinfo.inc". This file stores the connection details my EC2 instance will need to establish a connection to the Aurora database.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-webapp_1709b25b)

---

## My Web App Upgrade

Next, I upgraded my web app by writing a sample PHP web file that simply takes in the details of the connection to my Aurora DB, and displays any changes directly from the website.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-webapp_2709b25b)

---

## Testing my Web App

To make sure my web app was working correctly, I logged into my databse using the Mysql CLI. Then proceeded to verify my tables and the different fields within my table.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-databases-webapp_1409z22b)

---

---
