# Student Management App

A full-stack web application for managing student information, built with React, Laravel, and a SQL database.

![picture-min](https://github.com/armen-meliksetyan/armen-meliksetyan-student-management-app/assets/77900433/1fd7cf84-a3b5-407f-ad14-1f10dcdc49e7)

## Official Documentation

For in-depth information and detailed documentation, please refer to the official documentation for each part of the project:

- [React (Frontend) Documentation](https://react.dev/)
- [Laravel (Backend) Documentation](https://laravel.com/docs/10.x/installation)
- [MySQL (Database service)](https://dev.mysql.com/doc/)

The official documentation provides extensive guidance on using and developing with React and Laravel, including advanced features, best practices, and examples.


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
  - [Frontend (React)](#frontend-react)
  - [Database (MySQL)](#database-mysql)
  - [Backend (Laravel)](#backend-laravel)
- [Usage](#usage)

## Overview
The Student Management App consists of two main components: the frontend, built with React, and the backend, developed with Laravel. This README provides information on how to set up and run the application.

## Features
- Add, view, edit, and delete student records.
- View a list of all students and their details.
- Search and filter students based on their full name.
- Secure and efficient storage of student data in a SQL database.

## Installation
### Frontend (React)

<img src="https://miro.medium.com/v2/resize:fit:1400/0*EitUXT-pqbaQSCTt.gif" width="400" alt="Alt Text">

> :warning: **Note:** You need to have [Node.js](https://nodejs.org/en) installed for running and local development.



1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. The React app should now be running on `http://localhost:3000`. You can access it in your web browser.


### Database (MySQL)
<img src="https://media2.giphy.com/media/vISmwpBJUNYzukTnVx/giphy.gif" width="400" alt="Alt Text">

#### Below are instructions on how to run a MySQL server on different operating systems👇:

<br>

<details>
  <summary>Running MySQL Server on Windows</summary>

  ### Windows (Using XAMPP)

  1. **Download XAMPP**: Visit the [XAMPP download page](https://www.apachefriends.org/) and download the XAMPP installer for Windows.

  2. **Run the Installer**: Execute the downloaded installer and follow the installation wizard's instructions. You can select the components you need, including the MySQL server.

  3. **Start MySQL Server**: After installation, open the XAMPP Control Panel, and from there, start the MySQL server.

</details>

<details>
  <summary>Running MySQL Server on macOS</summary>

  ### macOS (Using MAMP)

  1. **Download and Install MAMP**: Visit the [MAMP website](https://www.mamp.info/en/) and download MAMP. Install it by following the installation instructions.

  2. **Start MAMP**: Open MAMP and click the "Start Servers" button to start the MySQL server.

  ### macOS (Using Homebrew)

  1. **Install Homebrew**: If you don't have Homebrew installed, follow the [Homebrew installation instructions](https://brew.sh/) to set it up.

  2. **Install MySQL**: Run the following command to install MySQL using Homebrew:
     ```sh
     brew install mysql
     ```

  3. **Start MySQL Server**: Once installation is complete, you can start the MySQL server with:
     ```sh
     brew services start mysql
     ```

</details>

<details>
  <summary>Running MySQL Server on Linux</summary>

  ### Linux (Ubuntu)

  1. **Update Package Lists**: Open a terminal and update your package lists:
     ```sh
     sudo apt update
     ```

  2. **Install MySQL Server**: Install the MySQL server package:
     ```sh
     sudo apt install mysql-server
     ```

  3. **Start MySQL Server**: After installation, you can start the MySQL server and enable it to run on system boot:
     ```sh
     sudo systemctl start mysql
     sudo systemctl enable mysql
     ```

</details>

<br>

Please note that these are general instructions, and you may need to adjust them depending on your specific requirements and system configuration.


### Backend (Laravel)

<img src="https://assets-v2.lottiefiles.com/a/639784ea-1171-11ee-aea8-735bf223615c/IyZGK6hpdA.gif" width="300" alt="Alt Text">

> :warning: **Note:** You need to have [Composer](https://getcomposer.org/) installed for running and local development.


1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install PHP dependencies using Composer:
   ```bash
   composer install
   ```

3. Create a new `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Generate an application key:
   ```bash
   php artisan key:generate
   ```

5. Set up your database connection in the `.env` file, including the database name, username, and password. Example:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=student_management
   DB_USERNAME=root
   DB_PASSWORD=
   ```
   
6. Run database migrations to create tables:
   ```bash
   php artisan migrate
   ```
   
7. Seed the database with fake user data:
   ```bash
   php artisan tinker
   ```
   ```php
   User::factory()->count(50)->create()
   ```

8. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

9. The Laravel API should now be accessible at `http://localhost:8000`.

## Usage
1. Access the frontend application at `http://localhost:3000` in your web browser.
2. Use the app to manage student records, search for students, and more.

![Yes GIF](https://media.giphy.com/media/3oz8xTNxIYYo7sblK0/giphy.gif)

