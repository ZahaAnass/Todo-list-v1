# Todo List with Drag & Drop

A responsive Todo List application built with React, TypeScript, and react-beautiful-dnd. Manage your tasks with an intuitive drag-and-drop interface.

## ✨ Features

- **Interactive Drag & Drop**
  - Reorder tasks within the same list
  - Move tasks between Active and Completed lists
  - Smooth animations during drag operations

- **Task Management**
  - Add new tasks with ease
  - Edit tasks inline with a single click
  - Mark tasks as complete/incomplete
  - Delete tasks you no longer need

- **Modern UI/UX**
  - Clean, responsive design
  - Intuitive icons for actions
  - Visual feedback during interactions
  - Mobile-friendly layout

## 🛠️ Technologies Used

- **Frontend**
  - React 17
  - TypeScript
  - react-beautiful-dnd (v13.1.1)
  - Font Awesome 5.15.4
  - CSS3 for styling

- **Development Tools**
  - Create React App (TypeScript template)
  - ESLint
  - Prettier
  - TypeScript 4.9.5

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZahaAnass/Todo-list-v1.git
   cd Todo-list-v1
   ```

2. **Install dependencies**

   ```bash
   npm install --force 
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**

   The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000)

## 🎯 Project Structure

``` bash
src/
├── components/
│   ├── InputFeild/
│   │   ├── index.tsx          # Input field component
│   │   └── InputFeild.css     # Component styles
│   ├── SingleTodo/
│   │   ├── index.tsx          # Individual todo item component
│   │   └── SingleTodo.css     # Component styles
│   └── TodoList/
│       ├── TodoList.tsx       # Todo list container component
│       └── TodoList.css       # Component styles
├── model.ts                   # TypeScript type definitions
├── App.tsx                    # Main application component
├── index.tsx                  # Application entry point
└── index.css                  # Global styles
```

## 📝 Usage

1. **Adding a Task**
   - Type your task in the input field
   - Press Enter or click the Add button

2. **Editing a Task**
   - Click the pencil icon next to the task
   - Make your changes
   - Press Enter or click outside to save

3. **Completing a Task**
   - Click the checkmark icon
   - Or drag the task to the Completed section

4. **Reordering Tasks**
   - Click and hold to drag
   - Drag to the desired position
   - Release to drop

5. **Deleting a Task**
   - Click the trash can icon

## 🔧 Troubleshooting

If you encounter any issues:

1. **Dependency Issues**

   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

2. **TypeScript Errors**

   - Ensure all type definitions are installed
   - Check for version conflicts in `package.json`

## 🙏 Acknowledgments

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for the excellent drag and drop functionality
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Create React App](https://create-react-app.dev/) for the project setup
