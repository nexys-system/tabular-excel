import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";

import { Buffer as BufferPolyfill } from "Buffer";
declare var Buffer: typeof BufferPolyfill;
(globalThis as any).Buffer = BufferPolyfill;

console.log("buffer", Buffer.from("foo", "hex"));

ReactDOM.createRoot(document.getElementById("root")!).render(<Routes />);
