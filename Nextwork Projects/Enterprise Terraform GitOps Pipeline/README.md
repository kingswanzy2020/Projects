<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Enterprise Terraform GitOps Pipeline

**Project Link:** [View Project](https://learn.nextwork.org/projects/6cb68aee-7d57-4422-ba99-d99ceae892ae)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_urf4d1e5)

## Project Vision: GitOps for Real-World Infrastructure

### Why this pipeline matters

In this project, I'm building an Infrastructureas Codepipeline that mirrors how engineering team manage and scale cloud infrastructure today. So infrastructure changes are version, controlled and automatically applied upon a merge to the main branch.

## Deploying a Live AWS Stack Through Code

### Composing modules into a deployable environment

In this step, I'm creating root module and pass in all the right variables that connects all the other child modules together.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_ce003ghl)

### Remote state and locking for team safety

The S3 backend stores the terraform state file in an S3 bucket and DynamoDB prevents another process or entity  from writing to the state file by creating a lock entry to the table.

## Building the Full CI/CD Pipeline

### Automating validation and deployment

In this step, I'm creating a full GitHub pipeline that tells GitHub Actions what to do when changes arrive, so that validations can performed, automatic deployments done, and run a full GitOps cycle with real infrastructure changes.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_tmbjhjqx)

### Plan vs. apply workflow triggers

The plan workflow triggers on a pull request, while the apply workflow triggers on a push to the main branch upon accepting a merge request. This matters because we need to review the infrasture changes and catch coding errors before triggerings changes to the live infrastracture.

### The complete GitOps cycle in action

I opened a pull request which triggered the GitHub actions workflow for the terraform plan. Then when I merged, it triggered the terraform apply workflow to automatically deploy the infrastructural changes. The result was immediate and seamless, as evreything was now fully automated.

## Passwordless AWS Authentication with GitHub OIDC

### Setting up the OIDC identity provider

In this step, I'm setting up GitHub actions with OpenID Connect(OIDC) so that I can my AWS credentials are not stored permanently on GitHub as secrets.

### OIDC vs. static credentials

The OIDC provider allows GitHub Actions to retrieve OIDC tokens and execute a workflow run on AWS, unlike static keys which requires some form of management and rotation to prevent leakage.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_bij267l3)

## Secret Mission: Adding an RDS Database Module

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_1gvn0xlk)

### Least-privilege database security group design

In this project extension, I configured the database security group to allow access only by the security group of the EC2 instance.

## Bootstrapping Remote State and Project Structure

### Installing tools and initializing the repository

In this step, I'm setting up the Terraform backend so that I can store the Terraform state file remotely, and installing some package requirements for the project.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_h7vvy0by)

### Solving the Terraform bootstrap problem

The bootstrap problem is a situation that implies that Terraform cannot manage an infrastructure containing its own state file. This also means that the Terraform state must exit before Terraform can be intialized for the project. I solved it by creating all the needed resources to store and perform the state lock outside of Terraform's management using the AWS CLI.

## Building the Networking Module

### VPC, subnets, and routing across availability zones

In this step, I'm setting up the Networking module for my resoure deployment.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_ih6rjk9o)

### Dynamic availability zone discovery

The data source is used because it dynamically fetches availability zones that are active in your region, which means the module can work in any AWS region without hardcoding.


## Building Compute, Storage, and IAM Modules

### EC2, S3, and least-privilege IAM

In this step, I'm building the compute, storage and IAM modules, so that the infrastructure has all the needed resources for the project.

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_z9tmaea9)

### Security hardening applied to EC2

The compute module applies the http_token=required, which protects against credential theft attacks and encrypts the root volume.

## Enforcing Code Quality with Pre-commit Hooks

### Automating checks before every commit

In this step, I'm setting up pre-commit hooks that run automated checks upon every commit, so that I can catch any errors before they are deployed. 

![Image](https://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/6cb68aee-7d57-4422-ba99-d99ceae892ae_5r5olmoh)

### What the hooks catch and why it matters

My pre-commit hooks will catch any security misconfigurations or deprecated resources before code is committed because, those bring about errors or security leaks when the project repo is committed.

## Reflections and Key Takeaways

### Tools and concepts mastered

The key tools I used include Terraform, GitHub Actions, Amazon S3, Dynamo DB, Amazon RDS, Amazon VPC and AWS EC2 . Key concepts I learnt include how to:
- Build a modular Terraform codebase provisioning a complete AWS stack with networking, compute, storage, and IAM modules.
- Deploy infrastructure changes through a GitOps pipeline using GitHub Actions with passwordless OIDC authentication to AWS.

### Time and challenges

This project took me approximately 7hrs( including buidling the Terraform modular codebase and troubleshooting some few CI/CD pipeline errors with GitHub actions). The most challenging part was estatablishing a full pipeline at easily deploys infrastructure on AWS through Terraform.

### What's next

I did this project today to learn how to how Production teams use Terraform to deploy and manage infrastructure on Cloud Providers such AWS. Another skill I want to learn is how to utilize workspaces in Terraform within this project, so deployment in different environments become wayyy easier with just a few lines of code.

---

*Built with [NextWork](https://learn.nextwork.org) - [View this project](https://learn.nextwork.org/projects/6cb68aee-7d57-4422-ba99-d99ceae892ae)*
