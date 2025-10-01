import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import App from "./App.jsx";
import "./index.css";

const recaptchaSiteKey = "6LeMIMorAAAAACkc1Tx7R1YxijIeh0vcseGSSila";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
            <App />
        </GoogleReCaptchaProvider>
    </React.StrictMode>,
);
