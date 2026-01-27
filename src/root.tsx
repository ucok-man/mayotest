import { Outlet } from "react-router";

import type { Route } from "./+types/root";

import RootErrorBoundary from "./components/error-boundary/root.error-boundary";
import RootLayout from "./components/layouts/root.layout";
import "./index.css";

export const links: Route.LinksFunction = () => [
  //   { rel: "preconnect", href: "https://fonts.googleapis.com" },
  //   {
  //     rel: "preconnect",
  //     href: "https://fonts.gstatic.com",
  //     crossOrigin: "anonymous",
  //   },
  //   {
  //     rel: "stylesheet",
  //     href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  //   },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary(props: Route.ErrorBoundaryProps) {
  return <RootErrorBoundary {...props} />;
}
