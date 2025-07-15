#  Student-To-Do List Web APp

 
A simple full-stack to-do list app that helps students manage tasks effectively. Includes login, signup, task creation, viewing, completion, and deletion features.



##  Features

*  User Sign Up & Login (with password hashing)
*  Add and manage personal tasks
*  View tasks specific to each user
*  Mark tasks as complete or delete them
*  Clean, responsive user interface



##  Tech Stack

**Frontend:**
HTML5, CSS3, JavaScript (Vanilla)

**Backend:**
Node.js, Express.js, MongoDB (via Mongoose), bcryptjs (for password encryption), cors (for frontend-backend connection)



##  Folder Structure

<img width="1115" height="428" alt="Image" src="https://github.com/user-attachments/assets/00e46679-f911-40e1-a450-91b47afe36db" />

##  Getting Started

### 1. Prerequisites

Ensure the following are installed on your system:

* Node.js
* MongoDB
* Visual Studio Code (recommended)



### 2. Installation Steps

* Initialize Node and install backend dependencies:
  npm install

* Make sure MongoDB is running:
  mongod



### 3. Run the Server

To start the server, run:
node server.js

You should see a message like:
“Server started on port 5000”
“Connected to MongoDB”   

As this files mostly under node_module folder and they are huge to share...i am not displaying them in my repository


### 4. Run the Frontend

Open `signup.html` or `login.html` from the `public/` folder in your browser.
You can also use the Live Server extension in VS Code for a better experience.



##  API Endpoints

* POST   /api/register     → Register a new user
* POST   /api/login        → Login user
* POST   /api/tasks        → Create new task
* GET    /api/tasks/\:username   → Get all tasks for user
* PUT    /api/tasks/\:id         → Update task (mark complete)
* DELETE /api/tasks/\:id         → Delete task



##  Screenshots

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/51e21b0d-28fb-466b-86b7-5198f7fee856" />

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/51e9c3d9-c7b7-476a-81e9-579670f0ef28" />

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/14388827-9222-4728-a9ad-4e7d2613f284" />

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/7feb77fe-0aef-442a-8b86-3f6d931d5f15" />

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/1d897f23-e907-4c71-b94b-5694e75efdab" />

As the dat entered as todo list have been stored in database
<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/77e078a8-f48e-4e7f-a1cf-0df9fd3ea82e" />

##  Future Improvements

* Add mobile responsiveness
* Set deadlines or reminders for tasks
* Add task categories like Study, Homework, Project
* Add forgot password/reset password feature
* Use JWT-based session handling for better security

This project is free and open-source for learning and development purposes.



##  Author

**Rachabattuni Sai Sindhu**
MCA Student @ Jain (Deemed-to-be University), Bangalore.
Passionate about full-stack development and real-world project building.



