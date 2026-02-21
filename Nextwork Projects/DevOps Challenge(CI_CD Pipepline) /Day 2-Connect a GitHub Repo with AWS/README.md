<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Connect a GitHub Repo with AWS

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-devops-github)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

## Connect a GitHub Repo with AWS

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-github_dd9d254e)

---

## Introducing Today's Project!

In this project, I will demonstrate how to connect a Github Repo with AWS. I'm doing this project to learn how to simulate an actual working environment from code building to tracking changes in on Github.

### Key tools and concepts

Services I used were Amazon EC2, Git and Github actions, and remote SSH connection. Key concepts I learnt include how to initialize a local repo to track changes, link a local and remote repositiory, staging, pushing files to the remote repo and creating Personal Access Tokens (PATs)for authentication purposes.

### Project reflection

This project took me approximately 1.5 hrs... The most challenging part was merging linking the local and remote repository without facing any merge issues. It was most rewarding to see my changes being tracked between my local and remote repository.

I did this project because its part of the CI/CD pipeline essential to writing and tracking multiple versions of the code.

This project is part two of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project - AWS CodeArtifact on the 23rd Nov,2025

---

## Git and GitHub

Git is a version control version used to track changes made to a file by taking snapshots of the file at a specific point in time. I installed Git using the commands "sudo dnf update -y" to update all existing software of the system, and "sudo dnf install git -y" to install git on the instance.

GitHub is the storage space on the web where all the code changes are tracked using Git. I'm using GitHub in this project to see upload and track all my code changes in a user-friendly interface.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-github_efaadbf7)

---

## My local repository

A Git repository is a storage space on the cloud that hosts all your projects tracked by Git, including the changes made and fosters collaboration between different engineers.

Git init is a command that inititializes Git(vresion control system) for the current directory to track changes within it locally. I ran git init in the nextwork-web-project directory on my EC2 instance.

A branch in Git signifies different versions of the project, with the main or master branch being the head, and all other branches running parallel to it for different changes to made and merges back to it at some point in the project. After running git init, the response from the terminal was "Initialized empty Git repository in /home/ec2-user/nextwork-web-project/.git/", meaning a a directory has been initialized to track changes.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-github_7bf21bae)

---

## To push local changes to GitHub, I ran three commands

### git add

The first command I ran was "git add ."(the staging area). A staging area serves an intermediate space where you can store all your modified files and check them for any potential errors before they are commited.

### git commit

The second command I ran was "git commit -m"( it saves or takes a snapshot of the staged files into the project history)... Using '-m' means add a message to the commit, describing what changed, and making it easier to follow for version review.

### git push

The third command I ran was "git push -u origin master".. Using '-u' means upstream. It tells git where to push the changes to, without defining the origin and branch in every push command.

---

## Authentication

When I commit changes to GitHub, Git asks for my credentials because Git wants to authenticate who I am, and whether I have the right to push changes to my remote repository.

### Local Git identity

Git needs my name and email to track the author information(username and email) of who made the commit.

Running git log showed me the commit history, including the author information, which in this case, was the system default username and Public IPV4 DNS.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-github_9a27ee3b)

---

## GitHub tokens

GitHub authentication failed when I entered my password because passwords through the terminal are insecure and can be intercepted over the internet via HTTPS. Hence, Personal Access Tokens(PATs) can be used instead to generate a string of random characters for the password.

A GitHub token is a unique string of randomly generated characters used a password. Tokens can be used to control the permissions one has in the Github account when used. I'm using one in this project because passwords over internet are insecure, while Tokens provide a more fine grained control and security to the Github account.

I could set up a GitHub token by going to Settings > Developer settings > Pernal access tokens > Tokens(classic) > Generate new token(classic).

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-github_fa11169d)

---

## Making changes again

I wanted to see Git working in action, so I added a line of code in the body on my index.jsp file. I couldn't see the changes in my GitHub repo initially because the file hadn't been staged and commited to my local repo - then pushed to my Github repository.

I finally saw the changes in my GitHub repo after I pushed them from my local repo to my Github repository.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-github_6becb2bc)

---

## Setting up a READMe file

As a finishing touch to my GitHub repository, I added a README file, which is simply aproject documentation file. I added a README file by creating one in my Github repository - then proceeded to document my project(what the project is about, the technologies I used and my setup).

My README is written in Markdown because its a simple text language that can be easily read and converted to HTML to be displayed on webpages. Special characters can help you format text in Markdown, such as # for headers, ## subheaders , <br> for line break in HTML style, and more

My README file has 6 sections that outline the overall project description, a brief intro about his part of the project, technologies used, setup, contact info and conclusion.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-github_c94976902)

---

---
