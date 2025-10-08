# Stage 1: Dependencies and test
FROM node:20-alpine AS test
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "test"]

# Stage 2: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 3: Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
