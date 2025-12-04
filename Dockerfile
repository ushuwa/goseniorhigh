# Use a lightweight OpenJDK 17 image
#FROM openjdk:17-jdk-slim

# Set the working directory inside the container
#WORKDIR /app

# Copy the built Spring Boot jar file to the container
#COPY target/*.jar app.jar

# Run the application
#CMD ["java", "-jar", "app.jar"]

# Use supported Java 17 base image
FROM eclipse-temurin:17-jdk-jammy

# Set working directory
WORKDIR /app

# Copy Spring Boot JAR
COPY target/*.jar app.jar

# Expose default Spring Boot port
EXPOSE 8080

# Run application
CMD ["java", "-jar", "app.jar"]

