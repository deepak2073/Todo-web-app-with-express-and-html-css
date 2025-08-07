# Simple TODO App (HTML + JavaScript + Express)

This is a lightweight full-stack TODO application built with plain HTML, CSS, JavaScript, and Node.js (Express). It demonstrates basic CRUD operations using the Fetch API and filesystem-based persistence.

## ✨ Features

- View all tasks on page load
- Add new tasks via a form
- Delete tasks with one click
- Backend persistence using `todos.json`

## Tech Stack

- HTML5
- CSS3 (minimal inline styling)
- JavaScript (Vanilla)
- Node.js
- Express.js
- File System (`fs`) module for storage

## How It Works

1. **Frontend**:
   - Loads tasks from backend via `GET /todos`
   - Submits new task via `POST /todos`
   - Deletes task via `DELETE /todos/:id`

2. **Backend**:
   - Reads and writes to `todos.json` file
   - Handles REST API endpoints

## Project Structure

