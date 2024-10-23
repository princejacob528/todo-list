# To-Do List (Task App)

A simple yet effective task management web app built using **React JS** and **Tailwind CSS**. This app allows users to manage their tasks efficiently with an intuitive interface.

## Features

- **Add Tasks**: Use the input field to add new tasks to your to-do list.
- **Complete or Incomplete Tasks**: Simply click on a task to toggle its completion status.
- **Delete Tasks**: Remove tasks from your list using the delete (bin) icon.
- **Persistent Storage**: Your tasks are saved locally in your browser, so you never lose them, even after closing the app.

## User Interaction

1. **Adding a Task**: Type your task into the input field and hit "Enter" or click the "Add Task" button. The task will appear in the list below.
2. **Marking as Complete**: Click on any task in the list to mark it as completed. Click again to undo the action.
3. **Deleting a Task**: To remove a task, click on the bin icon next to the task. This will instantly delete it from your list.
4. **Automatic Saving**: All tasks are saved automatically in the browser’s local storage. You can close the app and return to find your tasks exactly where you left them.

## Technologies Used

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS

## Storage

The app uses **Local Storage** to ensure your tasks are saved between sessions. Your to-do list will remain available even after refreshing or reopening the browser.

## Installation

To run this app locally, follow these steps:

```bash
npm install
npm run dev
