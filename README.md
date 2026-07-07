# 📈 Zerodha MERN Clone

A **full-stack Zerodha-inspired trading platform** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

This project is developed for **educational purposes** to understand the architecture of modern trading platforms, including portfolio management, backend APIs, and responsive dashboard interfaces.

---

## ✨ Features

- 🔐 User Authentication System
- 📊 Portfolio Dashboard
- 💼 Holdings & Positions Tracking
- 💹 Buy & Sell Functionality
- 🔗 RESTful API Integration
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Context API
- React Hooks
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Additional Tools
- Axios
- Nodemon
- CORS

---

## 📂 Project Structure

```text
Zerodha/
│
├── backend/                 # Express.js + MongoDB REST API
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/                # Landing Page / Main Website
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── dashboard/               # Trading Dashboard
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/anchallll02/zerodha_mern_project.git

cd zerodha-mern
```

---

## 2️⃣ Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a **.env** file:

```env
PORT=3002
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

or

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
npm install
npm start
```

The frontend will run at:

```text
http://localhost:3000
```

---

## 4️⃣ Dashboard Setup

Navigate to the dashboard directory:

```bash
cd ../dashboard
npm install
npm start
```

---

## 📂 Application Architecture

```text
                    User
                      │
                      ▼
               React Frontend
                      │
                      ▼
             Express.js Backend
                      │
                      ▼
                MongoDB Database
                      │
                      ▼
             Trading Dashboard
```

---

## 📜 License

This project is developed **for educational purposes only** and is **not affiliated with Zerodha**.

---

## 👩‍💻 Author

**Anchallll**

**GitHub:**  
https://github.com/anchallll02

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub.
