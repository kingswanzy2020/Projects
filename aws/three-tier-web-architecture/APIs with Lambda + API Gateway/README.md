<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# APIs with Lambda + API Gateway

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-api)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-api_c9d0e1f2)

---

## Introducing Today's Project!

In this project, I will demonstrate how to design the logic part of my application, i.e, the brains behind the processing of user actions such as clicking to application functionality.

### Tools and concepts

Services I used were AWS Lambda and Amazon API Gateway. Key concepts I learnt include Lambda functions,  creating a API to receive user requests and sending them to the Lambda function for processing, and finally, how to document an API.

### Project reflection

This project took me approximately 2 hrs. The most challenging part was learning to choose the appropriate API and configuration for my use case. It was most rewarding to see my API working effectively.

I chose to do this project today because it's part of the backend logic for my Three-tier web architecture. 

---

## Lambda functions

AWS Lambda is a serveless resource that allows you to run code with provisioning or managing servers. I'm using Lambda in this project to create a backend system logic that runs whenever a request is made to the function. Hence, there is no need to have a server or VM running 24/7.

The code I added to my function first sets up the  DynamoDBClient from the AWS SDK for Javascript. Then when the function is triggered, it extracts a userId from the queryStringParameters of the incoming event object. This ID is used as the unique key to look up a specific record in the DynamoDB table named. It returns a status of 200 if the UserId exits in the database, and  404 along with an error message if the UserId doesn't exit in the database.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-api_a1b2c3d5)

---

## API Gateway

APIs are tools that act as middlemen between different resources,i.e, they enable them to talk eachother. There are different types of APIs, like WebSocket APIs, REST API(standard web API), and HTTP API for routing requests. My API is a REST API, because its a simple API that can be used by virtually any programming language, and provides everything we need for the backend logic.

Amazon API Gateway is simply the resource or tool that acts as the bridge between the user and the Lambda function for processing. It serves a middleman who carries the requests and responses from one end to another. I'm using API Gateway in this project because it comes API management capabilities and authorization features that makes an app more efficient - something Lambda does not have, and is not built for.

When a user makes a request, the API Gateway recieves the requests, and then forwards them to the Lambda Function for processing. Lambda processes the request, then sends the response through the API Gateway back to the user.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-api_m3n4o5p6)

---

## API Resources and Methods

An API is made up of resources, which are simply individual endpoints within your API that handle different parts of its functionality.

Each resource consists of methods, which are the different actions that can be performed on a resource. These actions can include standard web interaction methods such as;
1. GET: to retrieve,
2. POST to add,
3. PUT to update, and
4. DELETE to remove data.

I created a GET method for my API resource, and connected it to my Lambda function. Now, when the function runs, Lambda will retrieve user data in a DynamoDB table.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-api_c9d0e1f2)

---

## API Deployment

When you deploy an API, you deploy it to a specific stage. A stage is a snapshot of your API at a specific point in time. I deployed my API to the production stage.

To visit my API, I copied the "Invoke URL" link provided in my prod stage console.  The API displayed an error because my DynamoDB table hasn't been set up yet, so, there is nothing to retrieve or return to the user.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-api_3ethryj2)

---

## API Documentation

For my project's extension, I am writing API documentation because after creating a functional API, its also important add a detailed description of the API's functionality, including its endpoints (e.g. /users), methods (e.g. GET), parameters (e.g. userId), and responses (e.g. errors or success response). It helps other developers understand how to use the API correctly and more efficiently. This can easily be done in the API Gateway console.

Once I prepared my documentation, I can publish it in a special file type like Swagger or OpenAPI for developers to easily use tools like SwaggerUI or Redoc to generate beautiful, interactive web pages about the API. You have to publish your API to a specific stage because the documentation has to be consitent with a sepcific version of the API depolyed in that stage

My published and downloaded documentation showed me many fields, including the documentation I created for the API, the API version, resources and methods.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/aws-compute-api_z9a0b1c2)

---

---
