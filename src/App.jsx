import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";
import LandingPage from "./pages/LandingPage";

// AUTH
const Login = lazy(() => import("./pages/LoginPage"));
const Register = lazy(() => import("./pages/RegisterPage"));

// USER MANAGEMENT
const Users = lazy(() => import("./pages/UsersPage"));

// MAIN PAGES
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const Members = lazy(() => import("./pages/MembersPage"));
const Orders = lazy(() => import("./pages/OrdersPage"));
const OrderDetail = lazy(() => import("./pages/OrderDetail"));

const Customers = lazy(() => import("./pages/Customers"));
const CustomerDetail = lazy(() => import("./pages/CustomerDetail"));



const Loyalty = lazy(() => import("./pages/LoyaltyPage"));
const Segmentation = lazy(() => import("./pages/SegmentationPage"));
const Campaigns = lazy(() => import("./pages/CampaignsPage"));
const Queue = lazy(() => import("./pages/QueuePage"));
const Feedback = lazy(() => import("./pages/FeedbackPage"));
const Analytics = lazy(() => import("./pages/AnalyticsPage"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* MAIN APP */}
        <Route element={<MainLayout />}>
          
          {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* USER CRUD */}
          <Route path="/users" element={<Users />} />

          {/* MEMBERS */}
          <Route path="/members" element={<Members />} />

          {/* ORDERS */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetail />} />

          {/* CUSTOMERS */}
          <Route path="/customers" element={<Customers />} />
          <Route
            path="/customers/:id"
            element={<CustomerDetail />}
          />

        

          {/* CRM FEATURES */}
          <Route path="/loyalty" element={<Loyalty />} />
          <Route
            path="/segmentation"
            element={<Segmentation />}
          />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/analytics" element={<Analytics />} />

        </Route>

        {/* FALLBACK */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </Suspense>
  );
}