# Employees Manager

A Spring Boot application for managing employee records, including features like adding, updating, deleting, and viewing employee details. This project serves as a simple Employee Management System (EMS) designed for easy integration and customization in enterprise-level applications.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Project Overview

The **Employee Manager** project is designed to allow organizations to manage employee details efficiently. The application includes basic CRUD (Create, Read, Update, Delete) operations for employee management. It offers a user-friendly API built with Spring Boot, which can be expanded to include additional features such as authentication, role-based access control, and more.

---

## Technologies Used

- **Spring Boot**: For building the backend REST API.
- **Spring Data JPA**: For database access and management.
- **H2 Database**: Lightweight, in-memory database for development.
- **Maven**: For dependency management and build.
- **Java 17**: The version of Java used for this project.

---

## Installation

### 1. Clone the repository

Start by cloning the project repository to your local machine:

```bash
git clone https://github.com/andrew2k4/employees-manager.git
```

### 2. Navigate to the project directory
Change to the project directory:
```
cd server
 ```

### 3. Install dependencies
The project uses Maven for dependency management. Run the following command to install the necessary dependencies:


```bash
./mvnw clean install -DskipTests
```
This will build the project and download all necessary dependencies. The -DskipTests flag will skip running unit tests during the build process, saving time.

## Usage
### 1. Run the application
After installation, you can start the application with the following command:
```bash
./mvnw spring-boot:run
```

This will start the Spring Boot application. By default, the application will be available at:

```
http://localhost:8090
```


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
Spring Boot: For simplifying Java web application development.
Spring Data JPA: For easy integration with relational databases.
H2 Database: A lightweight database used during development for testing.
Maven: For dependency management and project build.
vbnet
Code kopieren

### Steps to add this README:

1. Create a file named `README.md` in the **root** directory of your project.
2. Paste the entire content above into the `README.md` file.
3. Save the file.

Once this file is added to your project, it will appear well-formatted when viewed on GitHub or any platform that supports Markdown. Let me know if you need further adjustments!





