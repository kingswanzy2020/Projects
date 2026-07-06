<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Continuous Integration with CodeBuild

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-devops-codebuild-updated)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codebuild-updated_35588a47)

---

## Introducing Today's Project!

In this project, I will demonstrate to use AWS CodeBuild to automate the build process for my CI/CD pipeline. Building simply refers to compressing or converting our code into a deployable package. I'm doing this project to learn how to create a build process that automatically builds our code and runs tests on it before during the build process.

### Key tools and concepts

Services I used were AWS CodeBuild, Amazon EC2, AWS CodeArtifact, VS Code, IAM, Amazon S3 and Cloudwatch. Key concepts I learnt includes .....

### Project reflection

This project took me approximately. 4 hours(including seeting up my entire environment for the CI phase,  background research, note-taking, troubleshooting and the secret mission). The most challenging part was troubleshooting the errors that occured during the build phase in the "buildspec.yml" file. It was most rewarding to see the SUCCESS message on the build status and  the deployable artifact in my S3 bucket.

This project is part four of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project CodeDeploy on the 5th December.

---

## Setting up a CodeBuild Project

CodeBuild is a continuous integration service, which means that it automates the build process whenever it detects a new checkpoint or changes to the code(Eg: whenever someone makes a new commit to their GitHub project) has been made.So, it continuous the building process to catch bugs early on in the project. Engineering teams use it because it is fully managed, hhence, they don't have to manage any servers. They only pay for the time used in building projects.

My CodeBuild project's source configuration is simply a place where my code lives, or where CodeBuild picks my code from (source code repository). I selected GitHub since that is where this project's source code lives.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codebuild-updated_fewgrhte)

---

## Connecting CodeBuild with GitHub

There are multiple credential types for GitHub, like GitHub App, Personal Access Tokens and OAuth app. I used GitHub App because it's the most simple and secure way to set up a connection between AWS and GitHub, as AWS handles application and it's connections, tokens and keys directly. So, we simply to need to login once to  an AWS managed ub app.

The service that helped connect my AWS acount and GitHub is AWS CodeConnections. CodeConnections also allows us to connect our AWS environment to other third-party code repositories such as GitLab and Bucket. In this case, CodeConnections is ensuring that the build process uses the project repository on Github as the source.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codebuild-updated_a7c98e2d)

---

## CodeBuild Configurations

### Environment

My CodeBuild project's Environment configuration means the environment setup for the compute power(i.e. EC2 instance) to run my build process by compiling and compressing the files. It includes settings like provisioning model, compute, operating system, image, and service role. These configurations determine how a new compute resource will be spun-up in the backgroup for the build process. This is why the new EC2 instance needs to be given the right permissions to do its job, hence, the service role is created for that.

### Artifacts

Build artifacts are simply the tangible outputs of your build process, containing all the bundled up artifacts(files) compiled and compressed together into one package or file. They're important because they are final deployable file(in my case, is a WAR file,i.e. java package web application) to be unzipped or uncompressed and hosted by our web server. My build process will create a .war file to be used by my web server(EC2 instance). To store them, I created an S3 bucket.

### Packaging

When setting up CodeBuild, I also chose to package artifacts in a  zipped or compressed format because, it makes my build artifact easier to manage, smaller in size and simplier to deploy by having just one package.

### Monitoring

For monitoring, I enabled CloudWatch Logs, which is a monitoring tool for creating log files by keeping track of my build process and alerting me of any errors during my the build process. This comes very handy for debugging and troubleshooting.

---

## buildspec.yml

My first build failed because I haven't set up a Yaml file, which instructs Codebuild on how to do my build. A buildspec.yml file is needed because it contains all the detailed instructions required for my build process,including how the build should be done, where the dependencies are, and where the WAR file should be stored.

The first two phases in my buildspec.yml file handle the installation of the Java version to use for the build process (Java 8) and retrieving the authentication token required by Maven to access my CodeArtifact repository. The third phase in my buildspec.yml file is the main build process, i.e. the compilation of my code and its dependencies using the settings.xml file. The fourth phase in my buildspec.yml file is the post build process, whereby the everything is now bundled together into a tidy package, like a WAR file. Also, the custom name given at during the build project configuration can then be used to indicate the name and location of the build artifact (WAR file). 

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codebuild-updated_35588a47)

---

## Success!

My second build also failed, but with a different error that said "COMMAND EXECUTION ERROR". This simply means CodeBuild wasn't able to follow through with some of the phases in the buidspec.yml file, mainly because it couldn't access the the dependencies outlined in the settings.xml file. Note that, CodeBuild has the settings.xml file, but anot ccess to CodeArtifact. To fix this, I will add an IAM policy that grants  Codebuild the permission to access Codeartifact for the web app dependencies.

To resolve the second error, I gave CodeBuild the permission to access CodeArtifact by adding the right IAM policy. When I built my project again, I saw a SUCCESS message displayed on the Build Status view, indicating my build process was successful, with not errors in any of the build phases.

To verify the build, I checked my S3 bucket for the deployable package(artifact). Seeing the artifact tells me that CodeBuild has successfully compiled my code, with all it's dependencies in the artifact repository together, and packaged everything into a simple deployable artifact. It also indicates that arfact was properly uploaded to the right destination.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codebuild-updated_d9cc6191)

---

## Automating Testing

In a project extension, my bash scripts checks the existence of my "scr folder" and "index.jsp" file for my web. So, it validates the structure of my project folder. This script is simplly crucial for running tests during your build process.

To add the test script to the build process, I updated the buildspec.yml file to properly instruct CodeBuild how I want my build process to be done. So, I included some various phrases with visual markers for easier identification of the test results in the build log for the validation checks and script execution command, all within the build phase.

After pushing my code to GitHub, I ran the build process again on CodeBuild. In the build log, I could see all the tests being done on my project folder to validate the existence of directories and files in my project. This ensures that my application can be build and deployed correctly.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-codebuild-updated_sm-test-script-upload)

---

---
