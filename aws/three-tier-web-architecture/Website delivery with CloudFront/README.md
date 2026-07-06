<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Website Delivery with CloudFront

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-cloudfront)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

## Website Delivery with CloudFront

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-networks-cloudfront_1dddddwe)

---

## Introducing Today's Project!

In this project, I will demonstrate how to present the front facing part of a website on Amazon services using S3 and CloudFront. By doing this, we can deliver faster website access to our users, using CloudFront's edge locations.

### Tools and concepts

Services I used were CloudFront and Amazon S3. Key concepts I learnt include content delivery network (CDN) with CloudFront, and how to host a static website on S3. Also, I learnt the the importance of the role CloudFront performs for website hosting.

### Project reflection

This project took me approximately 2 hrs (including error troubleshooting on both the CloudFront and S3 bucket side). The most challenging part was creating the using the OAC apporiately to give CloudFront the right permissions it needs to access the bucket. It was most rewarding to my website hosted on both S3 and CloudFront.

I chose to do this project today because website hosting is one of the necessary tools to have in your arsenal as a Cloud developer or DevOps Engineer.

---

## Set Up S3 and Website Files

I started the project by creating an S3 bucket to store my website files. I can't use CloudFront for this task because its a CDN service, not a storage solution. It simply caches and distributes your contents closer to end users through edge locations.

The three files that make up my website are index.html, which is the main file for the website that organizes the texts, pictures, and videos on the webpage, style.css organizes the visual appearance of the website's HTML elemeents (font style, size, color and more)  and fijnally, the script.js, which is the javascript file that adds interaction to the webpage. It includes instructions on how things should move or change on the website.  Without it, the website would just look pretty or beautiful, but with no interactive capabilities.

I validated that my website files work by opening the index.html file on my preferred browser of choice.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-networks-cloudfront_qgo7wcd3)

---

## Exploring Amazon CloudFront

Amazon CloudFront is a content delivery network, which means  a service that caches content and speeds up the distribution of such contents faster to users. Businesses and developers use CloudFront because it enables them to cache their contents on multiple servers around the world, closer to their end-users, reducing latency and delivering faster access to them.

To use Amazon CloudFront, you set up distributions, which are simply settings to contorl how my contents or assets are delivered to end-users around the world. I set up a distribution for Amazon S3 bucket. The origin where my content lives, i.e, the storage location of my website files.

My CloudFront distribution's default root object is the index.html file. This means that wehen users visit my website, they will see the contents of my index.html file.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-networks-cloudfront_qgo7wcdt)

---

## Handling Access Issues

When I tried visiting my distributed website, I ran into an access denied error because CloudFront hasn't been given the permission to access the S3 bucket yet. 

My distribution's origin access settings were set to OAC, i.e, access is restricted to only CloudFront, making CF access the contents of my bucket. An access error still occured because this setting does not reflect in my bucket policies. So, though, in my CloudFront distribution, I have stated for only CloudFront to access my S3 bucket through the OAC, the same policy hasn't been created in my S3 bucket policies,

 OAC is a special user or role that CloudFront uses to access the objects in my bucket. It helps keep my bucket private, but still accessible by CloudFront. It can also provide control over how CloudFront accesses contents.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-networks-cloudfront_egrhntyu)

---

## Updating S3 Permissions

Once I set up my OAC, I still needed to update my bucket policy because my S3 bucket by deafault, is private. So, I need to create a ploicy that allows CloudFront to access my bucket.

Creating an OAC automatically gives me a policy I could copy, which grants CloudFront the right permissions it needs to access my S3 bucket.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-networks-cloudfront_eg98ntyu)

---

## S3 vs CloudFront for Hosting

For my project extension, I'm comparing the performance and security associated with accessing my website directly from the S3 bucket, compared to serving from CloudFront. I initially had an error with static website hosting because public access wasn't enabled yet the bucket. This means any anyone should be able to access the website directly from the bucket.

I tried resolving this by disabling the "Block public access" button I still ran into an error because that simply stopped blocking all block access, but didn't enable public access for anyone. What will do that is the bucket policy!

I could finally see my S3 hosted website when I added a block within my bucket policy, enabling public access to anyone for any object within the bucket. This worked because the "Block public access" botton is just the first layer of security on the bucket that either allows or blocks all public access to the bucket. The second and most vital layer of security that grants a more gradular detail in control is the "Bucket policies". This allows you to state who can access the bucket and what they are allowed to perform on the objects within the bucket. In my case, this was for anyone (*) and for any object (*) within the bucket. So, now our bucket policy contains permissions for both CloudFront and S3 bucket itself.

Compared to the permission settings for my CloudFront distribution, using S3 meant my objects in the bucket had to be exposed to the public, making my bucket less secure, and anyone stealing whatever object they wanted. I preferred using CloudFront to host my website because it was the only resource allowed to retrieve my website contents from the bucket or origin.

---

## S3 vs CloudFront Load Times

Load time means the time it takes for a browser to load contents from a website. The load times for the CloudFront site were faster than the S3 site because CloudFront's CDN capabilities allowed for my website contents to be cached at edge locations much closer to me than that of the S3 regional service.

A business would prefer CloudFront when looking to reduce the latency of their websites(load times) for users much further away. S3 static website hosting might be sufficient when we just want to do a local test, starting out, or just serve contents to users of only a specific region.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-networks-cloudfront_12verpuh)

---

---
