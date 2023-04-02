import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./widgets/Layout";
import Loading from "./widgets/Loading";

const Welcome = React.lazy(() => import('./pages/welcome'));
const Dashboard = React.lazy(() => import('./pages/dashboard'));
const KirCamera = React.lazy(() => import('./pages/kir'));
const History = React.lazy(() => import('./pages/history'));
const ErrorPage = React.lazy(() => import('./pages/error'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/camera" element={<KirCamera />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<ErrorPage code="404" message="Halaman tidak ditemukan!" />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;