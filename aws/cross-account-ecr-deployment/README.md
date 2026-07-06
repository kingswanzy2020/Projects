<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Deploy an App Across Accounts

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-ecr)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-ecr_3e91948719)

---

## Introducing Today's Project!

In this multiplayer project, I will work with a project buddy on cross account deployments with Amazon ECR and Docker. This means that we will both work on developing our apps locally, containerize them and use ECR to swap and deploy them . I'm doing this project to learn how teams in the real world deploy applications and services across muliple accounts without over-sharing access.

### What is Amazon ECR?

Amazon ECR is a private repository that stores, manages, and controls who or what has access to the docker images stored within it. It is useful because we can use to share a consitent or latest version of an image to different AWS accounts or resources. I used ECR to store my docker image for a web app and shared the image with a another AWS account, allowing it to be done more securely and tracked.

### One thing I didn't expect...

One thing I didn't expect in this project was that the architecture of the system used to build the docker image locally before pushing it the ECR repository should be taken into consideration. This is because, docker images are built for specific CPU architectures, such x86-64(common for most laptops and servers) or  ARM64 or ARM64 (used by devices like Apple M1/M2 chips and AWS Graviton processors). This is due to the difference in the compiled binaries and libaries used to build the image running on specific system processors. But, this can resolved by simply building a multi-architecture image for compability on various systems.

### This project took me...

This project took me approximately 4 hours. My biggest learning was the docker image system architecture type, Dockerrun.aws.json file ,i.e, instructions for Elastic Beanstalk on how to deploy a docker image from a container registry like ECR, and how ECR can used tosecure share docker images across accounts.

---

## Creating a Docker Image

I set up both the dockerfile and my custom index.html file(my application code). Both files are needed because they will be used to create the docker that my project buddy will deploy on their end.

My Dockerfile tells Docker to fetch the base image Nginx from the container registry and replace the default html file that comes with it, with my custom index.html file.

### I also set up an ECR repository

ECR stands for Elastic Container Registry. It is important because it allows developers to store and manage the deployment of container images, making images easier to track and secure.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-ecr_e7f8g9h0)

---

## Set Up AWS CLI Access

### AWS CLI can let me run ECR commands

AWS CLI is tool that lets you manage your AWS services from your terminal. The CLI asked for my credentials because it needs to connect to my AWS account.

To enable CLI access, I set up a new IAM user with the permission AmazonEC2ContainerRegistryFullAccess. I also set up an access key for this user, which means I will be able to connect to my AWS account through this IAM with the access key.

To pass my credentials to the AWS CLI, I ran the command "aws configure" to put in my access key details for the IAM user I created.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-ecr_4aa3e4fe6)

---

## Pushing My Image to ECR

Push commands are commands that push an a docker image into a respository.

### There are three main push commands

To authenticate Docker with my ECR repo, I used the command "aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 007399901516.dkr.ecr.ap-northeast-1.amazonaws.com" to get the credentials for ECR and pass those credentials to Docker for access to the repository.

To push my container image, I ran the command "docker push 007399901516.dkr.ecr.ap-northeast-1.amazonaws.com/nextwork/cross-account-docker-app:latest". Pushing means uploading our docker image to a container repository.

When I built my image, I tagged it with the label. laatest.. This means any container I run will be using the image with the tag- latest

---

## Resolving Permission Issues

When I tried pulling my project buddy's container image for the first time, I saw the error 403 Forbidden response This was because the ECR repositories are private, hence, specific permissions need to be others to pull images from that repository.

To resolve each other, we added our IAM user's ARN to the ECR repository policy.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-ecr_74b90da414)

---

## Deploying the App

I used Elastic Beanstalk to deloy the web app. When I set up an Elastic Beanstalk application, I configured settings like Compute capacity for my application, managed updates, health checks and more.

While setting up for deployment, I created a new role for. my EC2 instance and Elastic Beanstalk... The role has the permission for Elastic Beanstalk to perform healthchecks and more, while my EC2 instance. I gave Elastic Beanstalk access to ECR to fetch the docker image from the ECR repository.

The Dockerrun.aws.json file is a file that tells Elastic Beanstalk how to deploy a conatiner image from repositories like ECR. My file tells Elastic Beanstalk to deploy a single container of my application, the image name and expose the container for access on port 80.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-ecr_70ed85fa3)

---

## Resolving Deployment Issues

When I visited my environment and clicked on the domain URL, I run into a page error saying "This site can't be reached". This was expected because, previously in Amazon ECR, we only set permissions for a specific IAM user to access the ECR repository, not Elastic Beanstalk and the EC2 instance. 

To fix the permissions error, my buddy and I modified the permissions for the ECR respository by adding the ARNs of both Elastic Beanstalk and the EC2 instance. So, once this is done the Elastic Beanstalk environment is rebuilt with the new updates, we should be able to access eachother's sites.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-ecr_74b90da411)

---

---
