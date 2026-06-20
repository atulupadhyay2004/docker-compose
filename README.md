# 🚀 Node.js + PostgreSQL with Docker Compose

This project demonstrates a full-stack containerized application using **Node.js**, **PostgreSQL**, and **Docker Compose**. It showcases how multiple services communicate in a Docker network and how to manage environments, volumes, and containers in a production-like setup.

---

## 📌 Project Overview

A simple Node.js application connected to a PostgreSQL database, fully containerized using Docker.

- Backend: Node.js (Express)
- Database: PostgreSQL
- Container Orchestration: Docker Compose

---

## 🏗️ Architecture


Client (Browser)
|
▼
Node.js App (Express)
|
▼
PostgreSQL Database


Both services run inside a shared Docker Compose network.

---

## 📂 Project Structure


docker-compose-project/
│
├── app/
│ ├── server.js
│ ├── package.json
│ └── Dockerfile
│
├── .env
└── docker-compose.yml


---

## ⚙️ Prerequisites

Make sure you have installed:

- Docker
- Docker Compose (v1 or v2)

Check versions:

```bash
docker --version
docker-compose --version
🚀 How to Run the Project
1. Clone the repository
git clone <your-repo-url>
cd docker-compose-project
2. Build and start containers
sudo docker-compose up -d --build
3. Check running containers
sudo docker-compose ps
4. View logs
sudo docker-compose logs -f
🌐 Access Application

Once running, open:

http://localhost:3000

You should see a response confirming database connectivity.

🐘 Environment Variables

Configured using .env file:

POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=mydb

POSTGRES_HOST=db
POSTGRES_PORT=5432
📦 Key Concepts Used
🐳 Docker
Images & Containers
Dockerfile (COPY, WORKDIR, EXPOSE, CMD)
🔗 Docker Compose
Multi-container setup
Service networking
Environment variables
Volumes for persistent storage
🗄️ PostgreSQL
Containerized database
Persistent data using Docker volumes
💾 Data Persistence

PostgreSQL data is stored using Docker volume:

volumes:
  postgres_data:

This ensures data is not lost when containers restart.

🛠️ Useful Commands
# Start containers
docker-compose up -d

# Stop containers
docker-compose down

# Rebuild containers
docker-compose up -d --build

# Remove everything (containers + volumes)
docker-compose down -v

# View logs
docker-compose logs -f
📈 What I Learned
Containerizing applications using Docker
Creating multi-service architecture with Docker Compose
Networking between containers using service names
Managing environment variables securely
Persistent storage using Docker volumes
Debugging containers using logs and inspect
🚀 Future Improvements
Add authentication layer
Integrate Redis caching
Add CI/CD pipeline (GitHub Actions)
Deploy on AWS / Kubernetes
👨‍💻 Author

Atul Upadhyay

DevOps | Cloud Enthusiast | Node.js Developer
