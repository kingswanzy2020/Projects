<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Infrastructure as Code with CloudFormation

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-devops-cloudformation-updated)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-cloudformation-updated_bd8b836b)

---

## Introducing Today's Project!

In this project, I will use Infrastructure as Code (IaC) generator to define and gather all my resources into a CloudFormation template and deploy them faster and easily, bringing about consistency and flexible management. I'm doing this project to learn the power of CloudFormation for delivering faster results.

### Key tools and concepts

Services I used were CloudFormation, CodeDeploy and many more services. Key concepts I learnt include Infrasture as Code, how to use the IaC generator and ways of troubleshooting errors when launching a CloudFormation template.

### Project reflection

This project took me approximately 4 hrs, including resource identification in the IaC generator, error debugging during launch and how to manually define resources such as CodeBuild and CodeDeploy deployment group in the template. The most challenging part was editing the CloudFormation template and debugging the errors as they occured. It was most rewarding to see the launched template and all the created resources via the hyperlinks. through some few clicks.

This project is part six of a series of DevOps projects where I'm building a CI/CD pipeline! I'll be working on the next project CodePipeline in the next few hours.

---

## Generating a CloudFormation Template

The IaC Generator is tool in CloudFormation that simply takes inventory of all the existing resources (like EC2 and S3 buckets) within your AWS account that could be added to the CloudFormation template, enabling you to create your template faster. It works in a three-step process:
1. It first scans all the resources within your AWS account.
2. Creates a template using the resources it discovered to      deploy and manage them together.
3. Finally, this template can then be imported into CloudFormation to deploy all the resources in one go.

A CloudFormation template is simple a text file that consists of all the bundled up resources you want to deploy and manage in code format. The resources that I could add to my template includes S3 bucket, CodeArtifact (domains & repositories), CodeDeploy(Applications), IAM (roles & policies) and CodeStar connections.

The resources I couldn’t add to my template were Codebuild and CodeDeploy deployment group, due to their complex nature as they require very specific or flexible configurations. Hence, the IaC generator is unable to add them to  the scanned resources. For the network resources, am choosing to opt out of them because, they will increase the complexity of my template.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-cloudformation-updated_0495b046)

---

## Template Testing

Before testing my template, I deleted the existing ones I created manually to prevent failure because, CloudFormation will create those new resources using the same names as the existing ones.

I tested my template by uploading it to CloudFlormation to create a stack. The result of my first test was failed because, some of my policies and roles were being created at simultaneously, which should not be the case, as we know that policies are attached to the roles, then the roles are to be assumed  by an entity or resource. Hence, the roles need to be generated first. Think of it like a folder-file relationship.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-cloudformation-updated_f56730fd)

---

## DependsOn

To resolve the error, I opened up the template in a code editor (VS Code) and added an extra line of code to my policies, i.e, "DependsOn". The DependsOn attribute means that am telling CloudFormation to wait on creating that resource because, that resource relies or depends on another resource to be available first.

The DependsOn line was added to four different parts of my template: the CodeBuild policies and the CodeArtifact policy... For CodeArtifact policy, since the policy is attached to two roles,  i.e. the CodeBuild service role and the EC2 instance role, then the IDs of the two roles should be included in the DependsOn line.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-cloudformation-updated_f0df8018)

---

## Circular Dependencies

I gave my CloudFormation template another test! But this time I got a different error message, i.e. "Circular dependency error between resources" error. This error signifies a chicken a egg situation, whereby from the template, CloudFormation senses that some resources are stuck in a loop. In my case, this is between my IAM roles and their policies, as both are seen to be waiting on eachother to be created first, causing this circular dependency error.

To fix this error, I deleted the references within the IAM roles pointing to the policies in the ManagedPolicyARN section. So, now CloudFormation should just create the role first, then the policies, and attach them to the specific role during creation.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-cloudformation-updated_e6fd85ed)

---

## Manual Additions

In a project extension, I manually defined two more resources: the CodeBuild project, and the CodeDeploy deployment group.

I also had to make sure the references were consistent in this template, so I put in the IDs for the service roles, s3 bucket and CodeDeploy Application from the template, making sure they were consistent across all fields.

I also introduced Parameters, which are resuable, flexible parts of the template that allows you to parametize values for different use cases without actually modifying the template itself. This is very useful for a cases where we have to reference different GitHub account info that can be easily changed for a different working environment. Also, with paramters, we can request CloudFormation to wait for a user input before creating the resources.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-cloudformation-updated_1cee0428)

---

## Success!

I could verify all the deployed resources by visiting  hyperlinks for all the created resources in the Resources tabof my CloudFormation Stack panel.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-devops-cloudformation-updated_bd8b836b)

---

---
