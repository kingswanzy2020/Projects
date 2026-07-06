<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Containerize a RAG API with Docker

**Project Link:** [View Project](http://learn.nextwork.org/projects/ai-devops-docker)

**Author:** Ahmed Tetteh  
**Email:** kingsleyswanzy@gmail.com

---

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_x7y8z9a0)

---

## Introducing Today's Project!

In this project, I will demonstrate how to create a docker image for my RAG API and push it to container registry like Docker Hub. I'm doing this project to learn the way big tech companies like Netflix and Spotify work with applications they are developing seamlessly on any environment or system.

### Key services and concepts

Services I used were AI, Docker, Docker Hub
, FastAPI, RAG (Retrieval-Augmented Generation), Chroma and Ollama. Key concepts I learnt include how to package my API in a Docker container,  Build Docker images from Dockerfiles, Run containerized applications
 and Test APIs running in containers.

### Challenges and wins

This project took me approximately 3 hours. The most challenging part was accessing my containerized RAG API via the right URL path. It was most rewarding to see how containers and Docker Hub can be integrated into the developer processes to speed up work, while still ensuring security and availability.

### Why I did this project

I did this project because knowing how to utilize docker is essential in modern day DevOps practices. 

---

## Setting Up the RAG API

In this step, I'm setting up my RAG API's code, database and dependencies. The RAG API consits of a RAG system (AI model) and a RestAPI (web API) working seamlessly together to deliver accurate responses to prompts based on the knowledge base.

### API setup and workspace

In this step, I should have already setup my virtual environment for my API to isolate all my API's dependencies from my global python packages. I will install Docker Desktop for package everything into a docker image.

### Dependencies installed

The packages I installed are Fastapi, chromadb, ollama and uvicorn. FastAPI is used for building APIs. Chroma is used for storing embeddings for vector databases. Uvicorn is a server that runs FastAPI applications and listens for incoming requests and then then routes them to the correct API endpoint . Ollama is python's client for Ollama.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_c9d0e1f2)

### Local API working

I tested that my API works inputting a curl command in the terminal for my access my /query endpoint. The local API responded with "{ "answer": "Response: Kubernetes is a container orchestration platform commonly used to manage and deploy containers at scale, allowing for greater flexibility in managing container-based applications.......}". This confirms that the API works and my /query endpoint can be reachec b because it accepted my prompt, went to the database to fetch data regarding the prompt and sent everything to Tinyllama(AI model) to generate a response for me.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_v5w6x7y8)

---

## Installing Docker Desktop

### Docker Desktop setup

Docker Desktop is an interactive UI tool that makes simplifies the use of docker for applications. I installed it because it makes  docker issue to use by having everything preinstalled, including the Docker daemon, our main engine that runs the docker commands. Containerization will help my project by bundling all my applications dependencies, files and packages into a container that can be run on any system.

### Docker verification

I verified Docker is working by running a simple command "docker run hello-world". The hello-world container proves that docker is running successfully and can create containers from docker images (templates).

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_i9j0k1l2)

---

## Creating the Dockerfile

In this step, I will be creating a Dockerfile for my RAG API. RAG stands for Retrieval Augmented Generation. 

### How the Dockerfile works

A Dockerfile is a text file of containing instructions that docker follows to build a docker image. The key instructions in my Dockerfile are: FROM tells Docker to download the base image python 3.11, COPY is used for copying all the code files for the app to the working directory of your conatainer, RUN installs all the Python packages for the RAG API, and CMD defines the command to run when the container starts, which launches the FastAPI server using Uvicorn and exposes it to be accessed on port 8000 of the container from any IP addresss.

### Containerized API test results

Testing the API after containerization proved that my RAG API run successfully in a container. The difference between running locally and in Docker is that, locally meant it used my system's Python and packages, making it dependent on my specific environment and prone to breaking if dependencies change, but running the application in Docker meant it used a consistent Python environment inside an isolated container, including all dependencies within the image. Containerization helps because it ensures that application will be viable across any machine with Docker.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_o1p2q3r4)

---

## Building and Running the Container

### Docker image build complete

Building a docker image involves creating a dockerfile containing all the instructio the docker daemon will follow to build the image. I verified my Docker image was built successfully by checking the images tab on Docker Desktop or running the command "docker images" This confirms that my API is now containerized because all the packages and packages needed for my API have all been bundled together to create a container and run on any system.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_p9q0r1s2)

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_x7y8z9a0)

---

## Pushing to Docker Hub

In this project extension, I'm pushing my docker image to Docker Hub. Docker Hub is a container registry for storing docker images and making them publicly available. I'm doing this because make my RAG API publicly available to the world and learn how developers share their works with each other.

### Docker Hub push complete

I pushed to Docker Hub by using the docker push command with the new image tag docker hub can identify. Docker Hub is useful because provides a repository to store our docker images and make them either private or public. The advantage of pushing to a registry is we can backup our images on the cloud and download them again with a single command "docker pull ImageName".

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_m5n6o7p8)

### Pulling from Docker Hub

Pulling an image from Docker Hub means we are downloading an image from the hub. When I ran docker pull, Docker search for the image on docker hub and downloaded it from my repository. The difference between building locally and pulling from Docker Hub is that building  consists of making up all the different parts (layers) that form and image by following instructioins from a Dockerfile, while pulling from Docker Hub is simply fetching an already built image unto your local system.

![Image](http://learn.nextwork.org/thoughtful_white_zany_vampire/uploads/ai-devops-docker_f5g6h7i8)

---

---
