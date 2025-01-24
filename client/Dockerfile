# Use the official Node.js image from the Docker Hub
FROM docker.arvancloud.ir/node:20.11.0 as base

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
