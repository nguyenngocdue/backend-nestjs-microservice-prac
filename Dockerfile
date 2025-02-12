# Sử dụng Node.js chính thức
FROM node:20

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy toàn bộ mã nguồn từ thư mục `app/` thay vì thư mục gốc
COPY app/package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ thư mục `app/` vào container
COPY app/ .

# Chạy Prisma nếu có
RUN npx prisma generate

# **Biên dịch NestJS**
RUN npm run build

# Mở cổng ứng dụng (đổi sang 3003 nếu cần)
EXPOSE 3003

# Chạy ứng dụng
CMD ["node", "dist/src/main"]
