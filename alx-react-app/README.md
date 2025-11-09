# ALX Front-End ReactJS Projects

This repository contains the tasks and exercises for the **ALX Front-End ReactJS** learning module.  
Each task is designed to help you understand React concepts step-by-step — from project setup to component creation and props handling.

---

##  Project Structure

alx-fe-reactjs/
└── alx-react-app/
├── src/
│ ├── components/
│ │ ├── WelcomeMessage.jsx
│ │ ├── Header.jsx
│ │ ├── MainContent.jsx
│ │ ├── Footer.jsx
│ │ └── UserProfile.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
├── package.json
├── vite.config.js
└── index.html

markdown
Copy code

---

##  Tasks Overview

### **0. Create Your First React App**
- Created the repository `alx-fe-reactjs`.
- Used **Vite** to create a new React project called `alx-react-app`.
- Installed dependencies and ran the app using `npm run dev`.

### **1. Modify JSX in a Pre-built Component**
- Added a new component `WelcomeMessage.jsx` under `src/components/`.
- Updated JSX with a personalized message.
- Imported and displayed `<WelcomeMessage />` inside `App.jsx`.

### **2. Create Specific Components**
- Built three components:  
  - `Header.jsx` — displays the title.  
  - `MainContent.jsx` — displays favorite cities.  
  - `Footer.jsx` — displays copyright.  
- Assembled them together inside `App.jsx`.

### **3. Create a User Profile Card Using Props**
- Created `UserProfile.jsx` which receives `name`, `age`, and `bio` as props.
- Rendered the user profile dynamically inside `App.jsx`.

---

##  Getting Started

### **1. Clone the repository**
```bash
git clone https://github.com/<your-username>/alx-fe-reactjs.git
cd alx-fe-reactjs/alx-react-app
2. Install dependencies
bash
Copy code
npm install
3. Run the app
bash
Copy code
npm run dev
Then open http://localhost:5173 in your browser.

Concepts Covered
React project setup using Vite

JSX structure and syntax

Functional components

Component composition

Props and data passing

Rendering multiple components

Author
Mamikie Maemu
Aspiring Front-End Developer | ALX Software Engineering Student