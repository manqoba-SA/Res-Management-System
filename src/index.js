import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

import AboutUs from "./pages/aboutUs/aboutUs";
import Lifestyle from "./pages/Lifestyle/LifeStyle";
import Buildings from "./pages/buildings/Buildings";
import Conatct from "./pages/contact/Contact";
import ViewJoburg from "./pages/buildings/Child/ViewJorburg";
import ViewDurban from "./pages/buildings/Child/ViewDurban";
import Register from "./pages/logInAndRegisteration/Register";
import Login from "./pages/logInAndRegisteration/Login";
import StudentDashboard from "./pages/Dashbord/Student/StudentDashboard";
import Application from "./pages/Dashbord/Student/Application";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoutes from "./ProtectedRoutes";
import CompleteRegister from "./pages/logInAndRegisteration/CompleteRegister";
import AdminDashboard from "./pages/Dashbord/Admin/AdminDashboard";
import Students from "./pages/Dashbord/Admin/components/students/Students";
import Applications from "./pages/Dashbord/Admin/components/applications/Applications";
import Notifications from "./pages/Dashbord/Admin/components/notifications/Notifications";
import Maintenance from "./pages/Dashbord/Admin/components/maintanance/Maintenance";
import StudentView from "./pages/Dashbord/Admin/components/students/StudentView";
import AdminLogin from "./pages/Dashbord/Admin/AdminLogin";
import ApplicationView from "./pages/Dashbord/Admin/components/applications/ApplicationView";
import AdminRegister from "./pages/Dashbord/Admin/AdminRegister";
import StudentNotification from "./pages/Dashbord/Student/components/notifications/StudentNotification";
import StudentLeasePage from "./pages/Dashbord/Student/components/lease/StudentLeasePage";
import StudentInvoicePage from "./pages/Dashbord/Student/components/invoice/StudentInvoicePage";
import StudentMaintenance from "./pages/Dashbord/Student/components/maintenance/StudentMaintenance";
import MaintenanceView from "./pages/Dashbord/Admin/components/maintanance/MaintenanceView";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        <Route path="buildings" element={<Buildings />}></Route>
        <Route path="dorfontein" element={<ViewJoburg />} />
        <Route path="durban" element={<ViewDurban />} />
        <Route path="contact" element={<Conatct />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="admin/login" element={<AdminLogin />} />

        <Route path="admin-dashboard/students" element={<Students />} />
        <Route path="admin-dashboard/applications" element={<Applications />} />
        <Route
          path="admin-dashboard/applications/:id"
          element={<ApplicationView />}
        />
        <Route
          path="admin-dashboard/notification"
          element={<Notifications />}
        />
        <Route path="admin-dashboard/maintenance" element={<Maintenance />} />
        <Route path="admin-dashboard/students/:id" element={<StudentView />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="student-dashboard" element={<StudentDashboard />} />
          <Route
            path="student-dashboard/notifications"
            element={<StudentNotification />}
          />
          <Route
            path="student-dashboard/lease"
            element={<StudentLeasePage />}
          />
          <Route
            path="student-dashboard/invoice"
            element={<StudentInvoicePage />}
          />
          <Route
            path="student-dashboard/maintenance"
            element={<StudentMaintenance />}
          />
          <Route path="registaration-complete" element={<CompleteRegister />} />
          <Route path="apply" element={<Application />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          <Route path="admin/register" element={<AdminRegister />} />
          <Route
            path="admin-dashboard/maintenance/:id"
            element={<MaintenanceView />}
          />
        </Route>
        {/* <Route path="student-dashboard" element={<StudentDashboard />} /> */}
        {/* <Route path="apply" element={<Application />} /> */}
      </Routes>
    </UserAuthContextProvider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
