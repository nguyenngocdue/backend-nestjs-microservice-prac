# Sử dụng hình ảnh Node.js chính thức làm hình ảnh cơ sở
FROM node:20

# Tạo thư mục ứng dụng
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn ứng dụng
COPY . .

# Xây dựng ứng dụng
RUN npm run build

# Chỉ định cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "run", "start:dev"]
