import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

function loadScript(src: string) {
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
}

setTimeout(() => {
  loadScript(
    "https://backend.leadconnectorhq.com/appengine/loc/xwkrBr5a4A7mmCiXS8Bq/pool/2ADTgulXtdbYx284dFLr/number_pool.js"
  );
  loadScript(
    "https://backend.leadconnectorhq.com/appengine/js/user_session.js"
  );
}, 800);
