import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
    <div className="text-red">
        <App />
    </div>
);
