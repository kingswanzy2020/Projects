<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# AI Security Scanner for Python

**Project Link:** [View Project](http://learn.nextwork.org/projects/ai-security-audit)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-security-audit_sec4e5f6)

---

## Introducing Today's Project!

In this project, I'm going to build an AI security scanner for Python. This will help me learn how development teams catch vulnerabilities in their application before it reaches production. I'm interested in this because it saves a lot of effort on the part of Developers when using manual tools in detecting these vulnerabilities.

### Key tools and concepts

Tools I used were Gemini, Gemini API key, Security vulnerabilities and Cursor. Key concepts I learnt include: How to use Gemini API to analyze code for security vulnerabilities, Adding colored terminal output with colorama for severity ratings, Common security vulnerabilities: SQL injection, hardcoded secrets, and weak cryptography. The most important skill was how to implement AI in testing for vulnerability severities before pushing the application to production.

### Challenges and wins

This project took me approximately 2 hours.The most challenging part was learning how implementing severity ratings to my responses. It was most rewarding to implement AI in the vulnerability process, eliminating a lot of manual steps, and reducing detection time.

### Why I did this project

I did this project today because applications are shipped everyday, hence, its only right to have a safety net that checks for vulnerabilities in the code. This project met my goals by englightning me on the ways of software development process.

---

## Connecting to Gemini API

In this step, I'm setting up the Gemini API connection. This involves retrieveing the API key from Google and saving it in a ".env file". I need to do this so I can test my connection to Gemini.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-security-audit_sec2c3d4)

I verified the connection by running my test script using "python scanner.py". Gemini responded with "Hello, security scanner!" which confirmed that my prompts have been authenticated and processed by Google's servers.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-security-audit_sec4e5f6)

My scanner.py file works by identifying vulnerabilities in test code. When I ran it, Gemini identified the hardcoded credentials and informed me of the risks of exposure. This shows that the Gemini API can be used to analyze to application code for vulnerabilities before pushing to production.

---

## Building the Vulnerability Scanner

In this step, I'm building a vulnerability scanner that detects SQL injection, hardcoded secrets, and weak cryptography - the same vulnerabilities that professional tools look for.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-security-audit_sec7h8i9)

The vulnerabilities Gemini detected were SQL injection,  Hardcoded credentials and Weak MD5 hashing(cryptography). The security prompt I crafted asked for the Vulnerability type, why its vulnerable, its impact and a secure code fix . This structured output helps me quickly get a sense of all the vulnerability type within my application and how to fix them.

---

## Adding Severity Ratings

In this step, I'm adding severity ratings which helps me eaily prioritze the severity of the vulnerabilities to fix them promptly. I'm also installing colorama to provide me with a colored terminal output for my severity ratings.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-security-audit_sec0k1l2)

I updated the security prompt to include color coded texts in the terminal. The add_colors_to_output function works by taking in the text response and color codes them based on the severity ratings. When I see CRITICAL in red, it tells me this is a severe vulnerabilty that must be fixed quickly.

---

## Scanning Real Python Files

---

## Wrap-up

---

---
