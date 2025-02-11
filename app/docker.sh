#!/bin/bash

# Tên dịch vụ trong docker-compose.yml
SERVICE_NAME="prac_01"

# Kiểm tra tham số truyền vào
if [ "$1" == "start" ]; then
    echo "🚀 Starting Docker containers..."
    
    # Chạy Docker Compose với chế độ detached (-d)
    docker-compose up -d --build

elif [ "$1" == "stop" ]; then
    echo "🛑 Stopping Docker containers..."
    
    # Dừng và xóa container mà không cần docker rm
    docker-compose down

elif [ "$1" == "restart" ]; then
    echo "🔄 Restarting Docker containers..."
    
    docker-compose down
    docker-compose up -d --build

else
    echo "❌ Invalid command. Usage: ./docker.sh start | stop | restart"
    exit 1
fi
