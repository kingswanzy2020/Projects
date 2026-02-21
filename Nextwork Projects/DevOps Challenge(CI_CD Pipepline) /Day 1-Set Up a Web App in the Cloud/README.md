<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Set Up a Web App in the Cloud

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-devops-vscode)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

## Set Up a Web App Using AWS and VS Code

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_7a1de541)

---

## Introducing Today's Project!

In this project, I will demonstrate how to set up a web app in the AWS cloud, a foundation we will need for our CI/CD pipeline. I'm doing this project to learn how to launch and SSH into an EC2 instance, install maven and java to generate a web app that will run on our EC2 instance.

### Key tools and concepts

Services I used were Amazon EC2, VS code. Key concepts I learnt included remote SSH connections via both the VS Code window(i.e. through the Remote -SSH extension) and the terminal, editing files using the terminal built in text editor like Nano or Vim and using key pairs.

### Project reflection

One thing I didn't expect in this project was to edit a file using both my terminal and the VS Code window. It was really interesting to see both changes being done in real time due their connections to the same remote server.

This project took me approximately 2 hours, including some background reaseacrch.The most challenging part was establishing the remote connection on the VS Code window through the Remote -SSH extension due to some connection timeout errors. It was most rewarding to my EC2 instance directories being displayed in my VS Code window, as though VS code was actually installed and running on my instance.

This project is part one of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project in the next 30 mins.

---

## Launching an EC2 instance

I started this project by launching an EC2 instance because I need to run my web app on the cloud by installing both Maven and Java on it.

### I also enabled SSH

SSH is a protocol used to create a secure connection to a remote server. I enabled SSH so that I can have a secure connection to the EC2 instance by providing my private key that matches the AWS public key for my instance.

### Key pairs

A key pair is used to securely log into your EC2 instance. It  is made of two parts, a public key, secured AWS, and a private key, generated for the user. The private key can then be used to verify that you have access to that specific EC2 instance.

Once I set up my key pair, AWS automatically downloaded the private key(.pem) in my Downloads folder.

---

## Set up VS Code

VS Code is is an Integrated Development Environment that can be used to write and edit code

I installed VS Code to access a bash terminal and run the commands necessary for interacting with my EC2 instance via SSH.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_53d05e68)

---

## My first terminal commands

A terminal is a space or window where you can enter commands  for the OS to inteprete and execute. The first command I ran for this project is...

I also updated my private key's permissions by entering the {chmod 400 "nextwork-keypair.pem"} command to allow read permissions for the private key file. This will then be used to authorize access to my EC2 instance.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_9328ada1)

---

## SSH connection to EC2 instance

To connect to my EC2 instance, I ran the4 command {ssh -i "nextwork-keypair.pem" ec2-user@ec2-13-231-229-166.ap-northeast-1.compute.amazonaws.com}. That is, I specifed my .pem file, the remote hostname and the IPV4 address with its location.

### This command required an IPv4 address

A server's IPV4 DNS is is a public IP address it uses for systems  or users on the internet to connect to it

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_e3069dca)

---

## Maven & Java

Apache Maven is a significantly important tool that automates the building of softwares mainly for java projects.

Maven is required in this project because our web app is built in java - Maven can be used for the build and automation process of all our web app packages.

Java is simply a programming language that can be used to build small to big applications for both mobile and enterprise systems.

Java is required in this project because our web app runs on java

---

## Create the Application

I generated a Java web app using the command "mvn archetype:generate" and made some few modifications to the name of the web app for my project.

I installed Remote - SSH, which is an extension in VS Code that provides you with a more streamlined experience by by connecting VS Code directly with your remote server for easier management .. I installed it to leverage the advantage that VS Code provides EC2 instance directly, as if VS code is actually running on the instance.

Configuration details required to set up a remote connection includes the Username (ec2-user), IdentityFile for the private key, public DNS of the EC2 instance, and the Hostname of the instance.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_2939cf01)

---

## Create the Application

Using VS Code's file explorer, I could see my main source code for the web app, along with many files and folders embedded within it. All these files are necessary to build my web app.

Two of the project folders created by Maven are src and webapp, which are the main source codes for the webapp. The src is the main folder that contains all the folders necessary for the website, while the webapp folder contains all the HTML code necessary for creating our web app.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_45f91fd7)

---

## Using Remote - SSH

The index.jsp is simply a file used to develop HTML content for static elements of web apps, as well as any Java code for developing dynamic web based content(i.e. content that keeps on changing either due to user input or from a database).

I edited index.jsp by adding a "Hello (My name)"  as the header of the HTML elements, and added another simple message in a paragrapgh that says "This is my NextWork web application working!"

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_7a1de541)

---

## Using nano

An alternative to using IDEs is to use the built in text editors like Nano and Vim to edit files directly within the terminal. To edit index.jsp, I ran the command "nano index.jsp or vi index.jsp" to open the editor for the file.

Compared to using an IDE, editing index.jsp in the terminal felt less intuitive, with text alignments not being automatically done for you. I'd be more likely to use an IDE if I had a bit more code to work with, in terms of writing, copying, pasting and undo commands.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-vscode_a3324ad41)

---

---
