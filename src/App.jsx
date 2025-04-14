import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import FacultyDashboard from "./Components/FacultyDashboard";
import StudentDashboard from "./Components/StudentDashboard";
import CertIssuanceForm from "./Components/CertIssuanceForm";
import FacultyIssuedCertificates from "./Components/FacultyIssuedCertificates";
import Settings from "./Components/Settings";
import StudentCertificates from "./Components/StudentCertificates";
import RaiseComplaint from "./Components/RaiseComplaint";
import StuSettings from "./Components/settings_student";
import VerificationPage from "./Components/VerificationPage";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/certificate-issuance-form" element={<CertIssuanceForm />} />
        <Route path="/faculty-issued-certificates" element={<FacultyIssuedCertificates />} />
        <Route path="/student-certificates" element={<StudentCertificates />} />
        <Route path="/raise-complaint" element={<RaiseComplaint />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings-student" element={<StuSettings />} />
        <Route path="/verification-page" element={<VerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;