import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";

// Lazy-loaded components
const Header = lazy(() => import("../Pages/Header"));
const Footer = lazy(() => import("../Pages/Footer"));
const Home = lazy(() => import("../Pages/Home"));
const LoginPage = lazy(() => import("../Pages/LoginPage"));

export default function RouterTheme() {
  const storedUser = useSelector((state: any) => state.session.username); // Get the username from Redux store

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500 font-semibold text-sm">
                  Loading...
                </span>
              </div>
            </div>
          }
        >
          {storedUser && <Header />}
          <div className="flex flex-grow bg-gray-100">
            <Routes>
              {storedUser ? (
                <Route path="/" element={<Home />} />
              ) : (
                <>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="*" element={<Navigate to="/login" replace />} />
                </>
              )}
            </Routes>
          </div>
          {storedUser && <Footer />}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
