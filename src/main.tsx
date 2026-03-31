import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App.tsx";
import "./index.css";

// The library vite-react-ssg explicitly searches for an export named 'createRoot'
export const createRoot = ViteReactSSG({ routes }, ({ isClient }) => {
  // Custom setup logic if needed
});
