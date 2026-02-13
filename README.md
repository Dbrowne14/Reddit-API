# 🎨 RedCanvas

RedCanvas is a modern Reddit art gallery frontend built with React.  
It allows users to browse subreddit content through a clean, image-focused interface powered by a custom proxy backend.

---

## 🌍 Live Deployment

- 🌐 Frontend: Hosted on Netlify
- 🔌 Backend Proxy: Hosted on Render
- 📡 Data Source: Reddit API (via proxy)

---

## 🧠 Overview

RedCanvas provides a streamlined, visual-first way to explore subreddit content.

The frontend:

- Fetches data through a custom proxy server
- Uses RTK Query for caching and API state management
- Implements client-side routing for smooth navigation
- Displays subreddit media in a responsive gallery layout
- Optimizes loading behavior for improved user experience

---

## 🔗 Architecture Overview

[Architecture_Docs](./docs/architecture.png)

The frontend never communicates directly with Reddit.  
All requests are routed through the backend proxy to:

- Prevent CORS issues
- Avoid exposing credentials
- Normalize API responses
- Improve security

---

## 🚀 Tech Stack

- React
- Redux Toolkit
- RTK Query
- TypeScript 
- Tailwind CSS 
- Deployed on Netlify

---

## 📦 Installation (Local Development)

```bash
git clone https://github.com/Dbrowne14/Reddit-API.git
cd redcanvas
npm install
npm start
```

The app runs locally at:

```
http://localhost:3000
```

Make sure your proxy backend is running locally or update the API base URL accordingly.

---

## ⚙️ Environment Configuration

If using environment variables:

```
REACT_APP_API_BASE_URL=http://localhost:5000
```

In production, this should point to your Render backend URL.

---

## 📡 Example Route

```
/r/:subreddit
```

Example:

```
/r/pixelart
```

Displays formatted subreddit content retrieved via the proxy server.

---

## ✨ Features

- Client-side routing
- Cached API responses with RTK Query
- Responsive gallery layout
- Image loading optimizations
- Clean UI focused on visual content

---

## 🔐 Security

- No API keys stored in frontend
- All external requests handled via proxy server
- CORS properly configured on backend

---

## 📌 Related Repository

- Backend Proxy Server: RedCanvas Proxy (Render)
- [Github_Link](https://github.com/Dbrowne14/reddit-app-proxy-server
)