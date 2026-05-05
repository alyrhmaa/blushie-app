import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

// Lazy Pages
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const Members = lazy(() => import("./pages/MembersPage"));
const Orders = lazy(() => import("./pages/OrdersPage"));
const Loyalty = lazy(() => import("./pages/LoyaltyPage"));
const Segmentation = lazy(() => import("./pages/SegmentationPage"));
const Campaigns = lazy(() => import("./pages/CampaignsPage"));
const Queue = lazy(() => import("./pages/QueuePage"));
const Feedback = lazy(() => import("./pages/FeedbackPage"));
const Analytics = lazy(() => import("./pages/AnalyticsPage"));
const Login = lazy(() => import("./pages/LoginPage"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* 🔥 REDIRECT ROOT */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 🔐 AUTH LAYOUT */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* 🖥️ MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/segmentation" element={<Segmentation />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>

        {/* ❗ FALLBACK (ANTI ERROR URL) */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </Suspense>
  );
}