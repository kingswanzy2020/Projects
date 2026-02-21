<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Secure Packages with CodeArtifact

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-devops-codeartifact-updated)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codeartifact-updated_1d79e699)

---

## Introducing Today's Project!

In this project, I will demonstrate how to create a codeArtifact respository to securely store all the web app dependencies. I'm doing this project to learn how CodeArtifact can be used in the CI/CD pipeline or just simply as an Artifact repository for storing packages or dependencies required by an application.

### Key tools and concepts

Services I used were AWS CodeArtifact, Amazon EC2, Github, Cloudshell, IAM and VS Code. Key concepts I learnt included: setting up artifact and upstream repositories, connecting Maven with the artifact repository, creating an IAM role for my EC2 instance to access CodeArtifact and creating a security hash for publishing packages.

### Project reflection

This project took me approximately 3.5 hours(with research, and troubleshooting time included). The most challenging part was the secret mission where I had to publish a package to my artifact repository using the CLI. I ran into some errors during publishing due to some permission settings and did a bit troubleshooting.. It was most rewarding to all the stored packages within my codeartifact repository, verifying the seamless connection between my Web App on the EC2 instance and CodeArtifact.

This project is part three of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project with CodeBuild to automatically build my web app on 29th of November.

---

## CodeArtifact Repository

CodeArtifact is a artifact repository that secures and stores all your application packages and dependencies in a central location. Engineering teams use artifact repositories because it presents them with a lcental ocation to store all the packages they might need for thier application to run successfully. It also gives them control over the package versions they all need to work with, instead of them using different versions of the same package.

A domain is like a folder that holds all your repositories belonging to a project or an organization. My domain is "nextwork". They are very helpful to setting up permissions for all the repositories in one go.

A CodeArtifact repository can have an upstream repository, which means that, it can have access to a secondary respository to grab all the necessary packagages it does not have locally or privately. My repository's upstream repository is Maven Central Store, a public Java based repoistory that houses virtually every open-source Java library for multiple applications. Having this setup comes with the benefit of caching, contol over package versions and reliability.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codeartifact-updated_n4o5p6q7)

---

## CodeArtifact Security

### Issue

To access CodeArtifact, we need an authorization token for maven to grab those packages for its build process or package management for about 12 hours.  I ran into an error when retrieving a token because my EC2 instance, which has maven installed, does not have the permission to access  codeartifact by deafult, so, it can't present an authorization token for a resource it doesn't know, or hasn't been given permission to access.

### Resolution

To resolve the error with my security token, I created an IAM role that allows my EC2 instance temporary access to Codeartifact and modified the EC2 instance's security setting to associate itself with that IAM role. This resolved the error because the EC2 instance now has access to resquest an authorization token from Codeartifact and the Secure Token Service(STS).

It's security best practice to use IAM roles because it grants the an AWS entity(user or service) temporary access to an other AWS resources and perform certain actions. Also, an IAM role comes with temporary rotating security credentials that allows applications(eg: Maven) within services like EC2 instances to make AWS API calls to other servies like codeartifact.

---

## The JSON policy attached to my role

The JSON policy I set up grants grants permission to access to codeartifact and perform some actions within it. Specifically, to get authorization token for Codeartifact, finding the repository endpoint and viewing the packages in the repository.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codeartifact-updated_23rp7q8r9)

---

## Maven and CodeArtifact

### To test the connection between Maven and CodeArtifact, I compiled my web app using settings.xml

The settings.xml file configures Maven to access the artifact repository using an authentication token(i.e. the server section), utilize a specific repository in the profile section for retrieving dependencies, and finally, use the mirror settings to instruct Maven to always refer to the artifact repo first for all dependency requests, even after retrieving from a public repo like Maven Central. So, it's saying, Maven should first check my default repo for dependencies, and if it can cannot find them and there are other repos, it can check those ones too. But in this project, we only have one repo, hence, it refers back to itself, then to an upstream repo for the dependencies.
To put it simply, the settings.xml file is like an instruction manual for Maven on how to use CodeArtifact. It streamlines the connectioin between Maven and CodeArtifact.


Compiling means translating code to machine language. It verifies that everything is setup and worrking as they should.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codeartifact-updated_c17eace8)

---

## Verify Connection

After compiling, I checked my private local artifact repository (nextwork-devops-cicd). I noticed about 4 pages of packages that have now been stored or cached in my artifact repository through the Maven Central Store.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codeartifact-updated_1d79e699)

---

## Uploading My Own Packages

In a project extension, I also decided to practice more of package management, by creating my own package and storing it in my artifact repository. This is useful in situations for creating custom packages, as is practiced in companies whereby libraries are made and kept in-house/privately without exposing them to the public.

To create my own package, I compressed a custom text file using the 'tar.gz' command. I also generated a security hash because the intergrity of the file needs to be verified by codeartifact before it is stored in the repository. To ensures that the file hasn't been tampered with during upload.

To publish the package, we run the AWS CLI codeArtifact command for publishing packages, along with some few metadata about the package, including the package version, namespace and the repository the package will be published to. When I look at the package details in CodeArtifact, I can see the version number, publish date, the security hash info for the package verification process, and the origin of the package(which, in this case, is the CodeArtifact repository since it wasn't downloaded from a public repository).

To validate my packages, I tried to download the package using cloudshell termiinal since my EC2 instance does not have the permission to do so. I saw the package downloaded in the Cloudshell terminal, extracted it and read the contents of the package or file.  This validated the very same custom text file we created for publishing.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codeartifact-updated_sm12-upload)

---

---
