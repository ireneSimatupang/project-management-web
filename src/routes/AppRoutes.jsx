import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/Layout/ProtectedRoute";
import ProjectDetail from "../pages/ProjectDetail";
// import useAuthStore from "../stores/authStore";

export default function AppRoutes() {
    // const user = useAuthStore((store) => store.user);
    // console.log(user);
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={
                <ProtectedRoute>
                <Layout />
                </ProtectedRoute>
                }>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/profile" element={<Profile />} />
            </Route>

            </Routes>
        </BrowserRouter>
    );
}