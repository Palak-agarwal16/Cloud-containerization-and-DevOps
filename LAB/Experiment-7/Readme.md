# Lab Experiment 7: CI/CD using Jenkins, GitHub and Docker Hub

## 1. Aim
To design and implement a complete CI/CD pipeline using Jenkins, integrating source code from GitHub, and building & pushing Docker images to Docker Hub.

## 2. Introduction
CI/CD stands for Continuous Integration and Continuous Deployment. It automates the process of building, testing, and deploying applications. Tools like Jenkins, GitHub, and Docker Hub help in creating a complete pipeline for efficient software delivery.

## 3. CI/CD Pipeline Architecture
Developer → GitHub → Jenkins → Docker Build → Docker Hub

## 4. Part A: GitHub Repository Setup (Source Code + Build Definition)

### 4.1 Create Repository
Create a repository on GitHub:
my-app

![alt text](image1.png)

### 4.2 Project Structure
my-app/
├── app.py
├── requirements.txt
├── Dockerfile
├── Jenkinsfile

### 4.3 Application Code

app.py
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from CI/CD Pipeline!"
    #return "Hello from CI/CD Pipeline!, my sapid is 123456"

app.run(host="0.0.0.0", port=80)

![alt text](image2.png)

requirements.txt
flask

![alt text](image3.png)

### 4.4 Dockerfile (Build Process)
FROM python:3.10-slim

WORKDIR /app
COPY . .

RUN pip install -r requirements.txt

EXPOSE 80
CMD ["python", "app.py"]

![alt text](image4.png)

### 4.5 Jenkinsfile (Pipeline Definition in GitHub)
pipeline {
    agent any

    environment {
        IMAGE_NAME = "your-dockerhub-username/myapp"
    }

    stages {

        stage('Clone Source') {
            steps {
                git 'https://github.com/your-username/my-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {
                    sh 'echo $DOCKER_TOKEN | docker login -u your-dockerhub-username --password-stdin'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push $IMAGE_NAME:latest'
            }
        }
    }
}

![alt text](image5.png)

## 5. Part B: Jenkins Setup using Docker (Persistent Configuration)

### 5.1 Create Docker Compose File
version: '3.8'

services:
  jenkins:
    image: jenkins/jenkins:lts
    container_name: jenkins
    restart: always
    ports:
      - "8080:8080"
      - "50000:50000"
    volumes:
      - jenkins_home:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
    user: root

volumes:
  jenkins_home:

![alt text](image6.png)

### 5.2 Start Jenkins
docker-compose up -d

![alt text](image7.png)

Access:
http://localhost:8080

### 5.3 Unlock Jenkins
docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword

![alt text](image8.png)

### 5.4 Initial Setup
- Install suggested plugins
- Create admin user

## 6. Part C: Jenkins Configuration

### 6.1 Add Docker Hub Credentials
- Type: Secret Text
- ID: dockerhub-token
- Value: Docker Hub Access Token

![alt text](image9.png)

### 6.2 Create Pipeline Job
Pipeline script from SCM
- SCM: Git
- Repo URL: your GitHub repo
- Script Path: Jenkinsfile

![alt text](image10.png)

## 7. Part D: Trigger Mechanism (Manual Execution)
In this experiment, the pipeline was triggered manually from Jenkins dashboard.

Steps:
1. Open Jenkins Dashboard
2. Select pipeline job
3. Click Build Now
4. Pipeline executes

![alt text](image11.png)

## 8. Part E: Execution Flow (Stage-wise)

Stage 1: Code Push
Developer updates code in GitHub

![alt text](image12.png)

Stage 2: Triggering
GitHub sends event to Jenkins

![alt text](image13.png)

Stage 3: Jenkins Pipeline Execution

Clone Stage:
Pulls latest code from GitHub

![alt text](image14.png)

Build Stage:
Docker builds image

![alt text](image15.png)

Auth Stage:
Jenkins logs into Docker Hub

![alt text](image16.png)

Push Stage:
Image pushed to Docker Hub

![alt text](image17.png)

Stage 4: Artifact Ready
Docker image available globally

![alt text](image18.png)

/var/run/docker.sock

![alt text](image19.png)

## 9. Basic Pipeline Structure
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'echo Hello'
            }
        }
    }
}

![alt text](image20.png)

![alt text](image21.png)

![alt text](image22.png)

## 10. Key Takeaways
- pipeline → stages → stage → steps defines structure
- sh executes shell commands
- git fetches code
- withCredentials secures secrets
- secrets are protected and temporary

## 11. Result
CI/CD pipeline executed successfully. Docker image built and pushed to Docker Hub.

## 12. Conclusion
Successfully implemented CI/CD pipeline using Jenkins, GitHub, and Docker Hub. Automation improved efficiency and reduced manual effort.