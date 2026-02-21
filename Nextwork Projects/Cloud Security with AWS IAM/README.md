<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Cloud Security with AWS IAM

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-security-iam)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_1c864649)

---

## Introducing Today's Project!

In this project, I will demonstrate how to create IAM Users and policies to authenticate and authorize access to AWS resources like Amazon EC2. I'm doing this project to learn how to lauch and EC2 instance and create some few policies and user groups for it.

### Tools and concepts

Services I used were Amazon EC2, IAM(Users, Groups, Account Alias, Policy Generators, and Policy Simulators). Key concepts I learnt included how to understand and generate policies using JSON and the Policy Generator, attaching policies to IAM Users to restrict access to certain actions within the AWS account, and lastly, how to use the Policy Simulator to validate a poilcy before attaching it to an AWS resource or a user.

### Project reflection

This project took me approximately 2 hrs, including background studies. The most challenging part was understanding this JSON policy as it contained multiple statements, and how to write and generate the right policies  using JSON. It was most rewarding to see that my plociy was working denying any actionable rights to the IAM user for the production instance, while keeping all actions restricted to the development instance.

---

## Tags

Tags are like labels or extra names we give to resources in our AWS environment for purposes of filtering, policy application and cost allocation.

The tag I’ve used on my EC2 instances is called Environment. The value I’ve assigned for my instances are production and development.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_2e0e5a5d)

---

## IAM Policies

IAM Policies are rules or permission granted to a user or a resource and defines what they are allowed to do.

### The policy I set up

For this project, I’ve set up a policy using JSON file to grant all actionable rights to the development instance,read permissions to all EC2 resources, while strictly denying all rights to delete or create tags for EC2 resources.

I’ve created a policy that allows comprehensive management of EC2 instances tagged as Env:development, permits viewing details of all EC2 resources, but strictly prohibits creating or deleting tags on any EC2 resource.

### When creating a JSON policy, you have to define its Effect, Action and Resource.

The Effect, Action, and Resource attributes of a JSON policy means to allow or deny an action (Effect), while Action simply refers to the list of actions the policy allows or denies. Lastly, Resource refers to the various resources being applied to.

---

## My JSON Policy

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_1c864649)

---

## Account Alias

An account alias is an alternate name for your AWS account, providing a more user friendly URL sign-in interface for access to the AWS management console.

Creating an account alias took me 1 minute. Now, my new AWS console sign-in URL is https://nextwork-alias-fap.signin.aws.amazon.com/console

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_0eb4439b)

---

## IAM Users and User Groups

### Users

IAM users are people  or entities with access to AWS resources within your AWS environment.

### User Groups

IAM user groups are a collection of IAM users created to manage all users within the group simultaneous, by attaching policies to the group, rather than individual users.

I attached the policy I created to this user group, which means that all users within this group will be managed under this group policy. They will each have the same rights (do's and  don'ts).

---

## Logging in as an IAM User

The first way is to email the user with the sign-in instructions, while the second way is to download the .csv file with the login details for the user.

Once I logged in as my IAM user, I noticed that there were many panels showing Access Denied to read to grab any information from them. This was because of the group policy attched to the user group, in which this IAM user is a part of. The policy will only allow read access to all EC2 instances, actionable rights to the instances with the Tag development, and deny the creation or deletion of all EC2 tags. So, anything outside of this policy by default will be denied, including all information displayed on the dashboard panels and all other AWS services.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_6f2ab446)

---

## Testing IAM Policies

I tested my JSON IAM policy by having the IAM user try to stop the production instance or the development instance to see which one the user has all actionable rights to.

### Stopping the production instance

When I tried to stop the production instance, I was met with an error message, explicitly denying this user from stopping the production instance. This was because the IAM user doesn't have have the any actionable rights over the production instance by virtue of its policy.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_0e7a9d6a)

---

## Testing IAM Policies

### Stopping the development instance

Next, when I tried to stop the development instance, it was succesfully intiated. This was because the policy allowed the IAM user to have the rights to stop the development instance.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_1811801c)

---

## The IAM Policy Simulator

The IAM Policy Simulator can be used to validate your policy, verify if it does what it was intended for and can also be used to check for any errors in the policy. It's also useful for validating the effect of the policy before it is attached to a resource without affecting the actual AWS resource.

### How I used the simulator

I set up a simulation for both Delete Tags and  Stop Instances for the EC2 instances. The results were positive, as the policy behaved as expected by denying the ability to Delete Tags or Stop Instances for both ECt2 instances. I had to adjust the Stop Instance policy menu to simulate for only the development tagged instance as the Deny rule always supersedes the Allow effect. By default, the simulator was referring to all the EC2 instances, hence, the deny rule was in effect. So, by pointing the simulator to the development instance, it displayed the Allow effect, as was originally written.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-security-iam_069d8a621)

---

---
