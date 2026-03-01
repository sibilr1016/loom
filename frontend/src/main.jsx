import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import CompleteProfileModal from "./components/CompleteProfileModal.jsx";
import OtpModal from "./components/OtpModal.jsx";
import Products from "./pages/Products.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/otp" element={<OtpModal />} />
          <Route path="/complete-profile" element={<CompleteProfileModal />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
