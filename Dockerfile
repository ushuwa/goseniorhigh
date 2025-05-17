# Use a lightweight OpenJDK 17 image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built Spring Boot jar file to the container
COPY target/*.jar app.jar

# Run the application
CMD ["java", "-jar", "app.jar"]
