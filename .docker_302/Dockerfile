# docker_302/Dockerfile

FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép các file package.json và package-lock.json từ thư mục app
COPY ../app/package*.json ./

# Set ownership for the entire directory (if necessary)
RUN chown -R node:node ../app

# Cài đặt các dependency
RUN npm install

# Sao chép toàn bộ mã nguồn từ thư mục app
COPY ../app .


# Mở cổng 3000
EXPOSE 3000

# Create a logs directory (optional

USER node
# Lệnh khởi chạy ứng dụng ở môi trường production
CMD ["npm", "run", "start:dev"]
