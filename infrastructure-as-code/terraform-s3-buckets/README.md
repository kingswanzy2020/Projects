<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Create S3 Buckets with Terraform

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-devops-terraform1)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-terraform1_9i0j1k2l)

---

## Introducing Today's Project!

In this project, I will demonstrate the powerful effect of using an automation tool like Terraform. The goal is to install and configure Terraform. Then use Terraform to create an S3 bucket and upload files to the S3 bucket.

### Tools and concepts

Services I used were Terraform, Amazon S3, and AWS CLI.  Key concepts I learnt include infrastructure as code, setting up Terraform,  creating and managing an S3 bucket using Terraform, uploading files to S3 with Terraform and configuring my access keys in the terminal.

### Project reflection

This project took me approximately 1hr 30mins.  The most challenging part was leaning how to use the Terraform document to get what you want. It was most rewarding to see all the changes I made via code easily deployed within my AWS environment with Terraform.

I chose to do this project today becuase Terraform is one of the essential IaC tool to use withing the Cloud developer space.

---

## Introducing Terraform

Terraform is simply a tool to help developers build and manage their infrastructure using code.

Terraform is one of the most popular tools used for infrastructure as code (IaC), which is the practice of provisioning cloud resources such as servers, networks and strorage in plain text files instead of clicking on a web console.

The main.tf serves as the central place or blueprint for me to define my infrastructure using Terraform's language. Terraform then uses configuration files like main.tf to define and manage my infrastructure. 

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-terraform1_9i0j1k2l)

---

## Configuration files

The configuration is structured in multiple blocks of code. The advantage of doing this is that your code becomes more legible, and easier to modify or tweak, without it affecting other parts.

### My main.tf configuration has three blocks

The first block indicates the Cloud Provider Terraform should work with, and in which region. The second block tells the AWS resource to provision (an S3 bucket). The third block controls who can access my S3 bucket. In this case, it's preventing all public access.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-terraform1_ljvh9876)

---

## Customizing my S3 Bucket

For my project extension, I visited the official Terraform documentation to learn how to provision S3 buckets in AWS using the Terraform syntax. The documentation shows all the various ways we can provision or manage cloud resources from any of the Cloud Providers (AWS, GCP or Microsoft Azure).

I chose to customise my bucket by adding a block of code that intstructs Terraform to change the object ownership to the Bucket owner, regardless of who has access to the bucket and uploads an object to it. When I launch my bucket, I can verify my customization by checking the object owner properties

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-terraform1_ffe757cd3)

---

## Terraform commands

I ran 'terraform init' to set up my Terrafrom project by establishing a connection to the cloud provider of my choice in the main.tf file. This downloaded all the connection plugins to AWS, set up a backend to keep record of my infrastructure and commands, prepares some modules(reusable pieces of code) and finally created a lock file - for versioning purposes.

Next, I ran 'terraform plan' to create an execution plan  detailing the changes Terraform will make to my infrastructure based on the configurations in my main.tf file. These plans tell what Terraform will create, manage or destroy. So, this command is essential to reviewing your infrastructure before anything is created.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-terraform1_3g4h5i6j)

---

## AWS CLI and Access Keys

---

## Lanching the S3 Bucket

I ran 'terraform apply' to apply the changes I have made to the main.tf file. Running 'terraform apply' will affect my AWS account by either creaating or destroying resources in my account bsed on the configurations set up in the main.tf file. In my case, the file simply creates an S3 bucket.

The sequence of running terraform init, plan, and apply is crucial because you will run into an error when first trying to apply without running terraform init. Terraform firts needs to download all the necessary plugins to establish a connection to AWS and create a state file to track the state of your infrastructure. Utilizing the terrafrom plan is optional, but recommended, as it enables you to review your configuration in detail before accepting any resources to be created.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-terraform1_1q2w3e4r)

---

## Uploading an S3 Object

I created a new resource block to upload an image into my S3 bucket.

We need to run terraform apply again because we have made changes to the configuration file. This ensures that the appropriate changes are correctly executed and made to my infrastructure.

To validate that I've updated my configuration successfully, I checked for the object in the S3 web console and downloaded the image to compare with my local one.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-terraform1_9o0p1a2s)

---

---
