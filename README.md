# 💻 Personal Website

A modern, interactive developer portfolio to showcase my projects, games, designs, and blogs — all built with React, Framer Motion, and Three.js.

🌐 **Live Demo**: [link](https://sauravsan.onrender.com/)

## 🚀 Features

* ✨ Beautiful animated landing page
* 🛰️ Starfield background with 3D canvas effects
* 🎮 Projects section divided into **Projects**, **Games**, and **Designs**
* 🎥 Dynamic design cards that play videos on hover
* 📝 Blog section with search and tag filtering
* 🌙 Dark-themed, modern UI with smooth transitions
* 🌀 Fully responsive design

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS, Framer Motion, Three.js
* **Backend:** Node.js, Express.js (for blog data API)
* **Other libraries:** react-simple-typewriter, react-icons, react-tilt (removed in favor of Framer hover)

## ⚡ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio

# Install dependencies
npm install

# Create an .env file
cp .env.example .env

# Update API URLs and other environment variables in .env

# Start the development server
npm run dev
```

## 🌐 Environment Variables

### Frontend (.env)
```bash
VITE_BACKEND_URL=http://localhost:5000/api
```

### Backend (.env)
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
```

Update the `VITE_BACKEND_URL` if you deploy the backend elsewhere (e.g., Render, Vercel, AWS).

## 🎨 Folder Structure

```bash
src/
├── assets/          # Images, icons, videos
├── components/      # Reusable UI components (Navbar, StarsCanvas, etc.)
├── constants/       # Project, game, design data
├── hoc/             # Higher-order components
├── pages/           # Page components (Home, Blogs, Works, etc.)
├── styles/          # Tailwind & global styles
├── utils/           # Animations & helper functions
├── App.jsx
└── main.jsx
```
