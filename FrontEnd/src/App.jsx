import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Signup from "@/pages/Auth/Signup";
import Login from "@/pages/Auth/Login";
import Dashboard from "@/pages/Dashboard/Home";
import Income from "@/pages/Dashboard/Income";
import Expense from "@/pages/Dashboard/Expense";

// ✅ Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

// ✅ Root redirection
const Root = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
};

// ✅ Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/income",
    element: (
      <ProtectedRoute>
        <Income />
      </ProtectedRoute>
    ),
  },
  {
    path: "/expense",
    element: (
      <ProtectedRoute>
        <Expense />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
// Expense-Tracker/FrontEnd/src/App.jsx