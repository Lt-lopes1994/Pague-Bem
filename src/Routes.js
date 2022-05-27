import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ProgressBarVertical from "./Components/ProgressBar";
import useGlobalContext from "./Hooks/useGlobalContext";
import RegisterName from "./Pages/RegisterName";
import RegisterPassword from "./Pages/RegisterPassword";
import RegisterConcluded from "./Pages/RegisterConcluded";
import Login from "./Pages/Login";
import FluxClient from "./Pages/FluxClient"

function ProtectedRoutes({ redirectTo }) {
  const { token } = useGlobalContext();

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<ProgressBarVertical activeStep={activeStep} />}>
        <Route
          path="/registerName"
          element={
            <RegisterName
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          }
        />
        <Route
          path="/registerPassword"
          element={
            <RegisterPassword
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          }
        />
        <Route
          path="/registerConcluded"
          element={
            <RegisterConcluded
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          }
        />
      </Route>
      <Route path="/FluxClient" element={<FluxClient />} />
    </Routes>
  );
}