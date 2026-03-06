<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Launch a Kubernetes Cluster

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-eks1)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

## Launch a Kubernetes Cluster

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-eks1_e5f6g7h8)

---

## Introducing Today's Project!

In this project, I will deploy my very own Kubernetes cluster using Amazon EKS , and monitor the cluster creation via CloudFormation. I will also be using some be using some interesting tools like eksctl and IAM access entries.
<img width="2552" height="1386" alt="image" src="https://github.com/user-attachments/assets/07f4a750-ef3d-47b0-a604-ec29facfc69d" />


### What is Amazon EKS?


---

## What is Kubernetes?

Kubernetes is a container orchestrator tool that manages containers in terms of scaling to meet workloads, restarting them when they stop and deploying them across servers. It makes it easy to manage large number of containers across several devices automatically, by setting up some few instructions, and kubernetes handles it from there.  Companies and developers use Kubernetes to to manage their applications running on containers, as it makes their application management much more steady and easier to scale when traffic increases.

I used eksctl to to interact with Amazon EKS and create a cluster. The create cluster command I ran defined the cluster name I want to create, the node group, the region I want the cluster to be created in, the type of node that should run in my cluster, and even the version of Kubernetes I will be using.

I initially ran into two errors while using eksctl. The first one was because. I didn't have the tool "eksctl" installed on my instance(virtual server). The second one was because my EC2 instance didn't have the permissions or credentials to create an EKS cluster.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-eks1_ff9bfc221)

---

## eksctl and CloudFormation

CloudFormation helped create my EKS cluster because it takes instructions from eksctl to automatically provision all the resources I need for my eks cluster. It created VPC resources because my the pods and node in the eks cluster needs some specific networking resources to communicate with other and pass traffic.

There was also a second CloudFormation stack for my nodegroup, i.e. the servers actually running my containers or pods. The difference between a cluster and node group is that my cluster is the entire environment managed by kubernetes (the control plane and node agents), while the node group consists of acollection of nodes running my containers or pods.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-eks1_w3e4r5t6)

---

## The EKS console

I had to create an IAM access entry in order to have the permissions to access my nodes, since Kubernetes comes with it's own permission setup. An access entry is allows an IAM user or role to access the kubernetes cluster by mapping the IAM user to Kubernetes's own RBAC (Role Based Access Control). I set it up by selecting my current IAM user and adding this policy: "AmazonEKSClusterAdminPolicy". This allow my IAM user full access to the eks cluster, including the nodes running the pods or containers.

It took me about 1 hour, including setup and background studies on clusters to create my cluster. Since I'll create this cluster again in the next project of this series, maybe this process could be sped up if I quickly move on the next part.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-eks1_e5f6g7h8)

---

## EXTRA: Deleting nodes

Did you know you can find your EKS cluster's nodes in Amazon EC2? This is because the nodes themselves are EC2 instances(virtual computing resources) created by CloudFormation, following instructions from the eksctl tool. These instances or nodes are then managed by Amazon EKS for running pods and containers.

Desired size means the number of nodes I want running in my node group. Mininum and maximum sizes are helpful for scaling  down or up when traffic or the workload on the nodes is low or high. Kubernestes then provisions these nodes based on those configurations to keep the application always available. 

When I deleted my EC2 instances, they were also deletd from my nodegroup, which Kubernetes immediately noticed this change and provisioned new instances. This is because of the configurations I made for the number of nodes in my nodegroup.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-eks1_q7r8s9t0)

---

---
