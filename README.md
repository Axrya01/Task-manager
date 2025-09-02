# MERN Stack Task Manager

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring real-time collaboration, user authentication, and modern UI.

## 🚀 Features

- **User Authentication**: Secure login/signup with JWT tokens
- **Task Management**: Create, edit, delete, and assign tasks
- **Project Management**: Organize tasks into projects with budgets and timelines
- **Real-time Chat**: Socket.io powered team communication
- **Notifications**: Real-time notifications for task updates
- **Team Collaboration**: Assign tasks to team members
- **Modern UI**: Built with React, TypeScript, Tailwind CSS, and Radix UI
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Zod** - Schema validation

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Hook Form** - Form handling

## 📁 Project Structure

```
MERN-Stack-Task-Manager/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store and slices
│   │   ├── services/      # API services
│   │   ├── hooks/         # Custom React hooks
│   │   ├── interfaces/    # TypeScript interfaces
│   │   └── lib/          # Utility functions
│   ├── dist/             # Built frontend files
│   └── package.json
├── src/                   # Backend source code
│   ├── Models/           # Database models
│   ├── Routes/           # API routes
│   ├── Middlewares/      # Express middlewares
│   ├── Helpers/          # Utility functions
│   └── Components/       # Backend components
├── server.js             # Main server file
├── package.json          # Backend dependencies
└── vercel.json          # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd MERN-Stack-Task-Manager
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

4. **Build the frontend**
   ```bash
   cd client
   npm run build
   cd ..
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:5000/api

## 🌐 Deployment to Vercel

### Step 1: Prepare for Deployment

1. **Update CORS settings** in `server.js`:
   ```javascript
   const corsOptions = {
     origin: process.env.NODE_ENV === 'production' 
       ? ['https://your-vercel-domain.vercel.app'] 
       : "http://localhost:5173",
     methods: "POST, GET, DELETE, PATCH, HEAD, PUT",
     credentials: true,
   };
   ```

2. **Ensure frontend is built**:
   ```bash
   cd client
   npm run build
   cd ..
   ```

### Step 2: Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy using Vercel Dashboard**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Node.js project

3. **Set Environment Variables** in Vercel:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `NODE_ENV`: `production`

4. **Deploy**:
   - Vercel will automatically build and deploy your application
   - Your app will be available at `https://your-project.vercel.app`

### Step 3: Update CORS (After Deployment)

Once deployed, update the CORS origin in `server.js` with your actual Vercel domain and redeploy.

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## 🔧 Customization

### Frontend Customization
- **Styling**: Modify `client/src/index.css` and Tailwind classes
- **Components**: Edit components in `client/src/components/`
- **Pages**: Modify pages in `client/src/pages/`
- **State Management**: Update Redux slices in `client/src/store/`

### Backend Customization
- **Models**: Modify database schemas in `src/Models/`
- **Routes**: Update API endpoints in `src/Routes/`
- **Middleware**: Add custom middleware in `src/Middlewares/`

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Check your `MONGO_URI` in `.env`
   - Ensure MongoDB Atlas IP whitelist includes your IP

2. **Build Errors**:
   - Run `npm install` in both root and client directories
   - Clear node_modules and reinstall if needed

3. **CORS Errors**:
   - Update CORS origin in `server.js` with your actual domain
   - Ensure environment variables are set correctly

4. **Vercel Deployment Issues**:
   - Check build logs in Vercel dashboard
   - Ensure all environment variables are set
   - Verify `vercel.json` configuration

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Aarya More 

---

**Note**: This is a portfolio project demonstrating full-stack development skills with modern technologies.
