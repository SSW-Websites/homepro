import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

function loadScript(src: string, target: "head" | "body" = "body") {
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  s.defer = true;
  document[target === "head" ? "head" : "body"].appendChild(s);
}

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
if (recaptchaSiteKey) {
  loadScript(`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`, "head");
}

setTimeout(() => {
  loadScript(
    "https://backend.leadconnectorhq.com/appengine/loc/xwkrBr5a4A7mmCiXS8Bq/pool/HxGJbuPb5OkWWKaDY1Bu/number_pool.js"
  );
  loadScript(
    "https://backend.leadconnectorhq.com/appengine/js/user_session.js"
  );
}, 800);
