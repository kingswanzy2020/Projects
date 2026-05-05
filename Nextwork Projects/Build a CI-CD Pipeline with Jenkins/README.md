<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Build a CI/CD Pipeline with Jenkins

**Project Link:** [View Project](https://learn.nextwork.org/projects/f485c924-e7b8-4fed-ae38-23e5b876e063)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_k1ni34lq)

## Project Overview: Building a Professional CI/CD Pipeline

### What this project builds and why it matters

In this project, I'm building a CI/CD pipeline with Jenkins and SonarQube for highly efficient and autonomous code delivery. 

## Setting Up the Environment

### Installing Git, Java 21, and Maven

In this step, I'm setting up Git, maven and Java JDK on my system so Jenkins can interact with them for its workflow.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_gny6z2o2)

### Configuring Linux kernel parameters for SonarQube

I configured "vm.max_map_count = 262144" and ."fs.file-max=131072" because SonarQube's embedded Elasticsearch needs those custom values to run properly on my system, least, the SonarQube container is going to crash silently at startup.

## Launching SonarQube and Connecting Jenkins

### Starting SonarQube via Docker and installing Jenkins plugins

In this step, I'm setting up a SonarQube container via Docker and establish its connection to Jenkins.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_8ergd03p)

### Configuring the SonarQube server in Jenkins

I configured a SonarQube environment variable with a server name of "SonarQube" and a credential ID of "sonarqube-token".
This is the token Jenkins needs to authenticate itsellf with SonarQube send the code over for analysis.

## Building the Java Application and Pushing to GitHub

### Scaffolding the Maven project with JUnit tests

In this step, I'm creating the Java project containing the application code and unti tests, and push everything to GitHub so that Jenkins can pull from there at checkout.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_lidm9g09)

### What the five JUnit tests verify

The five tests verify that the greet() method returns a custom message with "Hello + name" or a defaults to Hello world" if no name is provided. The add() method performs simple addition of two integers.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_c9ldi24e)

## Writing the Jenkinsfile and Running the First Pipeline

### Creating the Declarative Pipeline with Checkout, Build, and Test stages

In this step, I'm creating a Jenkins file for the project, so that Jenkins can read that file from the GitHub repository and run a pipeline.

### Understanding Pipeline-as-Code

Pipeline-as-Code means your build, test, and deploy instructions are version-controlled alongside your application code. This is useful because it automates all the manual steps we would be doing everytime there is a code change, and does it all in a version-controlled manner.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_yz6yqauk)

### JUnit test results and the post always block

I saw a a green checkmark for all the stages (checkout, build and test) tests pass. The post > always block tells Jenkins to print out the results of the tests, regardless of whether they pass or fail.

## Integrating SonarQube for Static Code Analysis and Quality Gates

### Configuring the SonarQube webhook and adding analysis stages

In this step, I'm setting up SonarQube analysis stage iinto my Jenkins pipeline, so that my code can be well analyzed for vulnerabilitites before it can pass. 

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_97awyixy)

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_zm81eeg5)

### How the Quality Gate enforces code standards

If the quality gate fails, the pipeline aborts its process, preventing bad code from progressing in the delivery process.

## Containerizing the App and Wiring Up Slack Notifications

### Adding the Docker Build stage and Slack integration

In this step, I'm adding a Docker build stage to my jenkins pipeline, so that the pipeline can package the app into a Docker image on Docker hub for team collaboration.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_7i9t43zz)

### How the Docker Build stage works in the pipeline

The Docker Build stage uses the Docker plugins to interact with Docker and perform the builds. Jenkins knows the image name because it has been saved as environment variable within the pipeline.

## Secret Mission: Automating Triggers with GitHub Webhooks

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/f485c924-e7b8-4fed-ae38-23e5b876e063_ssfkf8fl)

### Testing failure scenarios and Slack alerts

In this project extension, I observed that Slack notified me of the results of my pipeline exeution when the test failed because there some errors within my code.

## Reflections and Key Takeaways

### Tools and concepts mastered

The key tools I used include Jenkins, SonarQube, Git/GitHub, Maven and Slack. Key concepts I learnt include how to define a complete Jenkins Declarative Pipeline in a Jenkinsfile with five automated stages that build, test, analyze, containerize a Java application. and sends notifications via  Slack to a team channel.

### Time investment and challenges

This project took me approximately 4 hours. The most challenging part was learning how all these various services integrate together to deliver an efficient CI/CD pipeline solution.

### Personal learning goals

I did this project today to learn how to utilize Jenkins in a production setting. Another skill I want to learn is integratng Nexus or Ansibe with CI/CD.

---

*Built with [NextWork](https://learn.nextwork.org) - [View this project](https://learn.nextwork.org/projects/f485c924-e7b8-4fed-ae38-23e5b876e063)*
