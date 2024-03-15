import * as React from "react";
import { createRoot } from "react-dom/client";

import Test from "./Test";

const root = createRoot(document.body);
root.render(
  <>
    <Test />
    <h2>Hello from React!</h2>
  </>
);
