import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";

import { Buffer } from "buffer";

(globalThis as any).Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root")!).render(<Routes />);
