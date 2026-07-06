# Host a Website on Amazon S3

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-host-a-website-on-s3_5d4474f9)

---

## Introducing Today's Project!

In this project, I will demonstrate... I'm doing this project to learn  how to host static websites using S3 buckets

### Tools and concepts

Services I used were Amazon S3. Key concepts I learnt include how to host static website in S3 buckets(upload), ACLs(their control over individual objects in the bucket), Bucket policies(how to use them to provide access over the entire bucket or an object), and bucket endpoint URLs

### Project reflection

This project took me approximately 1 hr 30 mins. The most challenging part was understanding the key difference between ACLs and bucket policies. It was most rewarding to see the website live through the bucket endpoint URL accessed via the internet.

---

## How I Set Up an S3 Bucket

About 1 min

The Region I picked for my S3 bucket was Seoul,because its the region that is closest to me

S3 bucket names are globally unique! This means no other bucket can have same name, globally, within the AWS ecosystem.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-host-a-website-on-s3_ba6d42ad)

---

## Upload Website Files to S3

### index.html and image assets

I uploaded two files to my S3 bucket - they were the index.html file(this determines the structure of my website) and a folder containing a bunch of assets(this folder contains a bunch of images and styles beautify the website)

Both files are necessary for this project as the index.html shows the structure of the webpage, while the folder of assets contains the contents needed to supply fill up the structure of the webpage

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-host-a-website-on-s3_a265af88)

---

## Static Website Hosting on S3

Website hosting means storing all your website contents on a web server, so that it is accessible via the internet or to the public.

To enable website hosting with my S3 bucket, I must enable the website hosting feature of my S3 bucket and indicate the HTML index file it must display.

An ACL is a set of rules or policies that allows or denies a user access to a resource. 

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-host-a-website-on-s3_c22c54c0)

---

## Bucket Endpoints

Once static website is enabled, S3 produces a bucket endpoint URL, which is the link that makes your HTML page accessible to the public via the internet

When I first visited the bucket endpoint URL, I saw a 403 Forbidden error message.The reason for this error was it was because the objects in S3 bucket were still private, that is, not accessible to the public.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-host-a-website-on-s3_22ce4daf)

---

## Success!

To resolve this 403 Forbidden error,I disabled the Block public access, enabled ACLs to grant access to my objects, and made all my objects public in the actions drop down list. 

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-host-a-website-on-s3_5d4474f9)

---

## Bucket Policies

An alternative to ACLs are bucket policies, which are simply JSON files which define permissions over who can access the bucket, and what actions they can perform (read, write and delete) .. The benefit of using bucket policies is they provide security control over the entire bucket(in a broad sense), while ACLs are useful for providing gradular control over individual objects in the bucket.

My bucket policy denied all ability to delete the html file.I tested this by trying to delete the index.html file myself,and saw an error message(failed to delete object). Meaning the rule is working and applies even to me.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-host-a-website-on-s3_sm2sm2sm)

---

---
