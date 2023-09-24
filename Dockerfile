# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory to the container
COPY . .

# Build the React app (you can customize this if needed)
RUN npm run build

# Expose a port for the app (if needed)
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]