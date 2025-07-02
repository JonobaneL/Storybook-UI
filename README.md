# Storybook-based UI component system

This is a Next.js project built with Tailwind CSS, Zustand, Framer Motion, and Storybook, featuring reusable UI components: Input, Toasts and Sidebar Menu.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Component Overview](#component-overview)
- [Screenshots](#screenshots)

## Setup Instructions

### Prerequisites
- **Node.js**: Version 18.x or higher
- **npm** or **yarn**: Package manager of your choice
- **Git**: For cloning the repository

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/JonobaneL/Storybook-UI
   cd [folder_name]
   ```

2. **Install Dependencies**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the Development Server**
   Start the Next.js app:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Run Storybook**
   To explore components in Storybook:
   ```bash
   npm run storybook
   ```
   Or:
   ```bash
   yarn storybook
   ```
   Open [http://localhost:6006](http://localhost:6006) to view Storybook.

### Dependencies
- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **Framer Motion**: Animation library for smooth, declarative animations.
- **Storybook**: UI component development environment for testing and documentation.
- **Zustand**: Lightweight state management library for React/Next.js.

## Component Overview

### 1. Input
A customizable text input component with support for various states (e.g., default, focused, error, disabled).

- **Props**:
  - `value`: String - Input value.
  - `onValueChange`: Function - Handles input changes.
  - `clearable`: Boolean - Show or hide clear button.
  - `showArrows`: Boolean - Show or hide number arrows.
  - Rest of the default input props


### 2. Toasts
A notification system for displaying temporary messages (e.g., success, error, info), managed via a `ToastContainer` component and a Zustand store for dynamic addition and removal of toasts.


### 3. Sidebar Menu
The Sidebar Menu is a navigation panel with smooth open/close animations using Framer Motion. It supports expandable menu items, so users can toggle sections to show or hide sub-items.


## Screenshots

Below are placeholders for screenshots of each component in multiple states. Replace these with actual images captured from Storybook or your app.

### Input
- **Password Hidden**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-04-05.png?raw=true)
- **Password Visible**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-04-43.png?raw=true)
- **Clearable Text**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-05-01.png?raw=true)
- **Number with arrows**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-05-14.png?raw=true)
  - **Number without arrows**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-05-26.png?raw=true)
  - **Number with arrows**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-05-14.png?raw=true)

### Toasts
  - **Success Toast**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-06-21.png?raw=true)
    - **Error Toast**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-06-31.png?raw=true)
    - **Info Toast**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-06-43.png?raw=true)
    - **Warning Toast**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-06-55.png?raw=true)

### Sidebar Menu
- **Opened sidebar**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-07-21.png?raw=true)
  - **Extended nav menu**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-07-31.png?raw=true)
  - **Extended sub nav menu**  
  ![image_alt](https://github.com/JonobaneL/Storybook-UI/blob/main/public/screenshots/Screenshot%20at%20Jul%2002%2019-07-47.png?raw=true)
